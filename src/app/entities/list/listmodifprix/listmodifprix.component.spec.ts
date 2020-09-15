import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmodifprixComponent } from './listmodifprix.component';

describe('ListmodifprixComponent', () => {
  let component: ListmodifprixComponent;
  let fixture: ComponentFixture<ListmodifprixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListmodifprixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListmodifprixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
