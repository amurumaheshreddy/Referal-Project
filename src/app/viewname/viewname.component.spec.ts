import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewnameComponent } from './viewname.component';

describe('ViewnameComponent', () => {
  let component: ViewnameComponent;
  let fixture: ComponentFixture<ViewnameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewnameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
