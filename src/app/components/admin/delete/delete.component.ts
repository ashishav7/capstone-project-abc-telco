import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  
  public deleteForm:FormGroup;
  public errFlag:boolean = false;
  public disFlag:boolean = false;
  private id:number = 0;
  constructor(private formBuilder:FormBuilder,private apiService:APIService) { 
    this.deleteForm = this.formBuilder.group({
      id: ['',Validators.required]
    });
  }
  
  ngOnInit(): void {
  }

  public onSubmit(idFrm:any){
    this.id = idFrm.get('id').value;
    console.log(this.id);
    this.apiService.deleteUser(this.id).subscribe(
      res=>{
        this.errFlag = false;
        this.disFlag = true;
      },
      err=>{
        this.errFlag = true;
        this.disFlag = false;
        console.log(err);
      }
    );
  }

}
