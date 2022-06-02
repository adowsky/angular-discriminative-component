import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecifiedComponentBComponent } from './specified-component-b.component';

describe('SpecifiedComponentBComponent', () => {
  let component: SpecifiedComponentBComponent;
  let fixture: ComponentFixture<SpecifiedComponentBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecifiedComponentBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecifiedComponentBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
