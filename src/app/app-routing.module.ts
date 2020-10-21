import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './home/signin/signin.component';
import { SignupComponent } from './home/signup/signup.component';


const routes: Routes = [
    {
        path: 'login',
        component: SigninComponent
    },
    {
        path: 'registre',
        component: SignupComponent
    },
    {
        path: 'login/registre',
        component: SignupComponent
    }
    
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule{

}