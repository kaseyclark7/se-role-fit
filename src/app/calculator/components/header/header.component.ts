import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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
      <div class="subtitle">VETERANS UNITED HOME LOANS</div>
      <a 
        href="https://careers.veteransunited.com/open-positions/job/software-engineer-remote-hybrid-remote-mo-r4222/" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="job-info-button glass-effect"
      >
        View Job Description
        <div class="button-glow"></div>
      </a>
      <div class="header-accent"></div>
    </div>
  `,
  styles: [`
    .header {
      text-align: center;
      padding: 2rem;
      position: relative;
      overflow: hidden;
      border-radius: 0 0 20px 20px;
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
      font-size: 2.5rem;
      margin: 1rem 0;
      color: var(--text-primary);
    }

    .highlight {
      color: var(--neon-purple);
    }

    .subtitle {
      color: var(--neon-blue);
      font-size: 1rem;
      margin-bottom: 1.5rem;
      letter-spacing: 0.2em;
    }

    .job-info-button {
      background: transparent;
      color: var(--text-primary);
      border: 1px solid var(--neon-blue);
      padding: 0.8rem 1.5rem;
      border-radius: 8px;
      cursor: pointer;
      font-family: 'JetBrains Mono', monospace;
      position: relative;
      overflow: hidden;
      transition: all 0.3s ease;
    }

    .job-info-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 0 15px rgba(0, 243, 255, 0.3);
    }

    .button-glow {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(45deg, transparent, rgba(0, 243, 255, 0.2), transparent);
      transform: translateX(-100%);
      animation: button-glow 3s infinite;
    }

    @keyframes button-glow {
      100% { transform: translateX(100%); }
    }

    .header-accent {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
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
export class CalculatorHeaderComponent {} 