import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsOverviewDetailsComponent } from './patients-overview-details.component';

describe('PatientsOverviewDetailsComponent', () => {
  let component: PatientsOverviewDetailsComponent;
  let fixture: ComponentFixture<PatientsOverviewDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PatientsOverviewDetailsComponent]
    });
    fixture = TestBed.createComponent(PatientsOverviewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
