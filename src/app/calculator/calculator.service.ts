import { Injectable } from '@angular/core';
import { SkillsModel } from './models/skills.model';
import { CalculationResult } from './models/calculation-result.model';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  private readonly CORE_LANGUAGES = ['javascript', 'csharp'];
  private readonly ADDITIONAL_LANGUAGES = ['python', 'java', 'cpp', 'php', 'go', 'kotlin', 'swift'];
  private readonly CORE_FRAMEWORKS = ['dotnet', 'angular'];
  private readonly ADDITIONAL_FRAMEWORKS = ['react', 'vue', 'spring', 'express'];
  
  private readonly CORE_PLATFORMS = ['mia', 'github', 'sql', 'grafana', 'kafka'];

  calculateScore(data: SkillsModel): CalculationResult {
    let total = 0;

    // Experience points (max 30, 6 points per year up to 5 years)
    const experiencePoints = Math.min(data.experience, 5) * 6;
    total += experiencePoints;

    // Programming languages (max 15)
    let languagePoints = 0;
    // Core languages (8 points each)
    for (const lang of this.CORE_LANGUAGES) {
      if (data.languages[lang as keyof typeof data.languages]) {
        languagePoints += 8;
      }
    }
    // Additional languages (2 points each)
    for (const lang of this.ADDITIONAL_LANGUAGES) {
      if (data.languages[lang as keyof typeof data.languages]) {
        languagePoints += 2;
      }
    }
    total += Math.min(languagePoints, 15);

    // Frameworks (max 15)
    let frameworkPoints = 0;
    // Core frameworks (8 points each)
    for (const framework of this.CORE_FRAMEWORKS) {
      if (data.frameworks[framework as keyof typeof data.frameworks]) {
        frameworkPoints += 8;
      }
    }
    // Additional frameworks (2 points each)
    for (const framework of this.ADDITIONAL_FRAMEWORKS) {
      if (data.frameworks[framework as keyof typeof data.frameworks]) {
        frameworkPoints += 2;
      }
    }
    total += Math.min(frameworkPoints, 15);

    // Platforms and tools (max 20)
    let platformPoints = 0;
    // Core platforms (5 points each)
    for (const platform of this.CORE_PLATFORMS) {
      if (data.platforms[platform as keyof typeof data.platforms]) {
        platformPoints += 5;
      }
    }
    // Additional platforms (1 point each)
    for (const platform of Object.keys(data.platforms)) {
      if (!this.CORE_PLATFORMS.includes(platform) && 
          data.platforms[platform as keyof typeof data.platforms]) {
        platformPoints += 1;
      }
    }
    total += Math.min(platformPoints, 20);

    // Software craftsmanship skills (3 points each, max 20 points)
    const selectedSkillsCount = Object.values(data.skills).filter(v => v).length;
    const skillPoints = selectedSkillsCount * 3;
    total += Math.min(skillPoints, 20);

    return this.getFeedback(Math.min(Math.round(total), 100));
  }

  private getFeedback(score: number): CalculationResult {
    if (score >= 70) {
      return {
        score,
        feedback: 'Excellent match! Your skills align very well with our requirements.',
        resultClass: 'excellent'
      };
    } else if (score >= 50) {
      return {
        score,
        feedback: 'Good match! You have a solid foundation for this role.',
        resultClass: 'good'
      };
    } else {
      return {
        score,
        feedback: 'You might need additional experience in some key areas.',
        resultClass: 'needs-improvement'
      };
    }
  }
}