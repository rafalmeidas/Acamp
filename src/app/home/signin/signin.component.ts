import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
    selector: 'ac-signin',
    templateUrl: 'signin.component.html',
    styleUrls: ['signin.component.css']
})
export class SigninComponent implements OnInit{

    loginForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private auth: AuthService,
        private route: Router
        ){}


    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        })
    }

    login(){
        const email = this.loginForm.get('email').value;
        const password = this.loginForm.get('password').value;
        
        this.auth.autenticate(email, password).subscribe(     
        () => 
            this.route.navigate(['']),
        err => {
            console.log(err);
            this.loginForm.reset();
            alert('Usuário ou senha incorreto!');
        }
        );
    }
}