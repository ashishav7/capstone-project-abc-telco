import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  private url:string = "http://localhost:3000/api/user";
  constructor(private htppClient:HttpClient) { }

  public loginUser(creds:any){
    return this.htppClient.post(this.url+"/login",creds);
  }
}
