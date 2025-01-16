import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job-description-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="modal-overlay" (click)="closeModal()">
      <div class="modal-content" (click)="$event.stopPropagation()">
        <button class="close-button" (click)="closeModal()">×</button>
        <h2>Software Engineer Position</h2>
        <div class="job-content">
          <!-- Add your job description content here -->
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
  `]
})
export class JobDescriptionModalComponent {
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
}
