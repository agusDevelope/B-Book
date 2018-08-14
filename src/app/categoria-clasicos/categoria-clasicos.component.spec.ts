import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaClasicosComponent } from './categoria-clasicos.component';

describe('CategoriaClasicosComponent', () => {
  let component: CategoriaClasicosComponent;
  let fixture: ComponentFixture<CategoriaClasicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaClasicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaClasicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
