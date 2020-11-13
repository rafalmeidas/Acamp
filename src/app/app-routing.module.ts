import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './home/signin/signin.component';
import { SignupComponent } from './home/signup/signup.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'login',
                component: SigninComponent
            },
            {
                path: 'register',
                component: SignupComponent
            },
        ]
    },
    {
        path: 'acamps',
        component: MainComponent
    },
    { 
        path: '**', 
        component: NotFoundComponent 
    }
    
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule{

}