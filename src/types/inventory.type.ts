export type Inventory = {
  id: string;
  name: string;
  image: string;
  position?: {
    row: number;
    col: number;
  };
};
