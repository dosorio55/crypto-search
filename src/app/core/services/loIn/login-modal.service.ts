import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginModalService {

  public loginState: boolean = false;

  constructor() { }

  public openLoginModal(){
    this.loginState = !this.loginState
  }


}
