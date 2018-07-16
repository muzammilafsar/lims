import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomepageComponent } from './homepage.component';
import { ApiserviceService } from '../../apiservice.service';
import { Observable } from 'rxjs/Rx';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { CategoryFilterPipe } from '../../customepipes/category.pipe';
import { FilterPipe } from '../../customepipes/search.pipe';
import { Router, RouterModule, Routes } from '@angular/router';
import { BorrowedComponent } from '../borrowed/borrowed.component';
import { HomeComponent } from '../../admin/home/home.component';
import { AddbookComponent } from '../../admin/addbook/addbook.component';
import { AllborrowedComponent } from '../../admin/allborrowed/allborrowed.component';

class ApiServiceMock {
  progress = false;
  logged_in = true;
  getAllBooks() {
    return Observable.of([]);
  }
  borrowBook(id) {
    return Observable.of({status: 200,
    }, {status: 500}, {status: 502});
  }
}
describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;
  let service: ApiserviceService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageComponent , CategoryFilterPipe, FilterPipe ],
      imports: [FormsModule, RouterTestingModule],
      providers: [{provide: ApiserviceService, useClass: ApiServiceMock}, {
        provide: Router,
        useClass: class { navigate = jasmine.createSpy('navigate'); }
    }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    service = <any>fixture.componentRef.injector.get(ApiserviceService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create get books', () => {
   component.getAll();
  });
  it('should create category filter', () => {
    component.categoryFilter('test');
   });
   it('should create borrow boook', () => {
    component.borrowBook('test');
    service.logged_in = false;
    component.borrowBook('test');
   });
});
