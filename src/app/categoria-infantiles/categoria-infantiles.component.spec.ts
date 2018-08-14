import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaInfantilesComponent } from './categoria-infantiles.component';

describe('CategoriaInfantilesComponent', () => {
  let component: CategoriaInfantilesComponent;
  let fixture: ComponentFixture<CategoriaInfantilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaInfantilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaInfantilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
