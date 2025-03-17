import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesSchedulesComponent } from './movies-schedules.component';

describe('MoviesSchedulesComponent', () => {
  let component: MoviesSchedulesComponent;
  let fixture: ComponentFixture<MoviesSchedulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesSchedulesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
