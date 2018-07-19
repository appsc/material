import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-adminnav',
  templateUrl: './adminnav.component.html',
  styleUrls: ['./adminnav.component.css']
})
export class AdminnavComponent implements OnInit {
  navbarlinks: any[] = ['dashboard', 'update'];
  username: string = localStorage.getItem("UserName");
 constructor() { }
 
  ngOnInit() {
  }

}
