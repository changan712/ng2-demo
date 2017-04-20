import {Injectable} from '@angular/core';
import {CrisisService, Crisis} from "./crisis.service";
import {Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";

@Injectable()
export class CrisisDetailResolveService implements Resolve<Crisis> {
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Crisis>{
        let id = route.params.id;

        return this.cs.getCrisis(id).then(crisis => {
            if (crisis) {
                return crisis
            } else {
                this.router.navigate(['/crisis-center']);
                return null;
            }
        })


    }

    constructor(private cs: CrisisService, private router: Router) {
    }
}

