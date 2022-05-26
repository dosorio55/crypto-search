import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { ILinks } from 'src/app/core/services/models/selectedLinks.models';
import { LoginModalService } from '../../services/loIn/login-modal.service';
import { homeLinksArray } from './header.config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 //fontawesome Icon
  public barsIcon = faBars;

  //logic
  public activeUrl?: string;
  public dropDown: boolean = false;

  public homeLinks: ILinks[] = homeLinksArray;

  constructor(private router: Router, private loginModalService: LoginModalService) { }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeUrl = event.url.split('/')[1]
      }

    })
  }

  public openModal(){
    this.loginModalService.openLoginModal()
    console.log(this.loginModalService.loginState)
  }

  public dropDownActivated (){
    this.dropDown = !this.dropDown
  }
}
