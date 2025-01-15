import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator/calculator.component';
import { ModalService } from './services/modal.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CalculatorComponent, AsyncPipe],
  providers: [ModalService],
  template: `
    <app-calculator></app-calculator>

    <div class="modal" [class.active]="isModalOpen$ | async">
      <div class="modal-content glass-effect">
        <button class="close-button" (click)="closeModal()">×</button>
        <h2>Software Engineer Position</h2>
        <!-- Job description content -->
      </div>
      <div class="modal-overlay" (click)="closeModal()"></div>
    </div>
  `,
  styles: [`
    .modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      z-index: 999;
    }

    .modal.active {
      opacity: 1;
      visibility: visible;
    }

    .modal-content {
      width: 90%;
      max-width: 800px;
      max-height: 90vh;
      background: var(--background);
      border: 1px solid var(--neon-blue);
      border-radius: 8px;
      padding: 2rem;
      position: relative;
      overflow-y: auto;
      z-index: 1000;
    }

    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(5px);
      z-index: 998;
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
      transition: all 0.3s ease;
    }

    .close-button:hover {
      color: var(--neon-blue);
      transform: rotate(90deg);
    }
  `]
})
export class AppComponent {
  isModalOpen$ = this.modalService.isOpen$;

  constructor(private modalService: ModalService) {}

  closeModal() {
    this.modalService.close();
  }
} 