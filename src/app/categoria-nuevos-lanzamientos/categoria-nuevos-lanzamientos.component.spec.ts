import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaNuevosLanzamientosComponent } from './categoria-nuevos-lanzamientos.component';

describe('CategoriaNuevosLanzamientosComponent', () => {
  let component: CategoriaNuevosLanzamientosComponent;
  let fixture: ComponentFixture<CategoriaNuevosLanzamientosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaNuevosLanzamientosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaNuevosLanzamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
