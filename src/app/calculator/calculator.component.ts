import { Component, Output, EventEmitter } from '@angular/core';
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
    <app-calculator-header (openModal)="openModal.emit()"></app-calculator-header>
    
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
            <label><input type="checkbox" [(ngModel)]="languages.javascript"> JavaScript/TypeScript</label>
            <label><input type="checkbox" [(ngModel)]="languages.csharp"> C#</label>
          </div>
        </div>

        <div class="subsection">
          <h4>Additional Languages</h4>
          <div class="checkbox-group">
            <label><input type="checkbox" [(ngModel)]="languages.python"> Python</label>
            <label><input type="checkbox" [(ngModel)]="languages.java"> Java</label>
            <label><input type="checkbox" [(ngModel)]="languages.cpp"> C++</label>
            <label><input type="checkbox" [(ngModel)]="languages.php"> PHP</label>
            <label><input type="checkbox" [(ngModel)]="languages.go"> Go</label>
            <label><input type="checkbox" [(ngModel)]="languages.kotlin"> Kotlin</label>
            <label><input type="checkbox" [(ngModel)]="languages.swift"> Swift</label>
          </div>
        </div>
      </div>

      <div class="section">
        <h3>Frameworks</h3>
        <div class="subsection">
          <h4>Core Frameworks</h4>
          <div class="checkbox-group">
            <label><input type="checkbox" [(ngModel)]="frameworks.dotnet"> .NET</label>
            <label><input type="checkbox" [(ngModel)]="frameworks.angular"> Angular</label>
          </div>
        </div>

        <div class="subsection">
          <h4>Additional Frameworks</h4>
          <div class="checkbox-group">
            <label><input type="checkbox" [(ngModel)]="frameworks.react"> React</label>
            <label><input type="checkbox" [(ngModel)]="frameworks.vue"> Vue.js</label>
            <label><input type="checkbox" [(ngModel)]="frameworks.spring"> Spring</label>
            <label><input type="checkbox" [(ngModel)]="frameworks.express"> Express.js/NestJS</label>
          </div>
        </div>
      </div>

      <div class="section">
        <h3>Platforms & Tools</h3>
        <div class="checkbox-group">
          <label><input type="checkbox" [(ngModel)]="platforms.mia"> MIA</label>
          <label><input type="checkbox" [(ngModel)]="platforms.github"> GitHub</label>
          <label><input type="checkbox" [(ngModel)]="platforms.sql"> SQL</label>
          <label><input type="checkbox" [(ngModel)]="platforms.grafana"> Grafana</label>
          <label><input type="checkbox" [(ngModel)]="platforms.kafka"> Kafka</label>
          <label><input type="checkbox" [(ngModel)]="platforms.mongodb"> MongoDB</label>
          <label><input type="checkbox" [(ngModel)]="platforms.redis"> Redis</label>
          <label><input type="checkbox" [(ngModel)]="platforms.elasticsearch"> Elasticsearch</label>
        </div>
      </div>

      <div class="section">
        <h3>Software Engineering Practices</h3>
        <div class="checkbox-group">
          <label><input type="checkbox" [(ngModel)]="skills.apiFirst"> API-First Design</label>
          <label><input type="checkbox" [(ngModel)]="skills.ddd"> Domain-Driven Design</label>
          <label><input type="checkbox" [(ngModel)]="skills.cleanCode"> Clean Code</label>
          <label><input type="checkbox" [(ngModel)]="skills.tdd"> Test-Driven Development</label>
          <label><input type="checkbox" [(ngModel)]="skills.pairProgramming"> Pair Programming</label>
          <label><input type="checkbox" [(ngModel)]="skills.cloud"> Cloud Development</label>
          <label><input type="checkbox" [(ngModel)]="skills.microservices"> Microservices</label>
        </div>
      </div>

      <div class="score-section glass-effect">
        <h2>{{ calculateScore() }}%</h2>
        <p class="feedback">{{ getFeedback() }}</p>
      </div>
    </div>
  `,
  styles: [`
    .calculator-content {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
      padding-bottom: 100px;
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
      cursor: pointer;
      transition: color 0.3s ease;
    }

    label:hover {
      color: var(--neon-purple);
    }

    input[type="checkbox"] {
      accent-color: var(--neon-purple);
    }

    .score-section {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      text-align: center;
      padding: 1.5rem;
      background: rgba(13, 17, 23, 0.95);
      backdrop-filter: blur(10px);
      border-top: 1px solid var(--neon-blue);
      z-index: 100;
    }

    .score-section h2 {
      color: var(--neon-blue);
      font-size: 2rem;
      margin: 0;
    }

    .feedback {
      color: var(--text-primary);
      margin: 0.5rem 0 0;
      font-size: 1.1rem;
    }

    .reset-button {
      display: block;
      margin: 2rem auto;
      padding: 0.8rem 1.5rem;
      background: transparent;
      color: var(--text-primary);
      border: 1px solid var(--neon-purple);
      border-radius: 8px;
      font-family: 'JetBrains Mono', monospace;
      cursor: pointer;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    .reset-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 0 15px rgba(191, 123, 255, 0.3);
    }

    .reset-button::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(191, 123, 255, 0.2),
        transparent
      );
      transition: 0.5s;
    }

    .reset-button:hover::before {
      left: 100%;
    }
  `]
})
export class CalculatorComponent {
  @Output() openModal = new EventEmitter<void>();
  experience = 0;
  score = 0;
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
  frameworks: any = {
    dotnet: false,
    angular: false,
    react: false,
    vue: false,
    spring: false,
    express: false
  };
  platforms: any = {
    mia: false,
    github: false,
    sql: false,
    grafana: false,
    kafka: false,
    mongodb: false,
    redis: false,
    elasticsearch: false
  };
  skills: any = {
    apiFirst: false,
    ddd: false,
    cleanCode: false,
    tdd: false,
    pairProgramming: false,
    cloud: false,
    microservices: false
  };

  calculateScore(): number {
    let score = 0;
    
    // Experience (30 points max, 6 points per year up to 5 years)
    score += Math.min(this.experience * 6, 30);
    
    // Languages (15 points max)
    let languageScore = 0;
    // Core Languages (8 points each)
    if (this.languages.javascript) languageScore += 8;
    if (this.languages.csharp) languageScore += 8;
    // Additional Languages (2 points each)
    if (this.languages.python) languageScore += 2;
    if (this.languages.java) languageScore += 2;
    if (this.languages.cpp) languageScore += 2;
    if (this.languages.php) languageScore += 2;
    if (this.languages.go) languageScore += 2;
    if (this.languages.kotlin) languageScore += 2;
    if (this.languages.swift) languageScore += 2;
    score += Math.min(languageScore, 15);
    
    // Frameworks (15 points max)
    let frameworkScore = 0;
    // Core Frameworks (8 points each)
    if (this.frameworks.dotnet) frameworkScore += 8;
    if (this.frameworks.angular) frameworkScore += 8;
    // Additional Frameworks (2 points each)
    if (this.frameworks.react) frameworkScore += 2;
    if (this.frameworks.vue) frameworkScore += 2;
    if (this.frameworks.spring) frameworkScore += 2;
    if (this.frameworks.express) frameworkScore += 2;
    score += Math.min(frameworkScore, 15);
    
    // Platforms & Tools (20 points max)
    let platformScore = 0;
    // Core Platforms (5 points each)
    if (this.platforms.mia) platformScore += 5;
    if (this.platforms.github) platformScore += 5;
    if (this.platforms.sql) platformScore += 5;
    if (this.platforms.grafana) platformScore += 5;
    if (this.platforms.kafka) platformScore += 5;
    score += Math.min(platformScore, 20);
    
    // Software Engineering Practices (20 points max, 3 points each)
    let practiceScore = 0;
    if (this.skills.apiFirst) practiceScore += 3;
    if (this.skills.ddd) practiceScore += 3;
    if (this.skills.cleanCode) practiceScore += 3;
    if (this.skills.tdd) practiceScore += 3;
    if (this.skills.pairProgramming) practiceScore += 3;
    if (this.skills.cloud) practiceScore += 3;
    if (this.skills.microservices) practiceScore += 3;
    score += Math.min(practiceScore, 20);
    
    return Math.min(Math.round(score), 100);
  }

  getFeedback(): string {
    const score = this.calculateScore();
    if (score === 100) {
      return "Outstanding fit! You're a perfect match for the role.";
    } else if (score >= 80) {
      return "Excellent fit! Your skills align very well with our needs.";
    } else if (score >= 70) {
      return "Strong fit! You have most of the skills we're looking for.";
    } else if (score >= 50) {
      return "Good fit! You have a solid foundation for the role.";
    } else if (score >= 40) {
      return "Moderate fit. Consider developing additional skills in key areas.";
    } else {
      return "Entry level fit. We encourage you to gain more experience in core technologies.";
    }
  }

  resetCalculator() {
    // Reset experience
    this.experience = 0;

    // Reset languages
    this.languages = {
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

    // Reset frameworks
    this.frameworks = {
      angular: false,
      react: false,
      vue: false,
      dotnet: false,
      spring: false,
      express: false
    };

    // Reset platforms
    this.platforms = {
      mia: false,
      github: false,
      sql: false,
      grafana: false,
      kafka: false
    };

    // Reset skills
    this.skills = {
      apiFirst: false,
      ddd: false,
      cleanCode: false,
      tdd: false,
      pairProgramming: false,
      cloud: false,
      microservices: false
    };

    // Recalculate score
    this.score = this.calculateScore();
  }
}