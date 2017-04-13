import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { User } from '../shared/user';
import { LoginService }  from'./login.service';

@Component({
  selector:'login',
  templateUrl: './login.component.html',
  styleUrls:['./login.component.css'],
  providers:[ LoginService ]
})

export class LoginComponent{

  user:User = {username:'',firstname:'',lastname:'',password:'',role:''};

  constructor(private loginService : LoginService,
              private router : Router){}

  login(){
    this.loginService.login(this.user).subscribe(
      (data) =>{
        console.log(data);
        if(data!=null)
          { 
            console.log("data is not null");
             if(data[0].role == 'admin') 
               this.router.navigate(['/admin']);
             
             if(data[0].role==='trainer') 
               this.router.navigate(['/trainer']);

             if(data[0].role==='trainee') 
               this.router.navigate(['/trainee']);
          }
        else{
            console.log("faffsfsfsffsfsf");
            this.router.navigate(['/login']);
        }
      },
      (err) => console.log("error")
    );
  }

}