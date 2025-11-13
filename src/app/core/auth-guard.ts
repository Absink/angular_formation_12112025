import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);

  const userConnected = localStorage.getItem('userFormation');
  if (!userConnected) {
    router.navigateByUrl('/login');
    return false;
  }
  return true;
};
