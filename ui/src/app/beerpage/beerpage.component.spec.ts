import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerpageComponent } from './beerpage.component';

describe('BeerpageComponent', () => {
  let component: BeerpageComponent;
  let fixture: ComponentFixture<BeerpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
