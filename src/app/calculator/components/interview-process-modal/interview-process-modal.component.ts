import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-interview-process-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="modal-overlay" (click)="closeModal()">
      <div class="modal-content" (click)="$event.stopPropagation()">
        <button class="close-button" (click)="closeModal()">×</button>
        <h2>Our Interview Process</h2>
        
        <div class="process-step">
          <h3>Step 1: Initial Interview</h3>
          <p>Begin your journey with a friendly conversation with our Technical Recruiter. This 30-45 minute discussion will cover:</p>
          <ul>
            <li>Your background and experience</li>
            <li>What you're looking for in your next role</li>
            <li>Overview of Veterans United's culture and benefits</li>
            <li>Your questions about the role and company</li>
          </ul>
        </div>

        <div class="process-step">
          <h3>Step 2: Technical Interview</h3>
          <p>If there's a mutual fit after the initial interview, you'll move forward to our technical assessment:</p>
          <ul>
            <li>2-hour session with our Engineering team</li>
            <li>Collaborative .NET pair programming exercise</li>
            <li>Panel discussion about your technical experience</li>
          </ul>
        </div>

        <div class="timeline">
          <h3>Quick Decision Timeline</h3>
          <p>We respect your time and aim to provide feedback within 5 business days of completing the interview process. If selected, you'll receive a comprehensive offer package detailing compensation, benefits, and next steps.</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.85);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
      backdrop-filter: blur(5px);
    }

    .modal-content {
      background: var(--background-dark);
      border: 1px solid var(--neon-blue);
      border-radius: 15px;
      padding: 2rem;
      max-width: 600px;
      width: 90%;
      max-height: 90vh;
      overflow-y: auto;
      position: relative;
      box-shadow: 0 0 20px rgba(0, 255, 255, 0.2);
    }

    .close-button {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: transparent;
      border: none;
      color: var(--text-primary);
      font-size: 1.5rem;
      cursor: pointer;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      transition: all 0.3s ease;
    }

    .close-button:hover {
      background: rgba(255, 255, 255, 0.1);
      color: var(--neon-purple);
    }

    h2 {
      color: var(--neon-blue);
      margin-bottom: 1.5rem;
      font-family: 'JetBrains Mono', monospace;
    }

    h3 {
      color: var(--neon-purple);
      margin: 1rem 0;
      font-family: 'JetBrains Mono', monospace;
    }

    .process-step {
      margin-bottom: 2rem;
      padding: 1rem;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 10px;
    }

    ul {
      list-style-type: none;
      padding-left: 1rem;
    }

    li {
      margin: 0.5rem 0;
      position: relative;
      padding-left: 1.5rem;
    }

    li::before {
      content: '→';
      position: absolute;
      left: 0;
      color: var(--neon-blue);
    }

    .timeline {
      margin-top: 2rem;
      padding: 1rem;
      background: rgba(191, 123, 255, 0.05);
      border-radius: 10px;
      border-left: 3px solid var(--neon-purple);
    }
  `]
})
export class InterviewProcessModalComponent {
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
}
