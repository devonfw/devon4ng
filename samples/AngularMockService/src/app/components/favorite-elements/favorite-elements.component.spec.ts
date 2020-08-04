import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteElementsComponent } from './favorite-elements.component';

describe('FavoriteElementsComponent', () => {
  let component: FavoriteElementsComponent;
  let fixture: ComponentFixture<FavoriteElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
