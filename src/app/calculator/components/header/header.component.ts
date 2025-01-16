import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculator-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="header-container">
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
      <h1>SE Role Fit <span class="calculator">Calculator</span></h1>
      <h3>VETERANS UNITED HOME LOANS</h3>
      
      <div class="button-container">
        <a 
          href="https://careers.veteransunited.com/open-positions/job/software-engineer-remote-hybrid-remote-mo-r4222/" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="view-button"
        >
          View Job Description
          <div class="button-glow"></div>
        </a>
        <button class="view-button" (click)="showInterviewProcess.emit()">
          View Interview Process
          <div class="button-glow"></div>
        </button>
      </div>
      <div class="header-accent"></div>
    </div>
  `,
  styles: [`
    .header-container {
      text-align: center;
      margin-bottom: 2rem;
      padding: 2rem;
      background: var(--background-darker);
      border-radius: 15px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      position: relative;
      overflow: hidden;
    }

    .logo {
      margin-bottom: 1rem;
    }

    .cube {
      width: 40px;
      height: 40px;
      position: relative;
      transform-style: preserve-3d;
      transform: rotateX(-30deg) rotateY(45deg);
      animation: cube-rotate 20s infinite linear;
      margin: 0 auto;
    }

    .face {
      position: absolute;
      width: 100%;
      height: 100%;
      border: 2px solid var(--neon-blue);
      background: rgba(0, 243, 255, 0.1);
    }

    .front { transform: translateZ(20px); }
    .back { transform: translateZ(-20px); }
    .right { transform: rotateY(90deg) translateZ(20px); }
    .left { transform: rotateY(-90deg) translateZ(20px); }
    .top { transform: rotateX(90deg) translateZ(20px); }
    .bottom { transform: rotateX(-90deg) translateZ(20px); }

    @keyframes cube-rotate {
      from { transform: rotateX(-30deg) rotateY(0); }
      to { transform: rotateX(-30deg) rotateY(360deg); }
    }

    h1 {
      font-family: 'JetBrains Mono', monospace;
      color: var(--text-primary);
      margin: 0;
      font-size: 2rem;
    }

    .calculator {
      color: var(--neon-purple);
    }

    h3 {
      color: var(--neon-blue);
      margin: 0.5rem 0 1.5rem;
      font-size: 1rem;
      letter-spacing: 0.1em;
    }

    .button-container {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: center;
      margin-top: 1.5rem;
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
      text-decoration: none;
      display: inline-block;
    }

    .view-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 0 15px rgba(0, 243, 255, 0.3);
      border-color: var(--neon-purple);
    }

    .button-glow {
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(0, 243, 255, 0.2),
        transparent
      );
      animation: button-glow 3s infinite;
    }

    @keyframes button-glow {
      0% { left: -100%; }
      100% { left: 100%; }
    }

    .header-accent {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background: linear-gradient(90deg, var(--neon-blue), var(--neon-purple), var(--neon-blue));
      background-size: 200% 100%;
      animation: gradient-shift 5s infinite linear;
    }

    @keyframes gradient-shift {
      0% { background-position: 0% 50%; }
      100% { background-position: 200% 50%; }
    }
  `]
})
export class CalculatorHeaderComponent {
  @Output() openModal = new EventEmitter<void>();
  @Output() showInterviewProcess = new EventEmitter<void>();
}