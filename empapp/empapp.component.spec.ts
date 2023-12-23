import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpappComponent } from './empapp.component';

describe('EmpappComponent', () => {
  let component: EmpappComponent;
  let fixture: ComponentFixture<EmpappComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpappComponent]
    });
    fixture = TestBed.createComponent(EmpappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
