import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);

  const userConnected = true;
  if (!userConnected) {
    router.navigateByUrl('/home');
    return false;
  }
  return true;
};
