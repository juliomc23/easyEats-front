export interface Ingredient {
  id: number;
  name: string;
  value: number;
  unit: Unit;
}

export type Unit = 'g' | 'ud' | 'l';

export type NewIngredient = Omit<Ingredient, 'id'>;
