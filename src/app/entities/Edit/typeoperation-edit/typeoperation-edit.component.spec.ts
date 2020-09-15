import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeoperationEditComponent } from './typeoperation-edit.component';

describe('TypeoperationEditComponent', () => {
  let component: TypeoperationEditComponent;
  let fixture: ComponentFixture<TypeoperationEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeoperationEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeoperationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
