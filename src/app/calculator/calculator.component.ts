import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SkillsModel } from './models/skills.model';
import { ExperienceSliderComponent } from './experience-slider/experience-slider.component';
import { CalculatorHeaderComponent } from './components/header/header.component';
import { InterviewProcessModalComponent } from './components/interview-process-modal/interview-process-modal.component';
import { ResumeUploadComponent } from './components/resume-upload/resume-upload.component';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ExperienceSliderComponent,
    CalculatorHeaderComponent,
    InterviewProcessModalComponent,
    ResumeUploadComponent
  ],
  template: `
    <div class="calculator-container">
      <app-calculator-header 
        (openModal)="openModal.emit()"
        (showInterviewProcess)="showInterviewProcess = true"
      ></app-calculator-header>
      <app-resume-upload (resumeParsed)="applyResume($event)"></app-resume-upload>

      <div class="calculator-content">
        <h2>Years of Experience</h2>
        <div class="years-experience">
          <app-experience-slider [(value)]="experience"></app-experience-slider>
        </div>

        <div class="section">
          <h2>Programming Languages</h2>
          <div class="subsection">
            <h4>Core Languages</h4>
            <div class="checkbox-group">
              <label class="skill-button" [class.selected]="languages.javascript">
                <input type="checkbox" [(ngModel)]="languages.javascript">
                <span class="button-text">JavaScript/TypeScript</span>
              </label>
              <label class="skill-button" [class.selected]="languages.csharp">
                <input type="checkbox" [(ngModel)]="languages.csharp">
                <span class="button-text">C#</span>
              </label>
            </div>
          </div>

          <div class="subsection">
            <h4>Additional Languages</h4>
            <div class="checkbox-group">
              <label class="skill-button" [class.selected]="languages.python">
                <input type="checkbox" [(ngModel)]="languages.python">
                <span class="button-text">Python</span>
              </label>
              <label class="skill-button" [class.selected]="languages.java">
                <input type="checkbox" [(ngModel)]="languages.java">
                <span class="button-text">Java</span>
              </label>
              <label class="skill-button" [class.selected]="languages.cpp">
                <input type="checkbox" [(ngModel)]="languages.cpp">
                <span class="button-text">C++</span>
              </label>
              <label class="skill-button" [class.selected]="languages.php">
                <input type="checkbox" [(ngModel)]="languages.php">
                <span class="button-text">PHP</span>
              </label>
              <label class="skill-button" [class.selected]="languages.go">
                <input type="checkbox" [(ngModel)]="languages.go">
                <span class="button-text">Go</span>
              </label>
              <label class="skill-button" [class.selected]="languages.kotlin">
                <input type="checkbox" [(ngModel)]="languages.kotlin">
                <span class="button-text">Kotlin</span>
              </label>
              <label class="skill-button" [class.selected]="languages.swift">
                <input type="checkbox" [(ngModel)]="languages.swift">
                <span class="button-text">Swift</span>
              </label>
            </div>
          </div>
        </div>

        <div class="section">
          <h2>Frameworks</h2>
          <div class="subsection">
            <h4>Core Frameworks</h4>
            <div class="checkbox-group">
              <label class="skill-button" [class.selected]="frameworks.dotnet">
                <input type="checkbox" [(ngModel)]="frameworks.dotnet">
                <span class="button-text">.NET</span>
              </label>
              <label class="skill-button" [class.selected]="frameworks.angular">
                <input type="checkbox" [(ngModel)]="frameworks.angular">
                <span class="button-text">Angular</span>
              </label>
            </div>
          </div>

          <div class="subsection">
            <h4>Additional Frameworks</h4>
            <div class="checkbox-group">
              <label class="skill-button" [class.selected]="frameworks.react">
                <input type="checkbox" [(ngModel)]="frameworks.react">
                <span class="button-text">React</span>
              </label>
              <label class="skill-button" [class.selected]="frameworks.vue">
                <input type="checkbox" [(ngModel)]="frameworks.vue">
                <span class="button-text">Vue.js</span>
              </label>
              <label class="skill-button" [class.selected]="frameworks.spring">
                <input type="checkbox" [(ngModel)]="frameworks.spring">
                <span class="button-text">Spring</span>
              </label>
              <label class="skill-button" [class.selected]="frameworks.express">
                <input type="checkbox" [(ngModel)]="frameworks.express">
                <span class="button-text">Express.js/NestJS</span>
              </label>
            </div>
          </div>
        </div>

        <div class="section">
          <h2>Platforms & Tools</h2>
          <div class="checkbox-group">
            <label class="skill-button" [class.selected]="platforms.mia">
              <input type="checkbox" [(ngModel)]="platforms.mia">
              <span class="button-text">MIA</span>
            </label>
            <label class="skill-button" [class.selected]="platforms.github">
              <input type="checkbox" [(ngModel)]="platforms.github">
              <span class="button-text">GitHub</span>
            </label>
            <label class="skill-button" [class.selected]="platforms.sql">
              <input type="checkbox" [(ngModel)]="platforms.sql">
              <span class="button-text">SQL</span>
            </label>
            <label class="skill-button" [class.selected]="platforms.grafana">
              <input type="checkbox" [(ngModel)]="platforms.grafana">
              <span class="button-text">Grafana</span>
            </label>
            <label class="skill-button" [class.selected]="platforms.kafka">
              <input type="checkbox" [(ngModel)]="platforms.kafka">
              <span class="button-text">Kafka</span>
            </label>
            <label class="skill-button" [class.selected]="platforms.mongodb">
              <input type="checkbox" [(ngModel)]="platforms.mongodb">
              <span class="button-text">MongoDB</span>
            </label>
            <label class="skill-button" [class.selected]="platforms.redis">
              <input type="checkbox" [(ngModel)]="platforms.redis">
              <span class="button-text">Redis</span>
            </label>
            <label class="skill-button" [class.selected]="platforms.elasticsearch">
              <input type="checkbox" [(ngModel)]="platforms.elasticsearch">
              <span class="button-text">Elasticsearch</span>
            </label>
          </div>
        </div>

        <div class="section">
          <h2>Software Engineering Practices</h2>
          <div class="checkbox-group">
            <label class="skill-button" [class.selected]="skills.apiFirst">
              <input type="checkbox" [(ngModel)]="skills.apiFirst">
              <span class="button-text">API-First Design</span>
            </label>
            <label class="skill-button" [class.selected]="skills.ddd">
              <input type="checkbox" [(ngModel)]="skills.ddd">
              <span class="button-text">Domain-Driven Design</span>
            </label>
            <label class="skill-button" [class.selected]="skills.cleanCode">
              <input type="checkbox" [(ngModel)]="skills.cleanCode">
              <span class="button-text">Clean Code</span>
            </label>
            <label class="skill-button" [class.selected]="skills.tdd">
              <input type="checkbox" [(ngModel)]="skills.tdd">
              <span class="button-text">Test-Driven Development</span>
            </label>
            <label class="skill-button" [class.selected]="skills.pairProgramming">
              <input type="checkbox" [(ngModel)]="skills.pairProgramming">
              <span class="button-text">Pair Programming</span>
            </label>
            <label class="skill-button" [class.selected]="skills.cloud">
              <input type="checkbox" [(ngModel)]="skills.cloud">
              <span class="button-text">Cloud Development</span>
            </label>
            <label class="skill-button" [class.selected]="skills.microservices">
              <input type="checkbox" [(ngModel)]="skills.microservices">
              <span class="button-text">Microservices</span>
            </label>
          </div>
        </div>

        <button class="reset-button glass-effect" (click)="resetCalculator()">
          Reset All Selections
        </button>
      </div>

      <app-interview-process-modal
        *ngIf="showInterviewProcess"
        (close)="showInterviewProcess = false"
      ></app-interview-process-modal>

      <div class="score-section glass-effect">
        <h2>{{ calculateScore() }}%</h2>
        <p class="feedback">{{ getFeedback() }}</p>
      </div>
    </div>
  `,
  styles: [`
    .calculator-container {
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
      grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
      gap: 1rem;
      padding: 0.5rem;
    }

    .skill-button {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 45px;
      padding: 0.8rem 1.2rem;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 25px;
      cursor: pointer;
      transition: all 0.3s ease;
      overflow: hidden;
      text-align: center;
      width: 100%;
    }

    .skill-button input[type="checkbox"] {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    .button-text {
      color: var(--text-primary);
      font-size: 0.9rem;
      font-family: 'JetBrains Mono', monospace;
      transition: all 0.3s ease;
      text-align: center;
      width: 100%;
      line-height: 1.2;
      word-wrap: break-word;
      hyphens: auto;
    }

    .skill-button:hover {
      background: rgba(255, 255, 255, 0.1);
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }

    .skill-button.selected {
      background: rgba(191, 123, 255, 0.15);
      border-color: var(--neon-purple);
      box-shadow: 0 0 15px rgba(191, 123, 255, 0.3),
                  inset 0 0 10px rgba(191, 123, 255, 0.2);
    }

    .skill-button.selected .button-text {
      color: var(--neon-purple);
    }

    .skill-button:active {
      transform: translateY(1px);
    }

    /* Add a subtle pulse animation for selected buttons */
    @keyframes pulse {
      0% { box-shadow: 0 0 15px rgba(191, 123, 255, 0.3), inset 0 0 10px rgba(191, 123, 255, 0.2); }
      50% { box-shadow: 0 0 20px rgba(191, 123, 255, 0.4), inset 0 0 15px rgba(191, 123, 255, 0.3); }
      100% { box-shadow: 0 0 15px rgba(191, 123, 255, 0.3), inset 0 0 10px rgba(191, 123, 255, 0.2); }
    }

    .skill-button.selected:hover {
      animation: pulse 2s infinite;
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
      font-size: 1rem;
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

    .years-experience {
      width: 100%;
      margin-bottom: 2rem;
    }

    .years-experience app-experience-slider {
      width: 100%;
      display: block;
    }

    .button-container {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: center;
      margin-bottom: 2rem;
    }

    .view-button {
      background: transparent;
      color: var(--text-primary);
      border: 1px solid var(--neon-blue);
      padding: 0.8rem 1.5rem;
      border-radius: 25px;
      cursor: pointer;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.9rem;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
      width: fit-content;
    }

    .view-button:hover {
      background: rgba(0, 255, 255, 0.1);
      border-color: var(--neon-purple);
      color: var(--neon-purple);
    }
  `]
})
export class CalculatorComponent {
  @Output() openModal = new EventEmitter<void>();
  showInterviewProcess = false;
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

  applyResume(data: SkillsModel) {
    this.experience = data.experience;
    Object.assign(this.languages, data.languages);
    Object.assign(this.frameworks, data.frameworks);
    Object.assign(this.platforms, data.platforms);
    Object.assign(this.skills, data.skills);
    this.score = this.calculateScore();
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