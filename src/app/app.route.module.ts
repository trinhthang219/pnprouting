import { NgModule,ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerManagementComponent } from './customer-management/customer-management.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'customer', pathMatch: 'full' },
  { path: 'customer', component: CustomerComponent },
  { path: 'customerdetail', component: CustomerDetailComponent },
  { path: 'customermgt', component: CustomerManagementComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})

export class AppRoutingModule {}
export const routingComponents = [CustomerComponent,CustomerDetailComponent,CustomerManagementComponent,PageNotFoundComponent];