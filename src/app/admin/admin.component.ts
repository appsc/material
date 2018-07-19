import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  constructor(private router:Router, private user:UserService) { }
  
  ngOnInit() {
}

  loginUser(e){ 
    e.preventDefault();
   var admins = [
      {"username":"suri", "pwd":"admin"},
      {"username":"mahesh", "pwd":"babu"}
    ]
    var username = e.target.elements[0].value;
    localStorage.setItem('UserName', username);
    var password = e.target.elements[1].value;
    for(var items in admins){
      if (username == admins[items].username && password == admins[items].pwd){
    this.user.setUserLoggedIn();
    this.router.navigate(['dashboard']);
  }  
else{
       // e.target.NgForm.empty();
        this.router.navigate(['admin']);
}
}


  }

}
