import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListClients } from './page-list-clients';

describe('PageListClients', () => {
  let component: PageListClients;
  let fixture: ComponentFixture<PageListClients>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageListClients]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageListClients);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
