import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoViewPage } from './video-view.page';

describe('VideoViewPage', () => {
  let component: VideoViewPage;
  let fixture: ComponentFixture<VideoViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoViewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
