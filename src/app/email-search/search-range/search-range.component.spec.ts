import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRangeComponent } from './search-range.component';

describe('SearchRangeComponent', () => {
  let component: SearchRangeComponent;
  let fixture: ComponentFixture<SearchRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchRangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
