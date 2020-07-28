import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DishViewComponent } from './dishview.component';

describe('DishViewComponent', () => {
  let component: DishViewComponent;
  let fixture: ComponentFixture<DishViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DishViewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
