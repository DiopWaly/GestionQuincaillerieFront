import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifprixComponent } from './modifprix.component';

describe('ModifprixComponent', () => {
  let component: ModifprixComponent;
  let fixture: ComponentFixture<ModifprixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifprixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifprixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
