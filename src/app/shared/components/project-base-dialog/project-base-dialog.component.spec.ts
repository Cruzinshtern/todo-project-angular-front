import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBaseDialogComponent } from './project-base-dialog.component';

describe('ProjectBaseDialogComponent', () => {
  let component: ProjectBaseDialogComponent;
  let fixture: ComponentFixture<ProjectBaseDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectBaseDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectBaseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
