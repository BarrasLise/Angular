import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tp3Component } from './tp3.component';

describe('Tp3Component', () => {
  let component: Tp3Component;
  let fixture: ComponentFixture<Tp3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Tp3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Tp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
