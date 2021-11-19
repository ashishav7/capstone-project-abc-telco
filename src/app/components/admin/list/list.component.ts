import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  public users:any;
  public tempUsers:any
  constructor(private apiService:APIService) { 
      apiService.getUsers().subscribe(
      res=>{
        console.log(res);
        this.users = res;
        this.tempUsers = res;
      },
      err=>{
        console.log(err);
      }
    )
  }
  
  ngOnInit(): void {
  }

  
  public filter(status:any){
    if(status == 'all'){
      this.users = this.tempUsers;
    }
    else{
      this.users = this.tempUsers.filter(function(tempUser:any){
        return tempUser.role == status;
      });
    }
  }

}
