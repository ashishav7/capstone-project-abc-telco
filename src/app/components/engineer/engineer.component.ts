import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';
import { UserApiService } from 'src/app/services/user-api.service';

@Component({
  selector: 'app-engineer',
  templateUrl: './engineer.component.html',
  styleUrls: ['./engineer.component.css']
})
export class EngineerComponent implements OnInit {
  public tickets:any;
  public selStatus:any = "Assigned";
  public dis:boolean = false;
  constructor(private userService:UserApiService,private ticketService:TicketService) { 
    this.getTickets();
  }

  ngOnInit(): void {
  }
  public getTickets(){
    this.userService.getTickets(sessionStorage.getItem("id")).subscribe(
      res=>{
        this.tickets = res;
        this.filterUnresolved();
      },
      err=>{
        console.log(err);
        
      }
    );
  }

  public changeStatus(st:any){
    this.selStatus = st.target.value;
  }
  public updateStatus(tktId:any){
    console.log(tktId);
    console.log(this.selStatus);
    this.ticketService.updateTicketStatus(tktId,this.selStatus).subscribe(
      res=>console.log(res),
      err=>console.log(err)
    );
  }

  public filterUnresolved(){
    this.tickets.filter((tkt:any)=>tkt.status == 'Assigned');
  }
}
