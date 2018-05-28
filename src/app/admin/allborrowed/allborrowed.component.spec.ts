import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';
import { AllborrowedComponent } from './allborrowed.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../../customepipes/search.pipe';
import { ApiserviceService } from '../../apiservice.service';
class ApiServiceMock {
  progress = false;
  logged_in = true;
  allBorrowedBooks() {
    return Observable.of({books: [{title: 'a'}, {title: 'b'}, {title: 'c'} ]});
  }
}
describe('AllborrowedComponent', () => {
  let component: AllborrowedComponent;
  let fixture: ComponentFixture<AllborrowedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllborrowedComponent, FilterPipe],
      imports: [FormsModule],
      providers: [{provide: ApiserviceService, useClass: ApiServiceMock}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllborrowedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.allborrow = [{books: [{title: 'e'}, {title: 'f'}, {title: 'c'} ]}];
    component.order = true;
    component.sort('title');
  });
  it('should create sort', () => {
    component.allborrow = [{books: [{title: 'e'}, {title: 'f'}, {title: 'c'} ]}];
    component.order = false;
    component.sort('title');
  });
  it('should create sortdata', () => {
component.sortData('title');
  });
  it('should create sortdata', () => {
    component.allborrow = [{Due_date: 'Fri May 18 2018 15:58:16 GMT+0530 (India Standard Time)',
    Return_date: 'Fri May 18 2018 15:58:16 GMT+0530 (India Standard Time)',
    issue_date: 'Fri May 18 2018 15:58:16 GMT+0530 (India Standard Time)'},
    {Due_date: 'Fri May 18 2018 15:58:16 GMT+0530 (India Standard Time)',
    Return_date: 'Fri May 18 2018 15:58:16 GMT+0530 (India Standard Time)',
    issue_date: 'Fri May 18 2018 15:58:16 GMT+0530 (India Standard Time)'}];
    component.sortDate('due_date');
      });
});
