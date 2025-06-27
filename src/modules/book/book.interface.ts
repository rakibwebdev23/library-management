// Interface for Book module
export type TGenre =
  | 'FICTION'
  | 'NON_FICTION'
  | 'SCIENCE'
  | 'HISTORY'
  | 'BIOGRAPHY'
  | 'FANTASY';

// Book interface
export interface IBook {
  title: string;
  author: string;
  genre: TGenre;
  isbn: string;
  description?: string;
  copies: number;
  available?: boolean;
}
