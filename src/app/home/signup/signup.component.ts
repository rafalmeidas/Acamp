import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { NewUser } from 'src/app/core/user/new-user';
import { emailValidator } from 'src/app/shared/validators/email.validator';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { Validacoes } from 'src/app/shared/validators/validacoes.validator';
import { SignUpService } from './signup.service';
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
        private signupService: SignUpService,
        private userNotTakenValidator: UserNotTakenValidatorService,
        private router: Router

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
            'cpf_cnpj': [
                '', 
                [
                    Validators.required,
                    Validators.maxLength(14),
                    Validacoes.ValidaCpf
                ]
            ],
            'email': [
                '',
                [ 
                    Validators.required, 
                   
                    emailValidator
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
                    Validators.maxLength(16)
                ]
            ], //letras, números e caracteres especiais
            'confirmPassword': [
                '', [
                    Validators.required,
                ],
                
            ]
        });
    }

    //Submte o formulário
    signup(){
        const newUser = this.registerForm.getRawValue() as NewUser;
        console.log(newUser);
        
        this.signupService.signup(newUser).subscribe(
            () => this.router.navigate(['']),
            err => console.log(err)
            
        )
        
    }

    //usar pristine no template
    get name(){
        return this.registerForm.get('name');
    }

    get cpf_cnpj(){
        return this.registerForm.get('cpf_cnpj');
    } 

    get email(){
        return this.registerForm.get('email');
    }

    get username(){
        return this.registerForm.get('username');
    }

    get password(){
        return this.registerForm.get('password');
    }

    get confirmPassword(){
        return this.registerForm.get('confirmPassword');
    }

}