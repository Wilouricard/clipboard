import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperchargeSectionComponent } from './supercharge-section.component';

describe('SuperchargeSectionComponent', () => {
  let component: SuperchargeSectionComponent;
  let fixture: ComponentFixture<SuperchargeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperchargeSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperchargeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
