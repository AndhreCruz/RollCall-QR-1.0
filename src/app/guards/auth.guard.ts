import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = async (route, state) => {
  const auth = inject(Auth);
  const user = auth.currentUser;

  if (user) {
    return true;
  } else {

    const router = inject(Router);
    router.navigate(['/login']);
    return false;
  }
};

