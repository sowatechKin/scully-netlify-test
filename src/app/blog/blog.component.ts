import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { DataService } from '../data.service';

@Component({
	selector: 'app-blog',
	templateUrl: './blog.component.html',
	styleUrls: ['./blog.component.sass'],
	preserveWhitespaces: true,
	encapsulation: ViewEncapsulation.Emulated
})
export class BlogComponent implements OnInit {
	constructor(
		private dataService: DataService,
		private srs: ScullyRoutesService) { }

	data: any;
	async ngOnInit() {
		await this.srs.getCurrent().subscribe((data) => {
			this.loadData(data.sourceFile);
		})
	}

	async loadData(file: string) {
		try {
			this.data = await this.dataService.getData("blog", file).toPromise();
		} catch (error) {
			console.log(error);
		}
	}
}
