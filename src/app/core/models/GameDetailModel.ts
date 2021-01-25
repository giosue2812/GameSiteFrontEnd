export interface GameDetailModel {
  id: number;
  nom: string;
  description: string;
  prix: number;
  image: string;
  video: string[][];
  editeur: string;
  genre: string;
  platform: string;
  date_sortie:string;
  date_achat:string;
}
