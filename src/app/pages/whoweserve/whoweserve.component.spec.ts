import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoweserveComponent } from './whoweserve.component';

describe('WhoweserveComponent', () => {
  let component: WhoweserveComponent;
  let fixture: ComponentFixture<WhoweserveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhoweserveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhoweserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
