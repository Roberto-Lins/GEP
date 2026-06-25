// Mensagens de erro/sucesso por CÓDIGO. As rotas de API redirecionam com `?erro=<code>`
// (códigos de um conjunto fixo, nunca texto livre do usuário) e as páginas mapeiam o
// código para um texto fixo daqui — evitando qualquer reflexão de entrada do usuário.

export const LOGIN_ERROS: Record<string, string> = {
  credenciais: 'E-mail ou senha incorretos.',
  validacao: 'Confira os dados informados.',
  rate: 'Muitas tentativas. Aguarde um minuto e tente novamente.',
  nao_verificado: 'Confirme seu e-mail antes de entrar — verifique sua caixa de entrada.',
  callback: 'O link expirou ou é inválido. Tente novamente.',
};

export const CADASTRO_ERROS: Record<string, string> = {
  validacao: 'Confira os dados — senha de 8+ caracteres e nome de usuário válido.',
  username: 'Esse nome de usuário não está disponível.',
  rate: 'Muitas tentativas. Aguarde um minuto.',
  falha: 'Não foi possível concluir o cadastro. Tente novamente.',
};

export const REDEFINIR_ERROS: Record<string, string> = {
  validacao: 'A senha precisa ter 8+ caracteres e as duas devem coincidir.',
  expirado: 'O link de redefinição expirou. Solicite um novo.',
  falha: 'Não foi possível redefinir a senha. Tente novamente.',
};

export const PERFIL_ERROS: Record<string, string> = {
  validacao: 'Confira os campos do perfil.',
  username: 'Esse nome de usuário não está disponível.',
  falha: 'Não foi possível salvar. Tente novamente.',
};

export const CONFIG_ERROS: Record<string, string> = {
  validacao: 'Confira os campos.',
  senha_atual: 'A senha atual está incorreta.',
  rate: 'Muitas tentativas. Aguarde alguns minutos.',
  falha: 'Não foi possível alterar a senha.',
};

export function msgDe(mapa: Record<string, string>, code: string | null): string | null {
  if (!code) return null;
  return mapa[code] ?? 'Algo deu errado. Tente novamente.';
}
