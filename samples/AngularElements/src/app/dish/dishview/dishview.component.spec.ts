import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DishviewComponent } from './dishview.component';

describe('DishviewComponent', () => {
  let component: DishviewComponent;
  let fixture: ComponentFixture<DishviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DishviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
