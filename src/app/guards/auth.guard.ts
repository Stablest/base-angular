import { inject } from "@angular/core";
import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";

export const protectedRouteGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    //const authService = inject(AuthenticationService);
    const router = inject(Router)
    const isLoggedIn = false //authService.isLoggedIn();
    if (!isLoggedIn) {
        return router.parseUrl('/login-route')
    }
    return true;
}

export const unprotectedRouteGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    // const authService = inject(AuthenticationService);
    const router = inject(Router)
    const isLoggedIn = false //authService.isLoggedIn();
    if (isLoggedIn) {
        return router.parseUrl('')
    }
    return true;
}