import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public loginForm : FormGroup;
  public flag:boolean = false;
  constructor(private formBuilder:FormBuilder,protected router: Router) { 
    this.loginForm = this.formBuilder.group({
      email:     ['',[Validators.required,Validators.email]],
      password:  ['',Validators.required],
    })
  }

  ngOnInit(): void {
  }

  public onSubmit(loginForm:any):any{
    if(loginForm.valid){
      console.log("Valid Form");
      let email:string="";
      let password:string="";
      Object.keys(loginForm.controls).forEach(
        (formField)=>{
          const control = loginForm.controls[formField];
          if(formField == "email"){
            email = control.value;
          }
          else if(formField == "password"){
            password = control.value;
          }
        }
      );
      if(email == "admin@gmail.com" && password == "admin"){
        alert("Login Success");
        this.router.navigate(['/admin/create']);
      }
      else{
    
        this.flag = true;
      }
    }
    else{
      this.validateForm(loginForm);
    }
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

  public hasError(field:any){
    return (this.loginForm.get(field)?.invalid && this.loginForm.get(field)?.touched && this.loginForm.get(field)?.errors);
  }
  get f(){
    return this.loginForm.controls;
  }

}
