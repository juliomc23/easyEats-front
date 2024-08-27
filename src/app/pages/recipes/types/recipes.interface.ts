import { NewIngredient } from '@pages/fridge/interfaces/ingredient.interface';

export interface Recipe {
  id: number;
  name: string;
  favorite: boolean;
  prepare_time: number;
  prepare_time_unit: string;
  ingredients: NewIngredient[];
  steps: string[];
}
