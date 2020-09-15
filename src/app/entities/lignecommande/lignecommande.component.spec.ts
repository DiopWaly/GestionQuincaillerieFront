import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LignecommandeComponent } from './lignecommande.component';

describe('LignecommandeComponent', () => {
  let component: LignecommandeComponent;
  let fixture: ComponentFixture<LignecommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LignecommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LignecommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
