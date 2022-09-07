import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiLoginComponent } from './api-login.component';

describe('ApiLoginComponent', () => {
  let component: ApiLoginComponent;
  let fixture: ComponentFixture<ApiLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
