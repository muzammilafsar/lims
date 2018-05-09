import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './main/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './admin/home/home.component';
import { hostElement } from '@angular/core/src/render3/instructions';
import { AddbookComponent } from './admin/addbook/addbook.component';
import { BorrowedComponent } from './main/borrowed/borrowed.component';
import { AllborrowedComponent } from './admin/allborrowed/allborrowed.component';

const routes: Routes = [
    {
        path: '',
        component: HomepageComponent
    },
    {
        path: 'borrowedbooks',
        component: BorrowedComponent
    },
    {
        path: 'admin',
        component: HomeComponent,
        children: [
            {
                path: 'addbook',
                component: AddbookComponent
            },
            {
                path: 'allborrowed',
                component: AllborrowedComponent
            }
        ]
    }
];
@NgModule({
    declarations: [ ],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
