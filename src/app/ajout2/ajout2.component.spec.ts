import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ajout2Component } from './ajout2.component';

describe('Ajout2Component', () => {
  let component: Ajout2Component;
  let fixture: ComponentFixture<Ajout2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ajout2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ajout2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
