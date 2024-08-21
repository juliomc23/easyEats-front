import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccessTokenService {
  private accessToken: WritableSignal<string> = signal('');

  getAccessToken(): WritableSignal<string> {
    return this.accessToken;
  }

  setAccessToken(token: string): void {
    this.accessToken.set(token);
  }
}
