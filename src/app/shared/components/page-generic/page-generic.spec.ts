import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGeneric } from './page-generic';

describe('PageGeneric', () => {
  let component: PageGeneric;
  let fixture: ComponentFixture<PageGeneric>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageGeneric]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageGeneric);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
