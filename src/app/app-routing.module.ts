import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './home/signin/signin.component';
import { SignupComponent } from './home/signup/signup.component';
import { MainComponent } from './main/main.component';
import { AcampsComponent } from './manage-acamp/acamps/acamps.component';
import { AddAcampComponent } from './manage-acamp/add-acamp/add-acamp.component';
import { ManageAcampComponent } from './manage-acamp/manage-acamp.component';
import { MyAcampComponent } from './my-acamp/my-acamp.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
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
        path: 'camps',
        component: AcampsComponent
    },
    {
        path: 'manage-camps',
        component: ManageAcampComponent,
        children: [
            {
                path: '',
                component: AcampsComponent
            },
            { 
                path: 'add-acamp',
                component: AddAcampComponent
            },
        ]
    },
    {
        path: 'my-acamps',
        component: MyAcampComponent
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