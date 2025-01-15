import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator/calculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CalculatorComponent],
  template: `
    <app-calculator></app-calculator>

    <div 
      class="modal" 
      [class.show-modal]="showModal"
    >
      <div class="modal-overlay" (click)="showModal = false"></div>
      <div class="modal-content">
        <button class="close-button" (click)="showModal = false">×</button>
        <h2>Software Engineer Position</h2>
        <div class="job-description">
          <h3>About the Role</h3>
          <p>As a Software Engineer at Veterans United Home Loans, you will:</p>
          <ul>
            <li>Build and maintain scalable web applications using modern technologies</li>
            <li>Work with C#/.NET and JavaScript/TypeScript in an Angular environment</li>
            <li>Collaborate with cross-functional teams in an agile environment</li>
            <li>Practice test-driven development and pair programming</li>
            <li>Design and implement RESTful APIs</li>
            <li>Work with various databases and message queues</li>
          </ul>

          <h3>Required Skills</h3>
          <ul>
            <li>Strong proficiency in C# and JavaScript/TypeScript</li>
            <li>Experience with .NET and Angular frameworks</li>
            <li>Understanding of API design principles</li>
            <li>Knowledge of software engineering best practices</li>
            <li>Experience with version control (Git)</li>
          </ul>

          <h3>Nice to Have</h3>
          <ul>
            <li>Experience with additional programming languages</li>
            <li>Knowledge of cloud platforms</li>
            <li>Understanding of microservices architecture</li>
            <li>Experience with message queues and event-driven architecture</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(5px);
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      z-index: 1000;
    }

    .show-modal {
      opacity: 1;
      visibility: visible;
    }

    .modal-content {
      background: var(--background);
      padding: 2rem;
      border-radius: 8px;
      max-width: 800px;
      width: 90%;
      max-height: 90vh;
      overflow-y: auto;
      position: relative;
      border: 1px solid var(--neon-blue);
      transform: translateY(-20px);
      transition: transform 0.3s ease;
    }

    .show-modal .modal-content {
      transform: translateY(0);
    }

    .close-button {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: transparent;
      border: none;
      color: var(--text-primary);
      font-size: 2rem;
      cursor: pointer;
      transition: transform 0.3s ease;
    }

    .close-button:hover {
      color: var(--neon-blue);
      transform: rotate(90deg);
    }

    .job-description {
      color: var(--text-primary);
      line-height: 1.6;
    }

    h2 {
      color: var(--neon-blue);
      margin-bottom: 1.5rem;
    }

    h3 {
      color: var(--neon-purple);
      margin: 1.5rem 0 1rem;
    }

    ul {
      list-style-type: none;
      padding-left: 0;
    }

    li {
      margin-bottom: 0.5rem;
      padding-left: 1.5rem;
      position: relative;
    }

    li:before {
      content: "•";
      color: var(--neon-blue);
      position: absolute;
      left: 0;
    }
  `]
})
export class AppComponent {
  showModal = false;

  openModal() {
    this.showModal = true;
  }
} 