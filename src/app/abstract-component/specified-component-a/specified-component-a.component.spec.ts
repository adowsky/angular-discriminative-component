import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecifiedComponentAComponent } from './specified-component-a.component';

describe('SpecifiedComponentAComponent', () => {
  let component: SpecifiedComponentAComponent;
  let fixture: ComponentFixture<SpecifiedComponentAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecifiedComponentAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecifiedComponentAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
