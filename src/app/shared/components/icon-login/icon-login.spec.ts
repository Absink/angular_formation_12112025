import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconLogin } from './icon-login';

describe('IconLogin', () => {
  let component: IconLogin;
  let fixture: ComponentFixture<IconLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconLogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconLogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
