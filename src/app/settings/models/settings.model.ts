export interface IColorPalette {
  id?: number;
  title: string;
  colors: [string, string, string, string, string];
}

export const DefaultColorPalette: IColorPalette = {
  title: 'Standard',
  colors: ['#64dd17', '#d4e157', '#ffd600', '#f4511e', '#d50000']
};


export interface ICategory {
  id?: number;
  title: string;
  description: string;
  activated: boolean;
  iconUrl: string;
  dailyQueries: number;
  dailyQueriesLabels: string[];
  influenceFactor: number;
  labelsShort: [string, string, string, string, string];
  labelsLong: [string, string, string, string, string];
}
