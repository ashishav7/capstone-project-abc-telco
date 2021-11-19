import { Component, OnInit } from '@angular/core';
import { UserApiService } from 'src/app/services/user-api.service';

@Component({
  selector: 'app-list-tickets',
  templateUrl: './list-tickets.component.html',
  styleUrls: ['./list-tickets.component.css']
})
export class ListTicketsComponent implements OnInit {

  public tickets:any;
  constructor(private userService:UserApiService) {
    this.getTickets();
  }

  ngOnInit(): void {
  }

  public getTickets(){
    this.userService.getTickets(sessionStorage.getItem("id")).subscribe(
      res=>{
        this.tickets = res;
        console.log(res);
      },
      err=>{
        console.log(err);
        
      }
    );
  }


}
