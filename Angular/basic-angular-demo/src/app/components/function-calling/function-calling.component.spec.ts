import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionCallingComponent } from './function-calling.component';

describe('FunctionCallingComponent', () => {
  let component: FunctionCallingComponent;
  let fixture: ComponentFixture<FunctionCallingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionCallingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionCallingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
