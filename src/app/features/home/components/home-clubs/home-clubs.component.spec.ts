import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeClubsComponent } from './home-clubs.component';

describe('HomeClubsComponent', () => {
  let component: HomeClubsComponent;
  let fixture: ComponentFixture<HomeClubsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeClubsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeClubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
