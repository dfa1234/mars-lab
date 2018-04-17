import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBigPhotoComponent } from './page-big-photo.component';

describe('PageBigPhotoComponent', () => {
  let component: PageBigPhotoComponent;
  let fixture: ComponentFixture<PageBigPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBigPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBigPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
