import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListquincComponent } from './listquinc.component';

describe('ListquincComponent', () => {
  let component: ListquincComponent;
  let fixture: ComponentFixture<ListquincComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListquincComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListquincComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
