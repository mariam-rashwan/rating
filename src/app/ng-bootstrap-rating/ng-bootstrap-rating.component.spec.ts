import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBootstrapRatingComponent } from './ng-bootstrap-rating.component';

describe('NgBootstrapRatingComponent', () => {
  let component: NgBootstrapRatingComponent;
  let fixture: ComponentFixture<NgBootstrapRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgBootstrapRatingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgBootstrapRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
