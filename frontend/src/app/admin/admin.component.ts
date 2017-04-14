import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { NewUserComponent }   from './newUser.component';
import { UserDetailsComponent } from './userdetails.component';

@Component({
  selector:'test',
  templateUrl:'./admin.component.html',
  styleUrls:['./admin.component.css'] 
})

export class AdminComponent{

  constructor(private router:Router){}

  logout(){
    this.router.navigate(['/login']);
  }
}