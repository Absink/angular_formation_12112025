import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDetailsClient } from './page-details-client';

describe('PageDetailsClient', () => {
  let component: PageDetailsClient;
  let fixture: ComponentFixture<PageDetailsClient>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageDetailsClient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageDetailsClient);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
