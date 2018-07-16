import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';
import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiserviceService } from '../../apiservice.service';

class ApiServiceMock {
  addBook() {
    return Observable.of({});
  }
}
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [RouterTestingModule],
      providers: [{ provide: ApiserviceService, useClass: ApiServiceMock }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should addBook', () => {
    component.addBook();
    expect(component).toBeTruthy();
  });
});
