import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListtypeoperationComponent } from './listtypeoperation.component';

describe('ListtypeoperationComponent', () => {
  let component: ListtypeoperationComponent;
  let fixture: ComponentFixture<ListtypeoperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListtypeoperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListtypeoperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
