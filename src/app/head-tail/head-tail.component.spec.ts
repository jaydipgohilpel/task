import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadTailComponent } from './head-tail.component';

describe('HeadTailComponent', () => {
  let component: HeadTailComponent;
  let fixture: ComponentFixture<HeadTailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadTailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadTailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
