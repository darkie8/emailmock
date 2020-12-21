import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreBackgroundComponent } from './core-background.component';

describe('CoreBackgroundComponent', () => {
  let component: CoreBackgroundComponent;
  let fixture: ComponentFixture<CoreBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoreBackgroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
