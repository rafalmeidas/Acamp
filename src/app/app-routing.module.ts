import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './home/signin/signin.component';
import { SignupComponent } from './home/signup/signup.component';
import { MainComponent } from './main/main.component';
import { CampsComponent } from './manage-camp/camps/camps.component';
import { CampListResolver } from './manage-camp/camps/camp-list.resolve';
import { AddCampComponent } from './manage-camp/tabs/add-camp/add-camp.component';
import { ManageCampComponent } from './manage-camp/manage-camp.component';
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
        path: 'acamps', /* Rota para os acampamento para se inscrever */
        component: MainComponent
    },
    {
        path: 'camps',
        component: CampsComponent,
        resolve: {
            camps: CampListResolver
        }
    },
    {
        path: 'manage-camps/:IdCamp',
        component: ManageCampComponent,
        children: [
            {
                path: '',
                component: CampsComponent // Criar componente para adicionar os dados base do acampamento ou editar levando o ID
            },
            { 
                path: 'add-camp',
                component: AddCampComponent
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