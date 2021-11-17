import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  public createForm:FormGroup;
  private user:any;
  constructor(private formBuilder:FormBuilder,private apiService:APIService) { 
    this.createForm = this.formBuilder.group({
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
      this.apiService.addUser(this.user).subscribe(
        res=>{
          console.log(res);
        },
        err=>{
          console.log(err);
          
        }
      );
      // console.log(userForm.get('pincode'));
      // console.log(this.user);
    }
    else{
      console.log(userForm.get('email'));
      this.validateForm(userForm);
    }
  }
  
  public hasError(field:any){
    return (this.createForm.get(field)?.invalid && this.createForm.get(field)?.touched && this.createForm.get(field)?.errors);
  }
  get f(){
    return this.createForm.controls;
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
