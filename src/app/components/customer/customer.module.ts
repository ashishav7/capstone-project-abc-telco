import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTicketsComponent } from './list-tickets/list-tickets.component';
import { RouterModule, Routes } from '@angular/router';
import { CustNavbarComponent } from './cust-navbar/cust-navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { RaiseTicketComponent } from './raise-ticket/raise-ticket.component';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes =[
  {path:'',component:ListTicketsComponent},
  {path:'raise-a-ticket',component:RaiseTicketComponent}
];
@NgModule({
  declarations: [
    ListTicketsComponent,
    CustNavbarComponent,
    RaiseTicketComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class CustomerModule { }
