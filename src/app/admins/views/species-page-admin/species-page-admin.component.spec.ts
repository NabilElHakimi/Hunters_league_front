import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeciesPageAdminComponent } from './species-page-admin.component';

describe('SpeciesPageAdminComponent', () => {
  let component: SpeciesPageAdminComponent;
  let fixture: ComponentFixture<SpeciesPageAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpeciesPageAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpeciesPageAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
