import { Component, OnInit } from '@angular/core';
import { HostListener, Inject } from "@angular/core";
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  adminNav: any[] = ['home', 'services', 'team', 'contactus'];

  constructor() {
   }

  ngOnInit() {
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const scrnum = number > 100;
    if(scrnum){
      var element = document.getElementById("freelance");
      element.classList.remove("bg-dark");
      element.classList.add("bg-black");
    }
    else{
      var element = document.getElementById("freelance");
      element.classList.add("bg-dark");
      element.classList.remove("bg-black");
    }
  }
}
