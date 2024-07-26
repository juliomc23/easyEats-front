export interface Ingredient {
  id: number;
  name: string;
  qty: Quantity;
}

interface Quantity {
  value: number;
  unit: 'gr' | 'ud';
}
