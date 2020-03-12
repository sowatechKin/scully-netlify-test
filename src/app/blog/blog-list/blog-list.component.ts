import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';

@Component({
    selector: 'app-blog-list',
    templateUrl: './blog-list.component.html'
})
export class BlogListComponent implements OnInit {
    blogs$ = this.srs.available$.pipe(
        map(routeList =>
            routeList.filter((route: ScullyRoute) => route.route.startsWith(`/blog/`))
        )
    );

    constructor(private srs: ScullyRoutesService) { }

    ngOnInit(): void {
    }

}
