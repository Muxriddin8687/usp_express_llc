import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrusedCarouselComponent } from './trused-carousel.component';

describe('TrusedCarouselComponent', () => {
  let component: TrusedCarouselComponent;
  let fixture: ComponentFixture<TrusedCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrusedCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrusedCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
