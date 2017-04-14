import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { User }         from '../shared/user';
import { AdminService } from './admin.service';

@Component({
  selector:'new-user',
  templateUrl:'./newUser.component.html' 
})

export class NewUserComponent implements OnInit{

  user:User = {username:'',firstname:'',lastname:'',password:'',role:''};

  constructor(private adminService : AdminService){}

  register(){
      this.adminService.register(this.user).subscribe(
        (data) => {
          if(data!=null){
            this.user = {username:'',firstname:'',lastname:'',password:'',role:''};
          }
          else {
            console.log('Error ');
          }
        },
        (err) =>{
          console.log(err);
        }
      );
  }

  ngOnInit(){

  }
}