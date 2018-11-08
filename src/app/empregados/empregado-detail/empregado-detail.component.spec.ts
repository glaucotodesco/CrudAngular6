import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpregadoDetailComponent } from './empregado-detail.component';

describe('EmpregadoDetailComponent', () => {
  let component: EmpregadoDetailComponent;
  let fixture: ComponentFixture<EmpregadoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpregadoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpregadoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
