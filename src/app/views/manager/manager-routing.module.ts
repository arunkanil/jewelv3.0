import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../login/auth.guard';
import { ManagerCustomerDetailComponent } from './customerdetail.component';
import { ManagerCustomerComponent } from './customers.component';
import { EnquiriesComponent } from './enquiries.component';
import { EnquiryDetailComponent } from './enquirydetails.component';

import { VerifiedListComponent } from './verified.component';

const routes: Routes = [
  {
    path: '',
    // data: {
    //   title: 'Theme'
    // },
    children: [
      {
        path: '',
        redirectTo: 'manager'
      },
      {
        path: 'verified_list',
        canActivate: [AuthGuard],
        component: VerifiedListComponent,
        data: {
          roles: 'MANAGER',
          title: 'Verified List'
        }
      },
      {
        path: 'customers',
        canActivate: [AuthGuard],
        component: ManagerCustomerComponent,
        data: {
          roles: 'MANAGER',
          title: 'Customers'
        }
      },
      {
        path: 'agents',
        canActivate: [AuthGuard],
        component: VerifiedListComponent,
        data: {
          roles: 'MANAGER',
          title: 'Agents List'
        }
      },
      {
        path: 'enquiries',
        canActivate: [AuthGuard],
        component: EnquiriesComponent,
        data: {
          roles: 'MANAGER',
          title: 'Enquiries'
        }
      },
      {
        path: 'customer_details/:id',
        canActivate: [AuthGuard],
        component: ManagerCustomerDetailComponent,
        data: {
          roles: 'MANAGER',
          title: 'Customer Details'
        }
      },
      {
        path: 'enquiry_details/:id',
        canActivate: [AuthGuard],
        component: EnquiryDetailComponent,
        data: {
          roles: 'MANAGER',
          title: 'Enquiry Details'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule {}
