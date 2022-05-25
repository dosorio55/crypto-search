import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipes/filter.pipe';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UserLoginComponent } from './components/user-login/user-login.component';



@NgModule({
  declarations: [
    FilterPipe,
    SidebarComponent,
    UserLoginComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FilterPipe,
    SidebarComponent,
    UserLoginComponent
  ]
})
export class SharedModule { }
