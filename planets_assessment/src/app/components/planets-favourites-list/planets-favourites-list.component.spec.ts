import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetsFavouritesListComponent } from './planets-favourites-list.component';

describe('PlanetsFavouritesListComponent', () => {
  let component: PlanetsFavouritesListComponent;
  let fixture: ComponentFixture<PlanetsFavouritesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetsFavouritesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetsFavouritesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
