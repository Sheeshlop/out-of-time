import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavHeaderComponent } from './nav-header.component';

const routes: Routes = [
    {
        path: '',
        component: NavHeaderComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class NavHeaderRoutingModule { }
