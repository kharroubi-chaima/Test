import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ajout1Component } from './ajout1.component';

describe('Ajout1Component', () => {
  let component: Ajout1Component;
  let fixture: ComponentFixture<Ajout1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ajout1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ajout1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
