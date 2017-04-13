import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { NewUserComponent }   from './newUser.component';
import { UserDetailsComponent } from './userdetails.component';

@Component({
  selector:'test',
  templateUrl:'./admin.component.html' 
})

export class AdminComponent{

  constructor(){}

  logout(){

  }
}