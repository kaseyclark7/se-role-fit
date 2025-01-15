import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalculatorService } from './calculator.service';
import { styles } from './calculator.styles';
import { template } from './calculator.template';
import { SkillsModel } from './models/skills.model';
import { ExperienceSliderComponent } from './experience-slider/experience-slider.component';
import { CalculatorHeaderComponent } from './components/header/header.component';

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
        <div class="experience-value">{{ experience }} Years</div>
      </div>

      <div class="section">
        <h3>Programming Languages</h3>
        <div class="subsection">
          <h4>Core Languages</h4>
          <div class="checkbox-group">
            <label>
              <input type="checkbox" [(ngModel)]="languages.javascript"> JavaScript/TypeScript
            </label>
            <label>
              <input type="checkbox" [(ngModel)]="languages.csharp"> C#
            </label>
          </div>
        </div>

        <div class="subsection">
          <h4>Additional Languages</h4>
          <div class="checkbox-group">
            <label>
              <input type="checkbox" [(ngModel)]="languages.python"> Python
            </label>
            <label>
              <input type="checkbox" [(ngModel)]="languages.java"> Java
            </label>
            <label>
              <input type="checkbox" [(ngModel)]="languages.cpp"> C++
            </label>
            <label>
              <input type="checkbox" [(ngModel)]="languages.php"> PHP
            </label>
            <label>
              <input type="checkbox" [(ngModel)]="languages.go"> Go
            </label>
            <label>
              <input type="checkbox" [(ngModel)]="languages.kotlin"> Kotlin
            </label>
            <label>
              <input type="checkbox" [(ngModel)]="languages.swift"> Swift
            </label>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .calculator-content {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
    }

    .section {
      margin-bottom: 2rem;
      background: rgba(255, 255, 255, 0.05);
      padding: 1.5rem;
      border-radius: 8px;
    }

    h3 {
      color: var(--neon-blue);
      margin-bottom: 1rem;
    }

    h4 {
      color: var(--text-primary);
      margin-bottom: 0.5rem;
    }

    .checkbox-group {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 1rem;
    }

    label {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--text-primary);
    }

    input[type="checkbox"] {
      accent-color: var(--neon-purple);
    }

    .experience-value {
      text-align: center;
      color: var(--neon-purple);
      font-size: 1.2rem;
      margin-top: 1rem;
    }
  `]
})
export class CalculatorComponent {
  experience = 0;
  languages: any = {
    javascript: false,
    csharp: false,
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