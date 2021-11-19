import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager-navbar',
  templateUrl: './manager-navbar.component.html',
  styleUrls: ['./manager-navbar.component.css']
})
export class ManagerNavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    // if(sessionStorage.getItem("id") == null){
    //   this.router.navigate(['']);
    //   alert("you cannot go back as you are not logged in");
    // }
  }




  public logout(){
    sessionStorage.clear();
    this.router.navigate(['']);
  }

}
