import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaBetsellersComponent } from './categoria-betsellers.component';

describe('CategoriaBetsellersComponent', () => {
  let component: CategoriaBetsellersComponent;
  let fixture: ComponentFixture<CategoriaBetsellersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaBetsellersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaBetsellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
