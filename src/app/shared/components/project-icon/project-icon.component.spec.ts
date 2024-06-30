import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectIconComponent } from './project-icon.component';

describe('ProjectIconComponent', () => {
  let component: ProjectIconComponent;
  let fixture: ComponentFixture<ProjectIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
