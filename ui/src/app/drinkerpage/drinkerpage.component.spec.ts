import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkerpageComponent } from './drinkerpage.component';

describe('DrinkerpageComponent', () => {
  let component: DrinkerpageComponent;
  let fixture: ComponentFixture<DrinkerpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkerpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkerpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
