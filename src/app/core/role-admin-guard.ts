import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { User } from '../shared/models/user.model';
import { RoleUser } from '../shared/enums/role-user';

export const roleAdminGuard: CanActivateFn = (route, state) => {
  
  const userConnected = new User(JSON.parse(localStorage.getItem('userFormation')!));

  if (userConnected && userConnected.role == RoleUser.ADMIN)
    return true;
  return false;
};
