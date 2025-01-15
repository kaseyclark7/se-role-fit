import { Component } from '@angular/core';
import { headerStyles } from './header.styles';

@Component({
  selector: 'app-calculator-header',
  standalone: true,
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
      <div class="header-accent"></div>
    </div>
  `,
  styles: [`
    .header {
      text-align: center;
      padding: 2rem;
      margin: 2rem auto;
      max-width: 900px;
      position: relative;
      overflow: hidden;
      border: 1px solid rgba(0, 243, 255, 0.2);
    }

    .header::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: linear-gradient(
        45deg,
        transparent,
        rgba(0, 243, 255, 0.1),
        transparent
      );
      animation: gradient-shift 8s linear infinite;
    }

    h1 {
      font-size: 2.8rem;
      margin: 0;
      font-family: 'JetBrains Mono', monospace;
      letter-spacing: -1px;
      color: var(--neon-blue);
      text-shadow: 0 0 10px rgba(0, 243, 255, 0.5);
    }

    .highlight {
      color: var(--neon-purple);
      text-shadow: 0 0 10px rgba(181, 55, 242, 0.5);
    }

    .subtitle {
      color: var(--neon-blue);
      font-size: 1.2rem;
      margin-top: 0.5rem;
      opacity: 0.8;
      letter-spacing: 2px;
      text-transform: uppercase;
    }

    .header-accent {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background: linear-gradient(90deg, 
        var(--neon-blue), 
        var(--neon-purple), 
        var(--neon-blue)
      );
      animation: gradient-shift 3s linear infinite;
    }

    .cube {
      width: 50px;
      height: 50px;
      position: relative;
      transform-style: preserve-3d;
      animation: float 3s ease-in-out infinite;
      margin: 0 auto 1rem;
    }

    .face {
      position: absolute;
      width: 50px;
      height: 50px;
      border: 2px solid var(--neon-blue);
      background: rgba(0, 243, 255, 0.1);
    }
  `]
})
export class CalculatorHeaderComponent {} 