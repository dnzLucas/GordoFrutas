import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitsContainer } from './fruits-container';

describe('FruitsContainer', () => {
  let component: FruitsContainer;
  let fixture: ComponentFixture<FruitsContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FruitsContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(FruitsContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
