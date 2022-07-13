import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharitiesDetailsComponent } from './charities-details.component';

describe('CharitiesDetailsComponent', () => {
  let component: CharitiesDetailsComponent;
  let fixture: ComponentFixture<CharitiesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharitiesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharitiesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
