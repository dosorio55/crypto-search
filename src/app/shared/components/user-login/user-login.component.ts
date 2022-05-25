import { Component, OnInit } from '@angular/core';
import { faX } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  public active: boolean = false;

  public xIcon = faX;
  constructor() { }

  ngOnInit(): void {
  }

}
