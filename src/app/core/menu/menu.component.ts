import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
  selector: 'ac-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  user$: Observable<User>;
  
  constructor(
      private userService: UserService,
      private authService: AuthService,
      private router: Router    
    ){
    this.user$= userService.getUser();
  }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout()
        .subscribe( () =>
          console.log('Logout efetuado sucesso!'),
        )
    this.userService.logout();
    this.router.navigate(['']);
  }
}
