import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbookComponent } from './addbook.component';
import { Observable } from 'rxjs/Observable';
import { ApiserviceService } from '../../apiservice.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FilterPipe } from '../../customepipes/search.pipe';
class ApiServiceMock {
  getAllBooks() {
    return Observable.of({});
  }
  addBook(a) {
    return Observable.of({status: 200, });
  }
  fetchDesc(a) {
    return Observable.of({});
  }
  fetchisbn(a) {
    return Observable.of({});
  }
  deleteBook(id) {
    return Observable.of({});
  }
  updateBook(id) {
    return Observable.of({});
  }
}
describe('AddbookComponent', () => {
  let component: AddbookComponent;
  let fixture: ComponentFixture<AddbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbookComponent , FilterPipe],
      providers: [{provide: ApiserviceService, useClass: ApiServiceMock}],
      imports: [ ReactiveFormsModule, FormsModule, ]
    }).overrideTemplate(AddbookComponent, '<div></div>')
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create getAllBooks', () => {
    component.getAllBooks();
  });
  it('should create addbook', () => {
    component.addBook();
  });
  it('should create editbook', () => {
    component.allbooks = [ {_id: '1'}];
    component.editbook('2');
  });
  it('should  deletebook', () => {
    component.deletebook('');
  });
  it('should  isbn', () => {
    component.fetchisbn();
  });
  it('should  updateBook', () => {
    component.updateBook();
  });
});
