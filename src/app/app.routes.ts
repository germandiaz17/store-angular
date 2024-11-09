import { Routes } from '@angular/router';
import { NotFundComponent } from './domains/info/pages/not-fund/not-fund.component';
import { LayoutComponent } from '@shared/components/layout/layout.component';

export const routes: Routes = [
    {path: '', component: LayoutComponent, children:[
        {path: '', loadComponent: () => import('./domains/products/pages/list/list.component')},
        {path: 'about', loadComponent: () => import('./domains/info/pages/about/about.component')},
        {path: 'product/:id', loadComponent: () => import('./domains/products/pages/product-details/product-details.component')}
    ]},
    {path: '**', component: NotFundComponent}
];
