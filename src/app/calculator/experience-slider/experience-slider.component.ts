import { Component, ElementRef, EventEmitter, Output, ViewChild, AfterViewInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience-slider',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="slider-container" 
         #container
         (mousedown)="startDragging($event)"
         (touchstart)="startDragging($event)">
      <div class="timeline">
        <div class="progress-bar" [style.width]="progressWidth + '%'"></div>
        <div class="handle" 
             [style.left]="progressWidth + '%'"
             #handle>
          <div class="handle-dot"></div>
        </div>
      </div>
      <div class="value-display">
        {{value}} Years
      </div>
    </div>
  `,
  styles: [`
    .slider-container {
      padding: 1rem 0.5rem;
      max-width: 800px;
      margin: 0 auto;
      cursor: pointer;
    }

    .timeline {
      position: relative;
      height: 4px;
      background: #e2e8f0;
      border-radius: 2px;
      margin: 2rem 0;
    }

    .progress-bar {
      position: absolute;
      height: 100%;
      background: #6366f1;
      border-radius: 2px;
      transition: width 0.1s ease;
    }

    .handle {
      position: absolute;
      transform: translateX(-50%);
      z-index: 2;
    }

    .handle-dot {
      width: 24px;
      height: 24px;
      background: #6366f1;
      border: 3px solid white;
      border-radius: 50%;
      margin-top: -10px;
      box-shadow: 0 2px 4px rgba(99, 102, 241, 0.3);
      cursor: grab;
    }

    .handle-dot:active {
      cursor: grabbing;
      transform: scale(1.1);
    }

    .value-display {
      text-align: center;
      margin-top: 1rem;
      font-size: 1.5rem;
      font-weight: 600;
      color: #4f46e5;
    }
  `]
})
export class ExperienceSliderComponent implements AfterViewInit {
  @Input() value = 0;
  @Output() valueChange = new EventEmitter<number>();

  progressWidth = 0;
  private maxYears = 30;
  private isDragging = false;

  @ViewChild('container') container!: ElementRef;
  @ViewChild('handle') handle!: ElementRef;

  ngAfterViewInit() {
    this.progressWidth = (this.value / this.maxYears) * 100;
  }

  startDragging(event: MouseEvent | TouchEvent) {
    this.isDragging = true;
    this.updatePosition(event);

    const moveHandler = (e: MouseEvent | TouchEvent) => {
      if (this.isDragging) {
        this.updatePosition(e);
      }
    };

    const stopHandler = () => {
      this.isDragging = false;
      document.removeEventListener('mousemove', moveHandler as EventListener);
      document.removeEventListener('touchmove', moveHandler as EventListener);
      document.removeEventListener('mouseup', stopHandler);
      document.removeEventListener('touchend', stopHandler);
    };

    document.addEventListener('mousemove', moveHandler as EventListener);
    document.addEventListener('touchmove', moveHandler as EventListener);
    document.addEventListener('mouseup', stopHandler);
    document.addEventListener('touchend', stopHandler);
  }

  private updatePosition(event: MouseEvent | TouchEvent) {
    const containerRect = this.container.nativeElement.getBoundingClientRect();
    const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
    let position = (clientX - containerRect.left) / containerRect.width;
    position = Math.max(0, Math.min(1, position));
    
    const years = Math.round(position * this.maxYears);
    this.setValue(years);
  }

  setValue(years: number) {
    this.value = years;
    this.progressWidth = (years / this.maxYears) * 100;
    this.valueChange.emit(this.value);
  }
}