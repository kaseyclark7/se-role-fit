import { Injectable } from '@angular/core';
import { LanguagesModel, FrameworksModel } from '../interfaces/models.interface';

@Injectable({
  providedIn: 'root'
})
export class ScoringService {
  calculateLanguagePoints(languages: LanguagesModel): number {
    let points = 0;
    // Language scoring logic
    return points;
  }

  calculateFrameworkPoints(frameworks: FrameworksModel): number {
    let points = 0;
    // Framework scoring logic
    return points;
  }
} 