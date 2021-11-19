import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EngineerApiService } from 'src/app/services/engineer-api.service';
import { TicketService } from 'src/app/services/ticket.service';
import { UserApiService } from 'src/app/services/user-api.service';

@Component({
  selector: 'app-assign-engineer',
  templateUrl: './assign-engineer.component.html',
  styleUrls: ['./assign-engineer.component.css']
})
export class AssignEngineerComponent implements OnInit {

  public ticket:any;
  public engineerList:any;
  constructor(private route: ActivatedRoute,private ticketService:TicketService,private engineerService:EngineerApiService,
    private userAPIService:UserApiService,private router:Router
    ) {
    this.getTicket();
    this.getEngineersList();  
  }

  ngOnInit(): void {
  }
  public getEngineersList(){
    
    this.engineerService.getEngineers(this.route.snapshot.params.pincode).subscribe(
      res=>{
        this.engineerList = res
      },
      err=>console.log(err) 
    )
  }

  public getTicket(){
    this.ticketService.getTicket(this.route.snapshot.params.tktid).subscribe(
      res=> {this.ticket = res
        console.log(res);
      },
      err=> console.log(err)
    );
  }

  public assignEngineer(ticket:any,id:any){
    this.engineerService.assignEngineer(id,ticket).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['manager']);        
      },
      err=>{
        console.log(err);
        
      }
    );
  }
}
