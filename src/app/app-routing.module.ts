import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './main/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './admin/home/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomepageComponent
    },
    {
        path: 'admin',
        component: HomeComponent
    }
];
@NgModule({
    declarations: [ ],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
