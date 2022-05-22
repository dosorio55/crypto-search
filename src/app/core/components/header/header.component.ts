import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ILinks } from 'src/app/core/services/models/selectedLinks.models';
import { homeLinksArray } from './header.config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public activeUrl?: string;

  public homeLinks: ILinks[] = homeLinksArray;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeUrl = event.url.split('/')[1]
      }

    })
  }

}
