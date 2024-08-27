import { Injectable, signal, WritableSignal } from '@angular/core';
import { Recipe } from '../types/recipes.interface';

@Injectable({
  providedIn: 'root',
})
export class RecipesSignalService {
  private $recipes: WritableSignal<Recipe[]> = signal([
    {
      id: 1,
      name: 'Tortilla de patatas',
      favorite: true,
      prepare_time: 30,
      prepare_time_unit: 'min',
      ingredients: [
        {
          name: 'Patatas',
          value: 500,
          unit: 'g',
        },
        {
          name: 'Cebolla',
          value: 1,
          unit: 'ud',
        },
        {
          name: 'Ajo',
          value: 1,
          unit: 'ud',
        },
        {
          name: 'Sal',
          value: 1,
          unit: 'g',
        },
      ],
      steps: [
        'Pelar las patatas',
        'Pelar la cebolla',
        'Pelar el ajo',
        'Cocinar',
      ],
    },
  ]);

  constructor() {}

  getRecipes(): WritableSignal<Recipe[]> {
    return this.$recipes;
  }

  addNewRecipe(recipe: Recipe) {
    this.$recipes.update((prev) => [...prev, recipe]);
  }
}
