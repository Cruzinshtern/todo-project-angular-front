import { Injectable } from "@angular/core";
import { ActivatedRoute, Route, Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class NavService {
    constructor(private _router: Router, private _route: ActivatedRoute) {}

    async redirectToDetails(id: string): Promise<void> {
        await this._router.navigate(['todo-page'], { queryParams: { id } });
    }

    getRouterDetails(queryParam: string): any {
        return this._route.snapshot.queryParams[queryParam];
    }
  }