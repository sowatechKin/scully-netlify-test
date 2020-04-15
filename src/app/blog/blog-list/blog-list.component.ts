import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { DataService } from '../../data.service';

@Component({
    selector: 'app-blog-list',
    templateUrl: './blog-list.component.html'
})
export class BlogListComponent implements OnInit {

    constructor(private srs: ScullyRoutesService, private dataService: DataService) { }

    public blogs: any[] = [];
    async ngOnInit() {
        this.blogs = await this.dataService.getDataList("blog");
    }
}
