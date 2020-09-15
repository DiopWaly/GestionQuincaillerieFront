import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListlignecommandeComponent } from './listlignecommande.component';

describe('ListlignecommandeComponent', () => {
  let component: ListlignecommandeComponent;
  let fixture: ComponentFixture<ListlignecommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListlignecommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListlignecommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
