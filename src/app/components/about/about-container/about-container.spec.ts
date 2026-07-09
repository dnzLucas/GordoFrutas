import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutContainer } from './about-container';

describe('AboutContainer', () => {
  let component: AboutContainer;
  let fixture: ComponentFixture<AboutContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
