import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackflagComponent } from './blackflag.component';

describe('BlackflagComponent', () => {
  let component: BlackflagComponent;
  let fixture: ComponentFixture<BlackflagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlackflagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackflagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
