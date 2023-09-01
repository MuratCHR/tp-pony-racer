import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Race } from './race';

@Injectable({
  providedIn: 'root'
})
export class RaceService {
  private racesSubject = new BehaviorSubject<Race[]>([]);
  races$ = this.racesSubject.asObservable();

  constructor() { }

  getRaces(): Race[] {
    return this.racesSubject.value;
  }

  createRace(raceName: string, raceLocation: string): void {
    const newRace: Race = { name: raceName, location: raceLocation };
    const updatedRaces = [...this.racesSubject.value, newRace];
    this.racesSubject.next(updatedRaces);
  }

  deleteRace(race: Race): void {
    const updatedRaces = this.racesSubject.value.filter(r => r !== race);
    this.racesSubject.next(updatedRaces);
  }
}
