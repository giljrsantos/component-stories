export interface StoriesItem {
  descricao: string;
  descricaoCorHex: string;
  status: StoriesItemStatus;
  urlImagem: string;
}

export enum StoriesItemStatus {
  'ativo' = 'ativo',
  'aguardando' = 'aguardando',
  'finalizado' = 'finalizado',
}
