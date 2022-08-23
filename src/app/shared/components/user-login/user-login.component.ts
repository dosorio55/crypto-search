import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { LoginModalService } from 'src/app/core/services/loIn/login-modal.service';
import { WatchListService } from 'src/app/core/services/watchList/watch-list.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  public active: boolean = this.loginModalService.loginState

  public xIcon = faX;
  constructor(private loginModalService: LoginModalService,
    private watchListService: WatchListService) { }

  ngOnInit(): void {
  this.active = this.loginModalService.loginState;

  }



}
