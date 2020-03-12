import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { ScullyContentModule, ScullyLibModule } from '@scullyio/ng-lib';
import { BlogListComponent } from './blog-list/blog-list.component';


@NgModule({
  declarations: [BlogComponent, BlogListComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    ScullyContentModule,
    ScullyLibModule
  ]
})
export class BlogModule { }
