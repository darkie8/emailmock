import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailResultsComponent } from './email-results.component';

describe('EmailResultsComponent', () => {
  let component: EmailResultsComponent;
  let fixture: ComponentFixture<EmailResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
