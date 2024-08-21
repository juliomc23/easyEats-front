import { CanActivateFn, Router } from '@angular/router';
import { AccessTokenService } from '../signals/access-token.service';
import { inject } from '@angular/core';
import { CustomRoutes } from '../types/routes.enum';

export const tokenGuard: CanActivateFn = () => {
  const router = inject(Router);
  const accessTokenService = inject(AccessTokenService);
  const accessToken$ = accessTokenService.getAccessToken();
  if (!accessToken$()) {
    router.navigate([CustomRoutes.SIGN_IN]);
    return false;
  }
  return true;
};
