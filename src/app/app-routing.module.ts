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
import { ManageCampComponent } from './manage-camp/manage-camp.component';
import { MyAcampComponent } from './my-acamp/my-acamp.component';
import { LoginGuard } from './core/auth/login.guard';
import { CampByIdResolver } from './manage-camp/tabs/camp-by-id.resolve';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [LoginGuard],
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
        path: 'acamps', /* Rota para os acampamento para se inscrever, mudar nom e trabalhar ela */
        component: MainComponent
    },
    {
        path: 'camps',
        component: CampsComponent,
        canActivate: [AuthGuard],
        resolve: {
            camps: CampListResolver
        }
    },
    {
        path: 'manage-camps/:IdCamp',
        component: ManageCampComponent,
        canActivate: [AuthGuard],
        resolve: {
            camp: CampByIdResolver
        }
    },
    {
        path: 'my-acamps',
        component: MyAcampComponent,
        canActivate: [AuthGuard],
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];


@NgModule({
    // {scrollPositionRestoration: 'enabled'} para que seja possível retornar ao topo da página sempre que alterar a rota
    imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
    exports: [RouterModule]
})
export class AppRoutingModule {

}