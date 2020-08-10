import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

<<<<<<< HEAD:samples/ElectronTestt/src/app/app.component.spec.ts
  it(`should have as title 'Devon4ngAngularElementsTest'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Devon4ngAngularElementsTest');
=======
  it(`should have as title 'devon4ng-mat-layout-scss'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('devon4ng-mat-layout-scss');
>>>>>>> develop:samples/AngularMockService/src/app/app.component.spec.ts
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
<<<<<<< HEAD:samples/ElectronTestt/src/app/app.component.spec.ts
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Devon4ngAngularElementsTest!');
=======
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to devon4ng-mat-layout-scss!');
>>>>>>> develop:samples/AngularMockService/src/app/app.component.spec.ts
  });
});
