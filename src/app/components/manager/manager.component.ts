import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  public tickets:any;
  constructor(private ticketService:TicketService) {
   this.ticketService.getTickets().subscribe(
      res=>  this.tickets = res,
      err=>console.log(err)
    );
  }

  ngOnInit(): void {
  }

}
