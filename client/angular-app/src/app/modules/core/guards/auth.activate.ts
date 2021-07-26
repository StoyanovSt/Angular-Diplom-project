import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

import { UserService } from "../../user/user.service";

@Injectable()
export class AuthActive implements CanActivate {
    constructor(
        private router: Router,
        private userService: UserService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const { authRequired, authFailureRedirectUrl } = route.data;

        // ако имаме authRequired и ако се изисква аутентикация и ако потребителят е аутентикиран -> продължаваме
        if (typeof authRequired === 'boolean' && authRequired && this.userService.isLogged()) {
            return true;
        }
        
        return this.router.parseUrl(authFailureRedirectUrl);
    }

}