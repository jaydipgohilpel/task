import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivImageDownloadComponent } from './div-image-download.component';

describe('DivImageDownloadComponent', () => {
  let component: DivImageDownloadComponent;
  let fixture: ComponentFixture<DivImageDownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivImageDownloadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivImageDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
