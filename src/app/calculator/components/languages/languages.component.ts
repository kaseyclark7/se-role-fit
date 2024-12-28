import { Component } from '@angular/core';
import { CoreLanguagesComponent } from './core/core-languages.component';
import { AdditionalLanguagesComponent } from './additional/additional-languages.component';

@Component({
  selector: 'app-languages-section',
  standalone: true,
  imports: [
    CoreLanguagesComponent,
    AdditionalLanguagesComponent
  ],
  template: `
    <div class="form-group">
      <core-languages [languages]="languages" (onChange)="onChange($event)"/>
      <additional-languages [languages]="languages" (onChange)="onChange($event)"/>
    </div>
  `
})
export class LanguagesSectionComponent {
  languages: any; // Define proper type
  onChange(event: any) { // Define proper type
    // Implementation
  }
} 