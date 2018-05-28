import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbookComponent } from './addbook.component';
import { Observable } from 'rxjs/Rx';
import { ApiserviceService } from '../../apiservice.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FilterPipe } from '../../customepipes/search.pipe';
class ApiServiceMock {
  getAllBooks() {
    return Observable.of({});
  }
}
describe('AddbookComponent', () => {
  let component: AddbookComponent;
  let fixture: ComponentFixture<AddbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbookComponent, FilterPipe ],
      providers: [{provide: ApiserviceService, useClass: ApiServiceMock}],
      imports: [ReactiveFormsModule, FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create getAllBooks', () => {
    component.getAllBooks();
  });
});
