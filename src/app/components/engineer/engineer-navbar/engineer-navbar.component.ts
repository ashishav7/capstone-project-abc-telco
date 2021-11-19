import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-engineer-navbar',
  templateUrl: './engineer-navbar.component.html',
  styleUrls: ['./engineer-navbar.component.css']
})
export class EngineerNavbarComponent implements OnInit {

  constructor(private router:Router) { 
    // if(sessionStorage.getItem("id") == null){
    //   this.router.navigate(['']);
    //   alert("you cannot go back as you are not logged in");
    // }
  }

  ngOnInit(): void {
  }
  public logout(){
    sessionStorage.clear();
    this.router.navigate(['']);
  }
}
