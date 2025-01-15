import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-calculator-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="header glass-effect">
      <div class="logo">
        <div class="cube">
          <div class="face front"></div>
          <div class="face back"></div>
          <div class="face right"></div>
          <div class="face left"></div>
          <div class="face top"></div>
          <div class="face bottom"></div>
        </div>
      </div>
      <h1>SE Role Fit <span class="highlight">Calculator</span></h1>
      <div class="subtitle">Veterans United Home Loans</div>
      <button class="job-info-button glass-effect" (click)="openModal()">
        View Job Description
        <div class="button-glow"></div>
      </button>
      <div class="header-accent"></div>
    </div>
  `
})
export class CalculatorHeaderComponent {
  constructor(private modalService: ModalService) {}

  openModal() {
    console.log('Opening modal');
    this.modalService.open();
  }
} 