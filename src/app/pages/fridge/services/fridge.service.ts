import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@envs/environment.development';
import { catchError, firstValueFrom, map } from 'rxjs';
import { Ingredient, NewIngredient } from '../interfaces/ingredient.interface';
import { SuccessDeleteIngredientResponse } from 'app/shared/types/server-responses.interface';

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
    newIngredientData: NewIngredient
  ) {
    return this.httpClient
      .patch<Ingredient>(
        `${environment.API_BASE_URL}/ingredients/${ingredientIdToModify}`,
        newIngredientData,
        { observe: 'response' }
      )
      .pipe(
        map((response) => {
          const status = response.status;
          const body = response.body;

          return { status, body };
        }),
        catchError((error) => {
          throw new Error(error.error.message);
        })
      );
  }

  deleteIngredient(id: number) {
    return this.httpClient
      .delete<SuccessDeleteIngredientResponse>(
        `${environment.API_BASE_URL}/ingredients/${id}`,
        { observe: 'response' }
      )
      .pipe(
        map((response) => {
          const status = response.status;
          const body = response.body;
          return { status, body };
        }),
        catchError((error) => {
          throw new Error(error.error.message);
        })
      );
  }
}
