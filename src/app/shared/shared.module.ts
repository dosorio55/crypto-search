import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipes/filter.pipe';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FilterPipe,
    SidebarComponent,
    UserLoginComponent,
    FormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    FilterPipe,
    SidebarComponent,
    UserLoginComponent,
    FormComponent,
  ]
})
export class SharedModule { }
