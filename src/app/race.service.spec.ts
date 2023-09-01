import { TestBed } from '@angular/core/testing';

import { RaceService } from './race.service';

describe('RaceService', () => {
  let service: RaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create a race', () => {
    service.createRace('Race1', 'Location1');
    const races = service.getRaces();
    expect(races.length).toBe(1);
    expect(races[0].name).toBe('Race1');
    expect(races[0].location).toBe('Location1');
  });

  it('should delete a race', () => {
    service.createRace('Race1', 'Location1');
    const raceToDelete = service.getRaces()[0];
    service.deleteRace(raceToDelete);
    const races = service.getRaces();
    expect(races.length).toBe(0);
  });
});
