import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamUseInGetComponent } from './param-use-in-get.component';

describe('ParamUseInGetComponent', () => {
  let component: ParamUseInGetComponent;
  let fixture: ComponentFixture<ParamUseInGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParamUseInGetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParamUseInGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
