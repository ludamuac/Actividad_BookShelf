import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksManagementComponent } from './books-management.component';

describe('BooksManagementComponent', () => {
  let component: BooksManagementComponent;
  let fixture: ComponentFixture<BooksManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});