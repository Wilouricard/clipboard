import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeeptrackComponent } from './keeptrack.component';

describe('KeeptrackComponent', () => {
  let component: KeeptrackComponent;
  let fixture: ComponentFixture<KeeptrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeeptrackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeeptrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
