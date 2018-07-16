import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Observable} from 'rxjs/Observable';
import { BorrowedComponent } from './borrowed.component';
import { ApiserviceService } from '../../apiservice.service';
import { RouterTestingModule } from '@angular/router/testing';
class ApiServiceMock {
  userBooks() {
    return Observable.of({});
  }
  returnBook(a) {
    return Observable.of({});
  }
}
describe('BorrowedComponent', () => {
  let component: BorrowedComponent;
  let fixture: ComponentFixture<BorrowedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrowedComponent ],
      providers: [ {provide: ApiserviceService, useClass: ApiServiceMock}],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should getAll', () => {
    component.getAll();
    expect(component).toBeTruthy();
  });
  it('should returnBook', () => {
    component.returnBook('');
    expect(component).toBeTruthy();
  });

});
