import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterLink, RouterModule } from '@angular/router';
import { CoinsService } from './services/coins/coins.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    CoinsService
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports:[
    FooterComponent,
    HeaderComponent
  ]
})
export class CoreModule { }
