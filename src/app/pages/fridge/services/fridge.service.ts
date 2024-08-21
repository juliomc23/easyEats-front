import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@envs/environment.development';
import { catchError, firstValueFrom } from 'rxjs';
import { Ingredient, NewIngredient } from '../interfaces/ingredient.interface';

@Injectable({
  providedIn: 'root',
})
export class FridgeService {
  private httpClient: HttpClient = inject(HttpClient);

  getFridgeIngredients() {
    return this.httpClient
      .get<Ingredient[]>(`${environment.API_BASE_URL}/ingredients`)
      .pipe(
        catchError((error) => {
          throw new Error(error.error.message);
        })
      );
  }

  addIngredient({ name, value, unit }: NewIngredient) {
    return firstValueFrom(
      this.httpClient
        .post(
          `${environment.API_BASE_URL}/ingredients`,
          {
            name,
            value,
            unit,
          },
          { observe: 'response' }
        )
        .pipe(
          catchError((error) => {
            throw new Error(error.error.message);
          })
        )
    );
  }

  modifyIngredient(
    ingredientIdToModify: number,
    newIngredientData: Partial<Ingredient>
  ) {
    // this.fridgeIngredients.update((ingredients) => {
    //   return ingredients.map((ingredient) => {
    //     if (ingredient.id === ingredientIdToModify) {
    //       return { ...ingredient, ...newIngredientData };
    //     }
    //     return ingredient;
    //   });
    // });
  }
}
