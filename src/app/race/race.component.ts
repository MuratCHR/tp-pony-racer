import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { RaceService } from '../race.service';
import { Race } from '../race';
import { Router } from '@angular/router';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent implements OnInit {
  raceName: string ='';
  raceLocation: string='';
  races: Race[] = [];

  constructor(private userService: UserService, private raceService: RaceService, private router: Router) {}

  ngOnInit() {
    this.loadRaces();
  }

  loadRaces(): void {
    this.races = this.raceService.getRaces();
  }
  
  createRace(raceName: string, raceLocation: string) {
    this.raceService.createRace(raceName, raceLocation);
    this.loadRaces();
    this.raceName = '';
    this.raceLocation = '';
  }
  
  deleteRace(race: Race) {
    this.raceService.deleteRace(race);
    this.loadRaces();
  }

  isLoggedIn(): boolean {
    return this.userService.isLoggedIn();
  }
  
  logout() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
  
}
