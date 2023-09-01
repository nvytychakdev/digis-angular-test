import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsListTableComponent } from './patients-list-table.component';

describe('PatientsListTableComponent', () => {
  let component: PatientsListTableComponent;
  let fixture: ComponentFixture<PatientsListTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PatientsListTableComponent]
    });
    fixture = TestBed.createComponent(PatientsListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
