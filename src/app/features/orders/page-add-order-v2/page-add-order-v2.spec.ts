import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddOrderV2 } from './page-add-order-v2';

describe('PageAddOrderV2', () => {
  let component: PageAddOrderV2;
  let fixture: ComponentFixture<PageAddOrderV2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAddOrderV2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAddOrderV2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
