import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuincaillerieComponent } from './quincaillerie.component';

describe('QuincaillerieComponent', () => {
  let component: QuincaillerieComponent;
  let fixture: ComponentFixture<QuincaillerieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuincaillerieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuincaillerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
