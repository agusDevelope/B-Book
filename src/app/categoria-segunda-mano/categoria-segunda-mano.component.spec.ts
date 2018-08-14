import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaSegundaManoComponent } from './categoria-segunda-mano.component';

describe('CategoriaSegundaManoComponent', () => {
  let component: CategoriaSegundaManoComponent;
  let fixture: ComponentFixture<CategoriaSegundaManoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaSegundaManoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaSegundaManoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
