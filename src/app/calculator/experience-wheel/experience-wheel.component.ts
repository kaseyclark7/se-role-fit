import { Component, ElementRef, EventEmitter, Output, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience-wheel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="wheel-container">
      <div class="experience-wheel" 
           #wheel
           [style.transform]="'rotate(' + rotation + 'deg)'">
        <div class="wheel-center"></div>
        <div class="wheel-marker"></div>
        <div *ngFor="let year of years; let i = index" 
             class="year-marker"
             [style.transform]="'rotate(' + (i * stepAngle) + 'deg) translateY(-120px)'">
          {{ year }}
        </div>
      </div>
      <div class="selected-value">{{ selectedYears }} Years</div>
    </div>
  `,
  styles: [`
    .wheel-container {
      position: relative;
      width: 300px;
      height: 300px;
      margin: 2rem auto;
      perspective: 1000px;
    }

    .experience-wheel {
      position: relative;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: grab;
      transform-style: preserve-3d;
      border: 4px solid white;
    }

    .experience-wheel:active {
      cursor: grabbing;
    }

    .wheel-center {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 30px;
      height: 30px;
      background: white;
      border-radius: 50%;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
      border: 2px solid #4ECDC4;
    }

    .wheel-marker {
      position: absolute;
      top: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 6px;
      height: 25px;
      background: #FF6B6B;
      border-radius: 3px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    .year-marker {
      position: absolute;
      left: 50%;
      top: 50%;
      transform-origin: center;
      color: white;
      font-weight: bold;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
      font-size: 1.2rem;
      transition: all 0.3s ease;
    }

    .selected-value {
      position: absolute;
      bottom: -50px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 1.8rem;
      font-weight: bold;
      color: #FF6B6B;
      text-align: center;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
    }
  `]
})
export class ExperienceWheelComponent implements AfterViewInit {
  @ViewChild('wheel') wheelElement!: ElementRef;
  @Output() experienceChange = new EventEmitter<number>();

  years = Array.from({ length: 31 }, (_, i) => i);
  stepAngle = 360 / this.years.length;
  rotation = 0;
  selectedYears = 0;

  private isRotating = false;
  private startX = 0;
  private startY = 0;
  private startRotation = 0;

  ngAfterViewInit() {
    this.setupWheelInteraction();
  }

  private setupWheelInteraction() {
    const wheel = this.wheelElement.nativeElement;
    
    wheel.addEventListener('mousedown', this.startRotating.bind(this));
    wheel.addEventListener('touchstart', this.startRotating.bind(this));
    document.addEventListener('mousemove', this.rotate.bind(this));
    document.addEventListener('touchmove', this.rotate.bind(this));
    document.addEventListener('mouseup', this.stopRotating.bind(this));
    document.addEventListener('touchend', this.stopRotating.bind(this));
  }

  private startRotating(e: MouseEvent | TouchEvent) {
    this.isRotating = true;
    const pos = 'touches' in e ? e.touches[0] : e;
    const rect = this.wheelElement.nativeElement.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    this.startX = pos.clientX - centerX;
    this.startY = pos.clientY - centerY;
    this.startRotation = this.rotation;
    e.preventDefault();
  }

  private rotate(e: MouseEvent | TouchEvent) {
    if (!this.isRotating) return;
    
    const pos = 'touches' in e ? e.touches[0] : e;
    const rect = this.wheelElement.nativeElement.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const currentX = pos.clientX - centerX;
    const currentY = pos.clientY - centerY;
    
    const startAngle = Math.atan2(this.startY, this.startX);
    const currentAngle = Math.atan2(currentY, currentX);
    const angleDiff = (currentAngle - startAngle) * (180 / Math.PI);
    
    this.rotation = this.startRotation + angleDiff;
    
    // Calculate selected years based on rotation
    const normalizedRotation = ((this.rotation % 360) + 360) % 360;
    const selectedIndex = Math.round(normalizedRotation / this.stepAngle);
    const newYears = this.years[selectedIndex % this.years.length];
    
    if (newYears !== this.selectedYears) {
      this.selectedYears = newYears;
      this.experienceChange.emit(this.selectedYears);
    }
  }

  private stopRotating() {
    this.isRotating = false;
  }
}