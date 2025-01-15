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
      font-size: 2.5rem;
      margin: 0;
      background: linear-gradient(45deg, var(--neon-blue), var(--neon-purple));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      filter: drop-shadow(0 0 10px rgba(0, 243, 255, 0.5));
    }

    .subtitle {
      color: #8888a0;
      font-size: 1.2rem;
      margin-top: 0.5rem;
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

    /* Add cube face transformations */
    .front { transform: translateZ(25px); }
    .back { transform: translateZ(-25px) rotateY(180deg); }
    .right { transform: translateX(25px) rotateY(90deg); }
    .left { transform: translateX(-25px) rotateY(-90deg); }
    .top { transform: translateY(-25px) rotateX(90deg); }
    .bottom { transform: translateY(25px) rotateX(-90deg); }
  `]
})
export class CalculatorHeaderComponent {} 