import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Threed } from './threed';

describe('Threed', () => {
  let component: Threed;
  let fixture: ComponentFixture<Threed>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Threed],
    }).compileComponents();

    fixture = TestBed.createComponent(Threed);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
