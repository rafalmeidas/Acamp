import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';

@Component({
    selector: 'ac-signup',
    templateUrl: 'signup.component.html',
    styleUrls: ['signup.component.css']
})
export class SignupComponent implements OnInit{

    registerForm: FormGroup;
    
    constructor(
        private formBuilder: FormBuilder,
        private userNotTakenValidator: UserNotTakenValidatorService
        ){}

    ngOnInit(): void {
        this.registerForm = this.formBuilder.group({
            'name': [
                '', 
                [
                    Validators.required, 
                    Validators.maxLength(255)
                ]
            ],
            'email': [
                '',
                [ 
                    Validators.required, 
                    Validators.email
                ],
                this.userNotTakenValidator.checkEmailTaken()
            ],
            'username': [
                '', 
                [
                    Validators.required, 
                    lowerCaseValidator
                ],
                this.userNotTakenValidator.checkUserNameTaken()
                
            ], //Usuário não pode começar com número
            'password': [
                '', 
                [
                    Validators.required, 
                    Validators.minLength(7), 
                    Validators.maxLength(16)]
                ], //letras, números e caracteres especiais
            'confirmPassword': [
                '', [
                    Validators.required,
                ],
                
            ]
        });
    }

    //usar pristine no template
    get name(){
        return this.registerForm.get('name');
    }

    get email(){
        return this.registerForm.get('email');
    }

    get username(){
        return this.registerForm.get('username');
    }

    get password(){
        return this.registerForm.get('password').value;
    }

    get confirmPassword(){
        return this.registerForm.get('confirmPassword');
    }

}