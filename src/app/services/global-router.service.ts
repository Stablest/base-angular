import { Injectable } from "@angular/core"
import { Scroll, NavigationStart, Router, NavigationEnd } from "@angular/router"
import { Observable, filter } from "rxjs"

@Injectable({
    providedIn: 'root'
})
export class GlobalRouterService {
    navigationEnd$: Observable<Scroll>
    navigationStart$: Observable<NavigationStart>

    constructor(private router: Router) {
        this.navigationEnd$ = this.router.events.pipe(
            filter(event => event instanceof Scroll && event.routerEvent instanceof NavigationEnd),
        ) as Observable<Scroll>
        this.navigationStart$ = this.router.events.pipe(
            filter(event => event instanceof NavigationStart),
        )
    }
}