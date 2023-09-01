import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsOverviewComponent } from './patients-overview.component';

describe('PatientsOverviewComponent', () => {
  let component: PatientsOverviewComponent;
  let fixture: ComponentFixture<PatientsOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientsOverviewComponent]
    });
    fixture = TestBed.createComponent(PatientsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
