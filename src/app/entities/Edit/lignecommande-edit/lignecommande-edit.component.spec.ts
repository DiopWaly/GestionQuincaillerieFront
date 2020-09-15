import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LignecommandeEditComponent } from './lignecommande-edit.component';

describe('LignecommandeEditComponent', () => {
  let component: LignecommandeEditComponent;
  let fixture: ComponentFixture<LignecommandeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LignecommandeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LignecommandeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
