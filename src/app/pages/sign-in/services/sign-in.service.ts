import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, firstValueFrom } from 'rxjs';
import { SuccessfullySignInResponse } from '../interfaces/sign-in.interface';
import { CustomError } from '../../../shared/types/customError.class';

@Injectable({
  providedIn: 'root',
})
export class SignInService {
  private httpClient: HttpClient = inject(HttpClient);

  public signIn(email: string, password: string) {
    return firstValueFrom(
      this.httpClient
        .post<SuccessfullySignInResponse>('https://reqres.in/api/login', {
          email,
          password,
        })
        .pipe(
          catchError((error) => {
            const customError = new CustomError(error.error.error);
            throw customError;
          })
        )
    );
  }
}
