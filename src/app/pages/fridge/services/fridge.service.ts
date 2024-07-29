import { Injectable, signal, WritableSignal } from '@angular/core';
import { Ingredient } from '../interfaces/ingredient.interface';

@Injectable({
  providedIn: 'root',
})
export class FridgeService {
  private fridgeIngredients: WritableSignal<Ingredient[]> = signal([
    { id: 1, name: 'Huevos', qty: { value: 12, unit: 'ud' } },
    { id: 2, name: 'Leche', qty: { value: 12, unit: 'gr' } },
    { id: 3, name: 'Carne', qty: { value: 12, unit: 'gr' } },
    { id: 4, name: 'Pollo', qty: { value: 12, unit: 'gr' } },
    { id: 5, name: 'Jamón', qty: { value: 12, unit: 'gr' } },
    { id: 6, name: 'Queso', qty: { value: 12, unit: 'gr' } },
    { id: 7, name: 'Pescado', qty: { value: 12, unit: 'gr' } },
  ]);

  getFridgeIngredients() {
    return this.fridgeIngredients;
  }

  addIngredient(ingredient: Ingredient) {
    this.fridgeIngredients.update((ingredients) => [
      ...ingredients,
      ingredient,
    ]);
  }

  modifyIngredient(
    ingredientIdToModify: number,
    newIngredientData: Partial<Ingredient>
  ) {
    this.fridgeIngredients.update((ingredients) => {
      return ingredients.map((ingredient) => {
        if (ingredient.id === ingredientIdToModify) {
          return { ...ingredient, ...newIngredientData };
        }
        return ingredient;
      });
    });
  }
}
