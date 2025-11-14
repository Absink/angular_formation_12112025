import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddClientV2 } from './page-add-client-v2';

describe('PageAddClientV2', () => {
  let component: PageAddClientV2;
  let fixture: ComponentFixture<PageAddClientV2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAddClientV2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAddClientV2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
