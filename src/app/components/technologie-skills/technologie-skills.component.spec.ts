import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologieSkillsComponent } from './technologie-skills.component';

describe('TechnologieSkillsComponent', () => {
  let component: TechnologieSkillsComponent;
  let fixture: ComponentFixture<TechnologieSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnologieSkillsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologieSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
