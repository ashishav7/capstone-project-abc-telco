import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cust-navbar',
  templateUrl: './cust-navbar.component.html',
  styleUrls: ['./cust-navbar.component.css']
})
export class CustNavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("id") == null){
      this.router.navigate(['']);
      alert("you cannot go back as you are not logged in");
    }
  }
  public logout(){
    sessionStorage.clear();
    this.router.navigate(['']);
  }
}
