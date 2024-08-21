import { Pipe, PipeTransform } from '@angular/core';
import { Ingredient } from '../interfaces/ingredient.interface';

@Pipe({
  name: 'filterIngredients',
  standalone: true,
})
export class FilterIngredientsPipe implements PipeTransform {
  transform(
    ingredients: Ingredient[] | null,
    searchedIngredient: string
  ): Ingredient[] {
    if (!ingredients || !searchedIngredient) return ingredients || [];

    return ingredients.filter((ingredient) =>
      ingredient.name.toLowerCase().includes(searchedIngredient.toLowerCase())
    );
  }
}
