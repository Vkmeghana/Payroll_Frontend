import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HIComponent } from './hi.component';

describe('HIComponent', () => {
  let component: HIComponent;
  let fixture: ComponentFixture<HIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HIComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
