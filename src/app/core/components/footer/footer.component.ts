import { Component, OnInit } from '@angular/core';
import { faFacebook, faYoutube, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCoins } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  //fontawesome Icon
  public coinGecko = faCoins;
  public github = faGithub;
  public linkedIn = faLinkedin;

  constructor() { }

  ngOnInit(): void {
  }

}
