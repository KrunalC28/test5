import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { TableComponent }  from './table.component';
import { User } from'../shared/user';

@Component({
  selector:'user-details',
  templateUrl:'./userdetails.component.html' 
})

export class UserDetailsComponent implements OnInit{
    users : User[];
 
    ngOnInit():void{

    }
}