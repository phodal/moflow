import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MolistComponent } from './molist.component';

describe('MolistComponent', () => {
  let component: MolistComponent;
  let fixture: ComponentFixture<MolistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MolistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
