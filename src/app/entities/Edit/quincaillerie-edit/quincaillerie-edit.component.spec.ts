import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuincaillerieEditComponent } from './quincaillerie-edit.component';

describe('QuincaillerieEditComponent', () => {
  let component: QuincaillerieEditComponent;
  let fixture: ComponentFixture<QuincaillerieEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuincaillerieEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuincaillerieEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
