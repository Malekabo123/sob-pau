import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSeminarsComponent } from './home-seminars.component';

describe('HomeSeminarsComponent', () => {
  let component: HomeSeminarsComponent;
  let fixture: ComponentFixture<HomeSeminarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSeminarsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSeminarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
