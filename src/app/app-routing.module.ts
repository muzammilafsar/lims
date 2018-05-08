import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './main/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './admin/home/home.component';
import { hostElement } from '@angular/core/src/render3/instructions';
import { AddbookComponent } from './admin/addbook/addbook.component';

const routes: Routes = [
    {
        path: '',
        component: HomepageComponent
    },
    {
        path: 'admin',
        component: HomeComponent,
        children: [
            {
                path: 'addbook',
                component: AddbookComponent
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
