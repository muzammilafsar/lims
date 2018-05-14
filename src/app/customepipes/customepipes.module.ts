import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './search.pipe';
import { CategoryFilterPipe } from './category.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    FilterPipe,
    CategoryFilterPipe,
  ],
  declarations: [FilterPipe, CategoryFilterPipe]
})
export class CustomepipesModule { }
