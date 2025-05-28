import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileCheckboxComponent } from './mobile-checkbox.component';

describe('MobileCheckboxComponent', () => {
  let component: MobileCheckboxComponent;
  let fixture: ComponentFixture<MobileCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileCheckboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
