import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaComicsComponent } from './categoria-comics.component';

describe('CategoriaComicsComponent', () => {
  let component: CategoriaComicsComponent;
  let fixture: ComponentFixture<CategoriaComicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaComicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
