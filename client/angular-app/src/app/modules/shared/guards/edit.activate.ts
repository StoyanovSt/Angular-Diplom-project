import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";

import { ProductService } from "../services/product-routes.service";
import { UserService } from "../services/user.service";

@Injectable()
export class EditActive implements CanActivate {
    constructor(
        private router: Router,
        private productService: ProductService,
        private userService: UserService
    ) { }

    async canActivate(route: ActivatedRouteSnapshot): Promise<any> {
        const currentProductId: string = route.params.productId;

        const fetchedProduct = await this.productService.getProductAsync(currentProductId);
        const fetchedProductSeller = await this.userService.getUserByIdAsync(fetchedProduct['product'].seller);        

        if (fetchedProductSeller.username === this.userService.getCurrentUserName()) {
            return true;
            
        } else {
            return this.router.parseUrl(`/product/${currentProductId}/details`);
        }
    }
}