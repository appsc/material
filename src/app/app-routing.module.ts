import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdateComponent } from './update/update.component';
import { AuthguardGuard } from './authguard.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MasterComponent } from './master/master.component';
import { AdminmasterComponent } from './adminmaster/adminmaster.component';

const routes: Routes = [
  {
    path: '',
    component: MasterComponent,
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full' },
      {
        path: 'services',
        component: ServicesComponent
      },
      {
        path: 'team',
        component: TeamComponent
      },
      {
        path: 'contactus',
        component: ContactusComponent
      }
    ]
  },
  
      {
        path: 'admin',
        component: AdminComponent, pathMatch: 'full' 
      },
      {
        path: 'dashboard',
        canActivate: [AuthguardGuard],
        component: DashboardComponent
      },
      {
        path: 'update',
        canActivate: [AuthguardGuard],
        component: UpdateComponent
      },
  { path: '**', redirectTo: '' },

  // {
  //   path: '**', component: PagenotfoundComponent 
  // }

];
@NgModule({
  imports: [CommonModule,
  RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
