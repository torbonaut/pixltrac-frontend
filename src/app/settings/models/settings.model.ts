export interface IColorPalette {
  id?: number;
  title: string;
  colors: string[];
}

export const DefaultColorPalette: IColorPalette = {
  title: 'Standard',
  colors: ['#64dd17', '#d50000']
};


export interface ICategory {
  id?: number;
  title: string;
  description: string;
  activated: boolean;
  iconUrl: string;
  labels: string[];
  created: Date;
}
