import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent }   from './app.component';
import { UserComponent }  from './demo/user.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent }  from './admin/admin.component';
import { NewUserComponent } from './admin/newUser.component';
import { UserDetailsComponent } from './admin/userdetails.component';
import { TableComponent }    from './admin/table.component';
import { TrainerComponent }  from './trainer/trainer.component';
import { TraineeComponent }  from './trainee/trainee.component';

import { DataService }    from './shared/data.service';
import { CanActivateAuthGuard } from './can-activate.service';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent,
                  UserComponent,
                  LoginComponent,
                  AdminComponent,
                  NewUserComponent,
                  UserDetailsComponent,
                  TableComponent,
                  TrainerComponent,
                  TraineeComponent ],
  providers:    [ DataService, CanActivateAuthGuard ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
