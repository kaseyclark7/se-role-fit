import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator/calculator.component';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CalculatorComponent],
  template: `
    <app-calculator></app-calculator>

    <div class="modal" [class.active]="(modalService.isOpen$ | async)">
      <div class="modal-overlay" (click)="closeModal()"></div>
      <div class="modal-content glass-effect">
        <button class="close-button" (click)="closeModal()">×</button>
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
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease;
    }

    .modal.active {
      opacity: 1;
      pointer-events: auto;
    }

    .modal-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(5px);
    }

    .modal-content {
      position: relative;
      width: 90%;
      max-width: 800px;
      max-height: 90vh;
      padding: 2rem;
      background: var(--background);
      border: 1px solid var(--neon-blue);
      border-radius: 8px;
      overflow-y: auto;
      z-index: 1;
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
    }
  `]
})
export class AppComponent {
  constructor(public modalService: ModalService) {}

  closeModal() {
    this.modalService.close();
  }
} 