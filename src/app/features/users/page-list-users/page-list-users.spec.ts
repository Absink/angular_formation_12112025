import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListUsers } from './page-list-users';

describe('PageListUsers', () => {
  let component: PageListUsers;
  let fixture: ComponentFixture<PageListUsers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageListUsers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageListUsers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
