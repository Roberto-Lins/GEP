import { describe, it, expect } from 'vitest';
import {
  usernameSchema,
  passwordSchema,
  signupSchema,
  loginSchema,
  profileSchema,
  isReservedUsername,
} from '../auth';

describe('usernameSchema', () => {
  it('aceita e normaliza', () => {
    expect(usernameSchema.safeParse('aspirante_silva').success).toBe(true);
    expect(usernameSchema.parse('ABC123')).toBe('abc123');
  });
  it('rejeita comprimento e formato inválidos', () => {
    expect(usernameSchema.safeParse('ab').success).toBe(false);
    expect(usernameSchema.safeParse('a'.repeat(31)).success).toBe(false);
    expect(usernameSchema.safeParse('com espaco').success).toBe(false);
    expect(usernameSchema.safeParse('hi-fen').success).toBe(false);
    expect(usernameSchema.safeParse('acentução').success).toBe(false);
  });
  it('rejeita reservados', () => {
    expect(usernameSchema.safeParse('admin').success).toBe(false);
    expect(usernameSchema.safeParse('app').success).toBe(false);
    expect(usernameSchema.safeParse('gep').success).toBe(false);
    expect(usernameSchema.safeParse('fas').success).toBe(false);
  });
});

describe('isReservedUsername', () => {
  it('detecta reservados (case-insensitive), incluindo o slug da EN', () => {
    expect(isReservedUsername('GEP')).toBe(true);
    expect(isReservedUsername('escola-naval')).toBe(true);
    expect(isReservedUsername('aspirante')).toBe(false);
  });
});

describe('passwordSchema', () => {
  it('exige 8..72 caracteres', () => {
    expect(passwordSchema.safeParse('1234567').success).toBe(false);
    expect(passwordSchema.safeParse('12345678').success).toBe(true);
    expect(passwordSchema.safeParse('x'.repeat(73)).success).toBe(false);
  });
});

describe('signupSchema', () => {
  const base = {
    username: 'aspirante_x',
    display_name: 'Aspirante',
    email: 'a@b.com',
    password: 'segredo12',
    confirm: 'segredo12',
    terms: 'on',
  };
  it('aceita um cadastro válido', () => {
    expect(signupSchema.safeParse(base).success).toBe(true);
  });
  it('rejeita senhas diferentes', () => {
    expect(signupSchema.safeParse({ ...base, confirm: 'outra1234' }).success).toBe(false);
  });
  it('exige aceite dos termos', () => {
    expect(signupSchema.safeParse({ ...base, terms: undefined }).success).toBe(false);
  });
  it('rejeita e-mail inválido', () => {
    expect(signupSchema.safeParse({ ...base, email: 'nao-email' }).success).toBe(false);
  });
});

describe('loginSchema', () => {
  it('valida e-mail + senha presentes', () => {
    expect(loginSchema.safeParse({ email: 'a@b.com', password: 'x' }).success).toBe(true);
    expect(loginSchema.safeParse({ email: 'x', password: 'y' }).success).toBe(false);
  });
});

describe('profileSchema', () => {
  it('aceita bio vazia e rejeita bio longa', () => {
    expect(profileSchema.safeParse({ display_name: 'X', username: 'valido_1', bio: '' }).success).toBe(true);
    expect(
      profileSchema.safeParse({ display_name: 'X', username: 'valido_1', bio: 'y'.repeat(281) }).success,
    ).toBe(false);
  });
});
