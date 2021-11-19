import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserApiService } from 'src/app/services/user-api.service';

@Component({
  selector: 'app-raise-ticket',
  templateUrl: './raise-ticket.component.html',
  styleUrls: ['./raise-ticket.component.css']
})
export class RaiseTicketComponent implements OnInit {
  public tktForm:FormGroup;
  private ticket:any;
  constructor(private formBuilder:FormBuilder,private userService:UserApiService) {
      this.tktForm= formBuilder.group({
        description: ['',Validators.required]
      });
   }

  ngOnInit(): void {
  }

  public onSubmit(form:any){
    if(form.valid){
      this.ticket={
        description:form.get('description').value,
        status:"Raised"
      };
      this.userService.addTicket(sessionStorage.getItem("id"),this.ticket).subscribe(
        res=>{
          console.log(res);
        },
        err=>{
          console.log(err);
        }
      );
    }
  }
} 
