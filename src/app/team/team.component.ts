import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  constructor(private teamService: TeamService) { }
  teammumbers: any[];
  
  ngOnInit() {
    this.teamService.getTeam().subscribe(data => {
      this.teammumbers = (data.teamMumbers);
    });

 
  }
  
}
