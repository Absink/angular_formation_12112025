import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageViewUser } from './page-view-user';

describe('PageViewUser', () => {
  let component: PageViewUser;
  let fixture: ComponentFixture<PageViewUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageViewUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageViewUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
