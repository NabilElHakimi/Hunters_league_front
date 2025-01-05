import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopThreePageComponent } from './top-three-page.component';

describe('TopThreePageComponent', () => {
  let component: TopThreePageComponent;
  let fixture: ComponentFixture<TopThreePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopThreePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopThreePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
