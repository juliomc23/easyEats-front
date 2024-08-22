import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { Ingredient } from '../interfaces/ingredient.interface';
import { FridgeService } from '../services/fridge.service';

@Injectable({
  providedIn: 'root',
})
export class FridgeIngredientsService {
  private fridgeService$ = inject(FridgeService);
  private $fridgeIngredients: WritableSignal<Ingredient[]> = signal<
    Ingredient[]
  >([]);

  getFridgeIngredients(): WritableSignal<Ingredient[]> {
    return this.$fridgeIngredients;
  }

  setFridgeIngredients(ingredients: Ingredient[]) {
    this.$fridgeIngredients.set(ingredients);
  }

  addFridgeIngredient(ingredient: Ingredient) {
    this.$fridgeIngredients.update((prevIngredientState) => [
      ingredient,
      ...prevIngredientState,
    ]);
  }

  modifyFridgeIngredient(ingredientUpdated: Ingredient) {
    this.$fridgeIngredients.update((prevIngredientState) =>
      prevIngredientState.map((ingredientInFridge) =>
        ingredientInFridge.id === ingredientUpdated.id
          ? ingredientUpdated
          : ingredientInFridge
      )
    );
  }

  deleteFridgeIngredient(ingredientId: number) {
    this.$fridgeIngredients.update((prevIngredientState) =>
      prevIngredientState.filter(
        (ingredientInFridge) => ingredientInFridge.id !== ingredientId
      )
    );
  }
}
