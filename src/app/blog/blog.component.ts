import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { map } from 'rxjs/operators';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';

@Component({
	selector: 'app-blog',
	templateUrl: './blog.component.html',
	styleUrls: ['./blog.component.sass'],
	preserveWhitespaces: true,
	encapsulation: ViewEncapsulation.Emulated
})
export class BlogComponent implements OnInit {
	constructor() { }
	ngOnInit(): void {
	}

}
