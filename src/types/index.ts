export interface Jogador {
  nome: string;
  email: string;
  jogo: 'cs2' | 'valorant' | 'overwatch2' | 'mk';
  login: string;
  senha: string;
}

export type JogoId = 'cs2' | 'valorant' | 'overwatch2' | 'mk';

export interface JogoInfo {
  id: JogoId;
  nome: string;
  subtitulo: string;
  imagem: string;
}

export interface ToastState {
  mensagem: string;
  isError: boolean;
  visivel: boolean;
}