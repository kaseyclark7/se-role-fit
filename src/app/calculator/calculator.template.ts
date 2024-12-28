export const template = `
    <div class="calculator-container">
      <div class="header">
        <h1>Software Engineer Role Fit Calculator</h1>
        <h2>Veterans United Home Loans</h2>
      </div>

      <div class="form-group experience-section">
        <label>Years of Experience</label>
        <app-experience-slider [(value)]="experience" (valueChange)="calculate()"></app-experience-slider>
      </div>

      <div class="skills-container">
        <!-- Languages Section -->
        <div class="form-group skill-section">
          <label>Programming Languages</label>
          <div class="premium-languages">
            <h3>
              Core Languages 
              <span class="info-tooltip">
                ?
                <span class="tooltip-text">Essential for the day-to-day role</span>
              </span>
            </h3>
            <div class="checkbox-group">
              <label class="skill-bubble premium">
                <input type="checkbox" [(ngModel)]="languages.javascript" (ngModelChange)="calculate()">
                JavaScript/TypeScript
              </label>
              <label class="skill-bubble premium">
                <input type="checkbox" [(ngModel)]="languages.csharp" (ngModelChange)="calculate()">
                C#
              </label>
            </div>
          </div>

          <div class="additional-languages">
            <h3>
              Additional Languages
              <span class="info-tooltip">
                ?
                <span class="tooltip-text">Nice-to-have or easily transferable skills</span>
              </span>
            </h3>
            <div class="checkbox-group">
              <label class="skill-bubble">
                <input type="checkbox" [(ngModel)]="languages.python" (ngModelChange)="calculate()">
                Python
              </label>
              <label class="skill-bubble">
                <input type="checkbox" [(ngModel)]="languages.java" (ngModelChange)="calculate()">
                Java
              </label>
              <label class="skill-bubble">
                <input type="checkbox" [(ngModel)]="languages.cpp" (ngModelChange)="calculate()">
                C++
              </label>
              <label class="skill-bubble">
                <input type="checkbox" [(ngModel)]="languages.php" (ngModelChange)="calculate()">
                PHP
              </label>
              <label class="skill-bubble">
                <input type="checkbox" [(ngModel)]="languages.go" (ngModelChange)="calculate()">
                Go
              </label>
              <label class="skill-bubble">
                <input type="checkbox" [(ngModel)]="languages.kotlin" (ngModelChange)="calculate()">
                Kotlin
              </label>
              <label class="skill-bubble">
                <input type="checkbox" [(ngModel)]="languages.swift" (ngModelChange)="calculate()">
                Swift
              </label>
            </div>
          </div>
        </div>

        <!-- Frameworks Section -->
        <div class="form-group skill-section">
          <label>Frameworks</label>
          <div class="premium-frameworks">
            <h3>
              Core Frameworks
              <span class="info-tooltip">
                ?
                <span class="tooltip-text">Essential for the day-to-day role</span>
              </span>
            </h3>
            <div class="checkbox-group">
              <label class="skill-bubble premium has-tooltip">
                <input type="checkbox" [(ngModel)]="frameworks.dotnet" (ngModelChange)="calculate()">
                <span class="label-with-tooltip">
                  .NET
                  <span class="tooltip-text">.NET Framework, .NET Core, and/or Unified .NET</span>
                </span>
              </label>
              <label class="skill-bubble premium">
                <input type="checkbox" [(ngModel)]="frameworks.angular" (ngModelChange)="calculate()">
                Angular
              </label>
            </div>
          </div>

          <div class="additional-frameworks">
            <h3>
              Additional Frameworks
              <span class="info-tooltip">
                ?
                <span class="tooltip-text">Nice-to-have or easily transferable skills</span>
              </span>
            </h3>
            <div class="checkbox-group">
              <label class="skill-bubble">
                <input type="checkbox" [(ngModel)]="frameworks.react" (ngModelChange)="calculate()">
                React
              </label>
              <label class="skill-bubble">
                <input type="checkbox" [(ngModel)]="frameworks.vue" (ngModelChange)="calculate()">
                Vue.js
              </label>
              <label class="skill-bubble">
                <input type="checkbox" [(ngModel)]="frameworks.spring" (ngModelChange)="calculate()">
                Spring
              </label>
              <label class="skill-bubble">
                <input type="checkbox" [(ngModel)]="frameworks.express" (ngModelChange)="calculate()">
                Express.js/NestJS
              </label>
            </div>
          </div>
        </div>

        <!-- Platforms Section -->
        <div class="form-group skill-section">
          <label>Platforms & Tools</label>
          
          <div class="platform-category">
            <h3>Internal Developer Platform</h3>
            <div class="checkbox-group">
              <label class="skill-bubble premium">
                <input type="checkbox" [(ngModel)]="platforms.mia" (ngModelChange)="calculate()">
                Mia
              </label>
            </div>
          </div>

          <div class="platform-category">
            <h3>CI/CD</h3>
            <div class="checkbox-group">
              <label class="skill-bubble premium">
                <input type="checkbox" [(ngModel)]="platforms.github" (ngModelChange)="calculate()">
                GitHub
              </label>
              <label class="skill-bubble">
                <input type="checkbox" [(ngModel)]="platforms.gitlab" (ngModelChange)="calculate()">
                GitLab
              </label>
              <label class="skill-bubble">
                <input type="checkbox" [(ngModel)]="platforms.azureDevops" (ngModelChange)="calculate()">
                Azure DevOps
              </label>
            </div>
          </div>

          <div class="platform-category">
            <h3>Eventing</h3>
            <div class="checkbox-group">
              <label class="skill-bubble premium">
                <input type="checkbox" [(ngModel)]="platforms.kafka" (ngModelChange)="calculate()">
                Kafka
              </label>
              <label class="skill-bubble">
                <input type="checkbox" [(ngModel)]="platforms.rabbitmq" (ngModelChange)="calculate()">
                RabbitMQ
              </label>
            </div>
          </div>

          <div class="platform-category">
            <h3>Data Persistence</h3>
            <div class="checkbox-group">
              <label class="skill-bubble premium">
                <input type="checkbox" [(ngModel)]="platforms.sql" (ngModelChange)="calculate()">
                SQL
              </label>
              <label class="skill-bubble">
                <input type="checkbox" [(ngModel)]="platforms.mongodb" (ngModelChange)="calculate()">
                MongoDB
              </label>
              <label class="skill-bubble">
                <input type="checkbox" [(ngModel)]="platforms.redis" (ngModelChange)="calculate()">
                Redis
              </label>
              <label class="skill-bubble">
                <input type="checkbox" [(ngModel)]="platforms.elasticsearch" (ngModelChange)="calculate()">
                ElasticSearch
              </label>
              <label class="skill-bubble">
                <input type="checkbox" [(ngModel)]="platforms.storageGrid" (ngModelChange)="calculate()">
                StorageGrid (S3)
              </label>
            </div>
          </div>

          <div class="platform-category">
            <h3>Additional Tools</h3>
            <div class="checkbox-group">
              <label class="skill-bubble premium">
                <input type="checkbox" [(ngModel)]="platforms.grafana" (ngModelChange)="calculate()">
                Grafana
              </label>
              <label class="skill-bubble">
                <input type="checkbox" [(ngModel)]="platforms.camunda" (ngModelChange)="calculate()">
                Camunda
              </label>
              <label class="skill-bubble">
                <input type="checkbox" [(ngModel)]="platforms.launchDarkly" (ngModelChange)="calculate()">
                LaunchDarkly
              </label>
              <label class="skill-bubble">
                <input type="checkbox" [(ngModel)]="platforms.playwright" (ngModelChange)="calculate()">
                Playwright
              </label>
            </div>
          </div>
        </div>

        <!-- Core Skills Section -->
        <div class="form-group skill-section">
          <label>Software Engineering Practices</label>
          <div class="checkbox-group">
            <label class="skill-bubble">
              <input type="checkbox" [(ngModel)]="skills.apiFirst" (ngModelChange)="calculate()">
              API-First Design
            </label>
            <label class="skill-bubble">
              <input type="checkbox" [(ngModel)]="skills.ddd" (ngModelChange)="calculate()">
              Domain Driven Design
            </label>
            <label class="skill-bubble">
              <input type="checkbox" [(ngModel)]="skills.cleanCode" (ngModelChange)="calculate()">
              Clean Code
            </label>
            <label class="skill-bubble">
              <input type="checkbox" [(ngModel)]="skills.tdd" (ngModelChange)="calculate()">
              Test Driven Design
            </label>
            <label class="skill-bubble">
              <input type="checkbox" [(ngModel)]="skills.pairProgramming" (ngModelChange)="calculate()">
              Pair Programming
            </label>
            <label class="skill-bubble">
              <input type="checkbox" [(ngModel)]="skills.cloud" (ngModelChange)="calculate()">
              Cloud Experience
            </label>
            <label class="skill-bubble">
              <input type="checkbox" [(ngModel)]="skills.microservices" (ngModelChange)="calculate()">
              Microservice Architecture
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="result-container">
      <div class="result" [ngClass]="resultClass">
        <h3>Fit Score: {{ score }}%</h3>
        <p>{{ feedback }}</p>
      </div>
    </div>
`;