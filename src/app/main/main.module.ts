import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import {RouterModule} from '@angular/router';
import { ApiserviceService } from '../apiservice.service';
import { CustomepipesModule } from '../customepipes/customepipes.module';
import { FilterPipe } from '../customepipes/search.pipe';
import { BorrowedComponent } from './borrowed/borrowed.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CustomepipesModule
  ],
  providers: [ApiserviceService  ],
  declarations: [HomepageComponent, BorrowedComponent, ]
})
export class MainModule { }
