import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudcornerComponent } from './studcorner.component';

describe('StudcornerComponent', () => {
  let component: StudcornerComponent;
  let fixture: ComponentFixture<StudcornerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudcornerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudcornerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
