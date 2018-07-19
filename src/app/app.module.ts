import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeamService } from './team.service';
import { UserService } from './user.service';
import { AuthguardGuard } from './authguard.guard';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UpdateComponent } from './update/update.component';
import { MasterComponent } from './master/master.component';
import { AdminnavComponent } from './adminnav/adminnav.component';
import { AdminmasterComponent } from './adminmaster/adminmaster.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ServicesComponent,
    TeamComponent,
    ContactusComponent,
    PagenotfoundComponent,
    CarouselComponent,
    AdminComponent,
    DashboardComponent,
    FooterComponent,
    SidebarComponent,
    UpdateComponent,
    MasterComponent,
    AdminnavComponent,
    AdminmasterComponent
  ],
  imports: [
    BrowserModule,    
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TeamService, UserService, AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
