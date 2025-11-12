import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exemple } from './exemple';

describe('Exemple', () => {
  let component: Exemple;
  let fixture: ComponentFixture<Exemple>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exemple]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exemple);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
