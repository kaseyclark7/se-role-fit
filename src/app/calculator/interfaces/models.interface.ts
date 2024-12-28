import { CoreLanguage, AdditionalLanguage, CoreFramework, AdditionalFramework } from '../types';

export interface LanguagesModel {
  core: CoreLanguage[];
  additional: AdditionalLanguage[];
}

export interface FrameworksModel {
  core: CoreFramework[];
  additional: AdditionalFramework[];
} 