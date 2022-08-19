export enum Color {
  LightGreen = "#77E0D1",
  Green = "#2ED2C9",
  Gray = "#EAF2F2",
  White = "#FFFFFF",
  Black = "#000000",
}

export interface IOption {
  value: number;
  label: string;
}

export enum Media {
  Small = `@media screen and (max-width: 568px)`,
  Medium = "@media screen and (max-width: 768px)",
}
