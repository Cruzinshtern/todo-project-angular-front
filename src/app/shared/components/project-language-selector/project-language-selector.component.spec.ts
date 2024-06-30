import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectLanguageSelectorComponent } from './project-language-selector.component';

describe('ProjectLanguageSelectorComponent', () => {
  let component: ProjectLanguageSelectorComponent;
  let fixture: ComponentFixture<ProjectLanguageSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectLanguageSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectLanguageSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
