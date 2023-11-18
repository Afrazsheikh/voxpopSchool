import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicDisclouserComponent } from './public-disclouser.component';

describe('PublicDisclouserComponent', () => {
  let component: PublicDisclouserComponent;
  let fixture: ComponentFixture<PublicDisclouserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicDisclouserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicDisclouserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
