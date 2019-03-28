import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MocardComponent } from './mocard.component';

describe('MocardComponent', () => {
  let component: MocardComponent;
  let fixture: ComponentFixture<MocardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MocardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MocardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
