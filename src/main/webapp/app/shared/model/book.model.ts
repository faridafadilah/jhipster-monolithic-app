export interface IBook {
  id?: number;
  name?: string | null;
  penerbit?: string | null;
  author?: string | null;
}

export const defaultValue: Readonly<IBook> = {};
