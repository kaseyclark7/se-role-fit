import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalculatorService } from './calculator.service';
import { styles } from './calculator.styles';
import { template } from './calculator.template';
import { SkillsModel } from './models/skills.model';
import { ExperienceSliderComponent } from './experience-slider/experience-slider.component';
import { CalculatorHeaderComponent } from './components/header/header.component';
import { SkillToggleComponent } from './components/skill-toggle/skill-toggle.component';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    ExperienceSliderComponent,
    CalculatorHeaderComponent
  ],
  template: `
    <app-calculator-header></app-calculator-header>
    
    <div class="calculator-content">
      <div class="section">
        <h3>Years of Experience</h3>
        <app-experience-slider [(value)]="experience"></app-experience-slider>
      </div>

      <div class="section">
        <h3>Programming Languages</h3>
        <div class="subsection">
          <h4>Core Languages</h4>
          <app-skill-toggle label="JavaScript/TypeScript" [(value)]="languages.javascript" [points]="8"></app-skill-toggle>
          <app-skill-toggle label="C#" [(value)]="languages.csharp" [points]="8"></app-skill-toggle>
        </div>

        <div class="subsection">
          <h4>Additional Languages</h4>
          <div class="skills-grid">
            <app-skill-toggle label="Python" [(value)]="languages.python" [points]="2"></app-skill-toggle>
            <app-skill-toggle label="Java" [(value)]="languages.java" [points]="2"></app-skill-toggle>
            <app-skill-toggle label="C++" [(value)]="languages.cpp" [points]="2"></app-skill-toggle>
            <app-skill-toggle label="PHP" [(value)]="languages.php" [points]="2"></app-skill-toggle>
            <app-skill-toggle label="Go" [(value)]="languages.go" [points]="2"></app-skill-toggle>
            <app-skill-toggle label="Kotlin" [(value)]="languages.kotlin" [points]="2"></app-skill-toggle>
            <app-skill-toggle label="Swift" [(value)]="languages.swift" [points]="2"></app-skill-toggle>
          </div>
        </div>
      </div>

      <!-- Rest of your existing template -->
    </div>
  `,
  styles: [`
    /* Keep your existing styles */
  `]
})
export class CalculatorComponent {
  experience = 0;
  languages: SkillsModel['languages'] = {
    // Core Languages
    javascript: false,
    csharp: false,
    // Additional Languages
    python: false,
    java: false,
    cpp: false,
    php: false,
    go: false,
    kotlin: false,
    swift: false
  };
  
  frameworks: SkillsModel['frameworks'] = {
    // Core Frameworks
    dotnet: false,
    angular: false,
    // Additional Frameworks
    react: false,
    vue: false,
    spring: false,
    express: false
  };

  platforms: SkillsModel['platforms'] = {
    mia: false,
    github: false,
    gitlab: false,
    azureDevops: false,
    rabbitmq: false,
    kafka: false,
    sql: false,
    mongodb: false,
    redis: false,
    elasticsearch: false,
    storageGrid: false,
    camunda: false,
    launchDarkly: false,
    playwright: false,
    grafana: false
  };

  skills: SkillsModel['skills'] = {
    apiFirst: false,
    ddd: false,
    cleanCode: false,
    tdd: false,
    pairProgramming: false,
    cloud: false,
    microservices: false
  };

  score = 0;
  feedback = '';
  resultClass = '';

  constructor(private calculatorService: CalculatorService) {}

  onExperienceChange(years: number) {
    this.experience = years;
    this.calculate();
  }

  calculate() {
    const result = this.calculatorService.calculateScore({
      experience: this.experience,
      languages: this.languages,
      frameworks: this.frameworks,
      platforms: this.platforms,
      skills: this.skills
    });

    this.score = result.score;
    this.feedback = result.feedback;
    this.resultClass = result.resultClass;
  }
}