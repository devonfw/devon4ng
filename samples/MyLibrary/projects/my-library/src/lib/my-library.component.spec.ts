import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLibraryComponent } from './my-library.component';

describe('MyLibraryComponent', () => {
  let component: MyLibraryComponent;
  let fixture: ComponentFixture<MyLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
