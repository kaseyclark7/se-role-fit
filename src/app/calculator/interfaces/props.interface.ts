import { LanguagesModel, FrameworksModel } from './models.interface';

export interface LanguageSectionProps {
  languages: LanguagesModel;
  onLanguageChange: (language: string) => void;
}

export interface FrameworkSectionProps {
  frameworks: FrameworksModel;
  onFrameworkChange: (framework: string) => void;
} 