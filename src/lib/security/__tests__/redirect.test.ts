import { describe, it, expect } from 'vitest';
import { safeRedirectPath } from '../redirect';

const BACKSLASH = String.fromCharCode(92);

describe('safeRedirectPath', () => {
  it('aceita caminhos relativos same-origin', () => {
    expect(safeRedirectPath('/app')).toBe('/app');
    expect(safeRedirectPath('/app/perfil?x=1#h')).toBe('/app/perfil?x=1#h');
    expect(safeRedirectPath('/ano/4/ca-he/1/p1')).toBe('/ano/4/ca-he/1/p1');
  });

  it('rejeita URLs absolutas (open redirect)', () => {
    expect(safeRedirectPath('https://evil.com')).toBe('/app');
    expect(safeRedirectPath('http://evil.com/x')).toBe('/app');
  });

  it('rejeita protocolo-relativo e truques de barra', () => {
    expect(safeRedirectPath('//evil.com')).toBe('/app');
    expect(safeRedirectPath('/' + BACKSLASH + 'evil.com')).toBe('/app');
    expect(safeRedirectPath('/x' + BACKSLASH + 'y')).toBe('/app');
    expect(safeRedirectPath('/\tx')).toBe('/app'); // caractere de controle
  });

  it('rejeita esquemas perigosos', () => {
    expect(safeRedirectPath('javascript:alert(1)')).toBe('/app');
    expect(safeRedirectPath('data:text/html,x')).toBe('/app');
    expect(safeRedirectPath('mailto:a@b.com')).toBe('/app');
  });

  it('usa o fallback informado e trata entradas não-string', () => {
    expect(safeRedirectPath('', '/login')).toBe('/login');
    expect(safeRedirectPath(null)).toBe('/app');
    expect(safeRedirectPath(undefined)).toBe('/app');
    expect(safeRedirectPath(42 as unknown)).toBe('/app');
  });
});
