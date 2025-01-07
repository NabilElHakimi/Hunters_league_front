import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionPageComponent } from './competition-page.component';

describe('CompetitionPageComponent', () => {
  let component: CompetitionPageComponent;
  let fixture: ComponentFixture<CompetitionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompetitionPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompetitionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
