import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
constructor(private httpClient: HttpClient, private teamService: TeamService) { }
  teammumbers: any[];

  teamUrl = '../assets/data.json';
  addTeam = function (team) {
    this.teammumbers = {
      "name": team.name,
      "image": team.image,
      "title": team.title,
      "description": team.description
    }
    this.httpClient.post(this.teamUrl, this.teammumbers).subscribe((res: Response) => {
            console.log(res);
    })
  }

  ngOnInit() {
    this.teamService.getTeam().subscribe(data => {
      this.teammumbers = (data.teamMumbers);
    })
      }
      
}

