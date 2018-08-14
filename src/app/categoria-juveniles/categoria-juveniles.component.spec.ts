import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaJuvenilesComponent } from './categoria-juveniles.component';

describe('CategoriaJuvenilesComponent', () => {
  let component: CategoriaJuvenilesComponent;
  let fixture: ComponentFixture<CategoriaJuvenilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaJuvenilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaJuvenilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
