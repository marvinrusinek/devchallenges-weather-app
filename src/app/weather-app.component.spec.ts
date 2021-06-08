import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { WeatherAppComponent } from './weather-app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        WeatherAppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(WeatherAppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'weather-app-master'`, () => {
    const fixture = TestBed.createComponent(WeatherAppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('weather-app-master');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(WeatherAppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('weather-app-master app is running!');
  });
});
