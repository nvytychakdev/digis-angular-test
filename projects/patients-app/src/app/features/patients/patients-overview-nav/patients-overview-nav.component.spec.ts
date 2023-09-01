import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsOverviewNavComponent } from './patients-overview-nav.component';

describe('PatientsOverviewNavComponent', () => {
  let component: PatientsOverviewNavComponent;
  let fixture: ComponentFixture<PatientsOverviewNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PatientsOverviewNavComponent]
    });
    fixture = TestBed.createComponent(PatientsOverviewNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
