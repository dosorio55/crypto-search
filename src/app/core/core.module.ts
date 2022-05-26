import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { CoinsService } from './services/coins/coins.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginModalService } from './services/loIn/login-modal.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    CoinsService,
    LoginModalService
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  exports:[
    FooterComponent,
    HeaderComponent
  ]
})
export class CoreModule { }
