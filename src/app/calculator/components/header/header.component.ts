import { Component } from '@angular/core';
import { headerStyles } from './header.styles';
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
      <div class="subtitle">Veterans United Home Loans</div>
      <button class="job-info-button glass-effect" (click)="openModal()">
        View Job Description
        <div class="button-glow"></div>
      </button>
      <div class="modal" [class.active]="isModalOpen">
        <div class="modal-content glass-effect">
          <button class="close-button" (click)="closeModal()">×</button>
          <h2>Software Engineer Position</h2>
          <div class="job-content">
            <section class="job-section">
              <h3>Position Overview</h3>
              <p>As a Software Engineer at Veterans United Home Loans, you'll play a key role in building and maintaining the software that makes life better for our coworkers and the Veterans we serve. Your work will focus on creating front-end and back-end solutions that support our mission—helping Veterans and service members achieve the dream of homeownership.</p>
            </section>

            <section class="job-section">
              <h3>Key Qualifications</h3>
              <ul>
                <li>Experience with CI/CD build/release pipeline management tools</li>
                <li>Proficiency in Web APIs and microservice architecture</li>
                <li>Experience with C#, .NET, TypeScript, Angular, SQL Server, MongoDB, or related databases</li>
                <li>Preference for Agile product delivery</li>
                <li>Familiarity with GIT, Change Management, and application lifecycle management tools</li>
              </ul>
            </section>

            <section class="job-section">
              <h3>Core Responsibilities</h3>
              <ul>
                <li>Building and delivering functional, reliable software using core technologies like .NET, C#, Angular, and TypeScript</li>
                <li>Applying Domain-Driven Design and Clean Code principles</li>
                <li>Collaborating through planning sessions and retrospectives</li>
                <li>Working with Architects and Product Owners on requirements</li>
                <li>Helping shape and adopt Software Engineering standards</li>
              </ul>
            </section>

            <section class="job-section">
              <h3>Ideal Candidate Traits</h3>
              <div class="traits-grid">
                <div class="trait-card">
                  <h4>Driven Developer</h4>
                  <p>Passionate about software engineering with a focus on meaningful results</p>
                </div>
                <div class="trait-card">
                  <h4>Genuine & Transparent</h4>
                  <p>Values authenticity and building trust through honesty</p>
                </div>
                <div class="trait-card">
                  <h4>Adaptable Engineer</h4>
                  <p>Thrives in dynamic settings and embraces change</p>
                </div>
                <div class="trait-card">
                  <h4>Speed Enthusiast</h4>
                  <p>Energized by fast-paced environments and efficient delivery</p>
                </div>
              </div>
            </section>

            <section class="job-section">
              <h3>Location & Compensation</h3>
              <p>Remote position in Columbia, St. Louis, Kansas City, or Springfield, MO with hybrid flexibility. Salary range: $70,000 - $105,000, based on experience and skillset.</p>
            </section>

            <section class="job-section">
              <h3>About Veterans United</h3>
              <p>We're the #1 VA lender for homebuyers in the nation, having closed over 500,000 VA Loans. Our success is measured by living our values: Be Passionate and Have Fun, Deliver Results with Integrity and Enhance Lives Every Day.</p>
            </section>

            <div class="job-footer">
              <p class="inclusive-statement">Veterans United Home Loans and its affiliates are proud to be Equal Opportunity Employers committed to creating a diverse and inclusive workforce.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-overlay" [class.active]="isModalOpen" (click)="closeModal()"></div>
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

    .job-info-button {
      margin-top: 1rem;
      padding: 0.8rem 1.5rem;
      background: transparent;
      border: 1px solid var(--neon-blue);
      color: var(--neon-blue);
      border-radius: 8px;
      cursor: pointer;
      font-family: 'JetBrains Mono', monospace;
      position: relative;
      overflow: hidden;
      transition: all 0.3s ease;
    }

    .job-info-button:hover {
      background: rgba(0, 243, 255, 0.1);
      transform: translateY(-2px);
    }

    .button-glow {
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(0, 243, 255, 0.4) 0%, transparent 70%);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .job-info-button:hover .button-glow {
      opacity: 1;
      animation: glow-pulse 2s infinite;
    }

    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(10, 10, 31, 0.8);
      backdrop-filter: blur(5px);
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      z-index: 998;
    }

    .modal-overlay.active {
      opacity: 1;
      visibility: visible;
    }

    .modal {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0.9);
      width: 90%;
      max-width: 800px;
      max-height: 90vh;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      z-index: 999;
    }

    .modal.active {
      opacity: 1;
      visibility: visible;
      transform: translate(-50%, -50%) scale(1);
    }

    .modal-content {
      padding: 2rem;
      overflow-y: auto;
      max-height: 80vh;
      position: relative;
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

    @keyframes glow-pulse {
      0% { opacity: 0.4; }
      50% { opacity: 0.8; }
      100% { opacity: 0.4; }
    }

    .job-content {
      color: var(--text-primary);
      line-height: 1.6;
    }

    .job-section {
      margin-bottom: 2rem;
    }

    .job-section h3 {
      color: var(--neon-blue);
      margin-bottom: 1rem;
      font-size: 1.3rem;
    }

    .job-section ul {
      list-style-type: none;
      padding-left: 0;
    }

    .job-section ul li {
      margin-bottom: 0.8rem;
      padding-left: 1.5rem;
      position: relative;
    }

    .job-section ul li::before {
      content: "→";
      position: absolute;
      left: 0;
      color: var(--neon-purple);
    }

    .traits-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
      margin-top: 1rem;
    }

    .trait-card {
      background: rgba(0, 243, 255, 0.05);
      border: 1px solid rgba(0, 243, 255, 0.1);
      border-radius: 8px;
      padding: 1rem;
      transition: all 0.3s ease;
    }

    .trait-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 0 15px rgba(0, 243, 255, 0.2);
    }

    .trait-card h4 {
      color: var(--neon-purple);
      margin: 0 0 0.5rem 0;
      font-size: 1.1rem;
    }

    .trait-card p {
      margin: 0;
      font-size: 0.9rem;
      color: var(--text-secondary);
    }

    .job-footer {
      margin-top: 2rem;
      padding-top: 1rem;
      border-top: 1px solid rgba(0, 243, 255, 0.1);
    }

    .inclusive-statement {
      font-style: italic;
      color: var(--text-secondary);
      font-size: 0.9rem;
    }

    @media (max-width: 768px) {
      .traits-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class CalculatorHeaderComponent {
  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.isModalOpen = false;
    document.body.style.overflow = 'auto';
  }
} 