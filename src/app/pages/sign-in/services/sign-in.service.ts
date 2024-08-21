import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, firstValueFrom } from 'rxjs';
import { SuccessfullyAuthResponse } from '../interfaces/sign-in.interface';
import { environment } from '@envs/environment.development';

@Injectable({
  providedIn: 'root',
})
export class SignInService {
  private httpClient: HttpClient = inject(HttpClient);

  public signIn(email: string, password: string) {
    return firstValueFrom(
      this.httpClient
        .post<SuccessfullyAuthResponse>(
          `${environment.API_BASE_URL}/auth/signin`,
          {
            email,
            password,
          },
          {
            withCredentials: true,
          }
        )
        .pipe(
          catchError((error) => {
            throw new Error(error.error.message);
          })
        )
    );
  }
}
