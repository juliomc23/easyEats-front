import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, switchMap, throwError } from 'rxjs';
import { RefreshAccessTokenService } from '../services/refresh-access-token.service';
import { AccessTokenService } from '../signals/access-token.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const accessTokenService = inject(AccessTokenService);
  const accessToken$ = accessTokenService.getAccessToken();

  const refreshTokenService = inject(RefreshAccessTokenService);

  const clonedReq = req.clone({
    withCredentials: true,
    setHeaders: {
      Authorization: `Bearer ${accessToken$()}`,
    },
  });

  return next(clonedReq).pipe(
    catchError((err) => {
      if (err.status === 401) {
        return refreshTokenService.refreshAccessToken().pipe(
          switchMap((response) => {
            accessTokenService.setAccessToken(response.accessToken);
            const newReq = req.clone({
              setHeaders: {
                Authorization: `Bearer ${response.accessToken}`,
              },
            });

            return next(newReq);
          }),
          catchError((refreshErr) => {
            const finalError = new Error(refreshErr);

            return throwError(() => finalError);
          })
        );
      }

      return throwError(() => err);
    })
  );
};
