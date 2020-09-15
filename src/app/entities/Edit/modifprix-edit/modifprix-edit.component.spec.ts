import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifprixEditComponent } from './modifprix-edit.component';

describe('ModifprixEditComponent', () => {
  let component: ModifprixEditComponent;
  let fixture: ComponentFixture<ModifprixEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifprixEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifprixEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
