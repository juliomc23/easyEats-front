import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@envs/environment.development';
import { SuccessfullyAuthResponse } from '@pages/sign-in/interfaces/sign-in.interface';

@Injectable({
  providedIn: 'root',
})
export class RefreshAccessTokenService {
  private httpClient: HttpClient = inject(HttpClient);

  refreshAccessToken() {
    return this.httpClient.get<SuccessfullyAuthResponse>(
      `${environment.API_BASE_URL}/auth/refresh`
    );
  }
}
