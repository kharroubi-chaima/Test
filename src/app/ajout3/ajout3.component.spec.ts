import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ajout3Component } from './ajout3.component';

describe('Ajout3Component', () => {
  let component: Ajout3Component;
  let fixture: ComponentFixture<Ajout3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ajout3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ajout3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
