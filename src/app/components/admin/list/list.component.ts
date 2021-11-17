import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  public users:any;
  constructor(private apiService:APIService) { 
      apiService.getUsers().subscribe(
      res=>{
        console.log(res);
        this.users = res;
      },
      err=>{
        console.log(err);
      }
    )
  }
  
  ngOnInit(): void {
  }

}
