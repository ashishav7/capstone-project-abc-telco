import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  public updateForm:FormGroup;
  public idForm:FormGroup;
  private id:any;
  private user:any;
  public upflag:boolean = false;
  public errFlag:boolean = false;
  public updaterFlag:boolean = false;
  constructor(private formBuilder:FormBuilder,private apiService:APIService) { 
    this.idForm = this.formBuilder.group({
      id: ['',Validators.required]
    });
    
    this.updateForm = this.formBuilder.group({
      name:     ['',[Validators.required]],
      email:    ['',[Validators.required,Validators.email]],
      address:  ['',[Validators.required]],
      password: ['',[Validators.required]],
      pincode:  ['',[Validators.required]],
      role:     ['',Validators.required]
    });
  }


  ngOnInit(): void {
  }

  public idSubmit(idFrm:any){
    this.id = idFrm.get('id').value;
    this.updaterFlag = false;
    console.log(this.id);
    this.apiService.getUser(this.id).subscribe(
      res=>{
        this.user = res;
        this.upflag=true;
        this.errFlag = false;
        this.updateForm = this.formBuilder.group({
          name:     [this.user.name,[Validators.required]],
          email:    [this.user.email,[Validators.required,Validators.email]],
          address:  [this.user.address,[Validators.required]],
          password: [this.user.password,[Validators.required]],
          pincode:  [this.user.pincode,[Validators.required]],
          role:     [this.user.role,Validators.required]
        });
      },
      err=>{
        this.errFlag = true;
        this.upflag=false;
        console.log(err);
      }
    );
  }


  public onSubmit(userForm:any){
    if(userForm.valid){
      this.user = {
        name:     userForm.get('name').value,
        email:    userForm.get('email').value,
        address:  userForm.get('address').value,
        password: userForm.get('password').value,
        pincode:  userForm.get('pincode').value,
        role:     userForm.get('role').value
      }
      
      console.log(this.user); 
      this.apiService.updateUser(this.id,this.user).subscribe(
        res=>{
          this.updaterFlag = true;
          console.log(res);
        },
        err=>{
          this.updaterFlag = false;
          console.log(err);
        }
      );
    }
    else{
      console.log(userForm.get('email'));
      this.validateForm(userForm);
    }
  }
  
  public hasError(field:any){
    return (this.updateForm.get(field)?.invalid && this.updateForm.get(field)?.touched && this.updateForm.get(field)?.errors);
  }
  get f(){
    return this.updateForm.controls;
  }
  public validateForm(loginForm:any){
    Object.keys(loginForm.controls).forEach(
      (formField)=>{
        const control = loginForm.controls[formField];
        if(control instanceof FormControl){
          control.markAsTouched({onlySelf:true});
        }
        else{
          this.validateForm(control);
        }
      }
    );
  }
}