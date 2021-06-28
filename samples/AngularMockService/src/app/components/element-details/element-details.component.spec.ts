import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { ElementDetailsComponent } from './element-details.component';

describe('ElementDetailsComponent', () => {
  let component: ElementDetailsComponent;
  let fixture: ComponentFixture<ElementDetailsComponent>;
  let router: Router;
  let route: ActivatedRoute;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule.withRoutes([]) ],
      declarations: [ ElementDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.inject(Router);
    route = TestBed.inject(ActivatedRoute);
  });

  it('should create', () => {
    const spyRoute = spyOn(route.snapshot.paramMap, 'get');
    spyRoute.and.returnValue('3');
    fixture = TestBed.createComponent(ElementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
