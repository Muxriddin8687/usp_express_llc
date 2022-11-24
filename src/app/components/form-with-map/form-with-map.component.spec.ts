import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWithMapComponent } from './form-with-map.component';

describe('FormWithMapComponent', () => {
  let component: FormWithMapComponent;
  let fixture: ComponentFixture<FormWithMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormWithMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormWithMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
