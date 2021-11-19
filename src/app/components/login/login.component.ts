import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserApiService } from 'src/app/services/user-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm:FormGroup;
  private creds:any;
  private user:any;
  public credFlag:boolean = false;
  constructor(private formBuilder:FormBuilder,private userApiService:UserApiService,private router:Router) { 
    this.loginForm = this.formBuilder.group({
      email:    ['',Validators.required],
      password: ['',Validators.required],
      role:     ['',Validators.required]
    });
  }

  public onSubmit(loginForm:any){
    if(loginForm.valid){
      this.creds={
        email:    loginForm.get('email').value,
        password: loginForm.get('password').value,
        role:     loginForm.get('role').value 
      };
      this.userApiService.loginUser(this.creds).subscribe(
        res=>{
          // console.log(res);
          this.credFlag = false;
          this.user = res;
          sessionStorage.setItem("id",this.user.id);
          if(this.creds.role == "customer"){
            this.router.navigate(['customer']);
          }
          else if(this.creds.role == "manager"){
            this.router.navigate(['manager']);
          }
          else{
            this.router.navigate(['engineer'])
          }
        },
        err=>{
          console.log("authentication exception");
          this.credFlag = true;
        }
      );
    }
    
  }
  ngOnInit(): void {
  }

}
