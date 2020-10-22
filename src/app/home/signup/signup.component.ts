import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { confirmPasswordValidator } from 'src/app/shared/validators/confirm-password.validator';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';

@Component({
    selector: 'ac-signup',
    templateUrl: 'signup.component.html',
    styleUrls: ['signup.component.css']
})
export class SignupComponent implements OnInit{

    registerForm: FormGroup;
    
    constructor(
        private formBuilder: FormBuilder
        ){}

    ngOnInit(): void {
        this.registerForm = this.formBuilder.group({
            'name': [
                '', 
                [
                    Validators.required, 
                    Validators.max(255)
                ]
            ],
            'email': [
                '',
                [ 
                    Validators.required, 
                    Validators.email
                ]
            ],
            'username': [
                '', 
                [
                    Validators.required, 
                    lowerCaseValidator
                ]
            ], //Usuário não pode começar com número
            'password': [
                '', 
                [
                    Validators.required, 
                    Validators.min(7), 
                    Validators.max(16)]
                ], //letras, números e caracteres especiais
            'confirm-password': [
                '', [
                    Validators.required,
                    confirmPasswordValidator
                ]
            ]
        });
    }
}