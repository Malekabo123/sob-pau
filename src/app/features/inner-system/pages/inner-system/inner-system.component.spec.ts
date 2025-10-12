import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerSystemComponent } from './inner-system.component';

describe('InnerSystemComponent', () => {
  let component: InnerSystemComponent;
  let fixture: ComponentFixture<InnerSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InnerSystemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InnerSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
