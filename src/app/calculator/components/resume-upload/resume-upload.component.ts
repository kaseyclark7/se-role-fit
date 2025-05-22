import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeParserService } from '../../../services/resume-parser.service';
import { SkillsModel } from '../../models/skills.model';

@Component({
  selector: 'app-resume-upload',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="resume-upload">
      <input type="file" accept=".txt" (change)="onFileSelected($event)" />
    </div>
  `,
  styles: [`
    .resume-upload {
      margin-bottom: 1rem;
    }
  `]
})
export class ResumeUploadComponent {
  constructor(private parser: ResumeParserService) {}

  @Output() resumeParsed = new EventEmitter<SkillsModel>();

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const text = String(reader.result);
        const result = this.parser.parse(text);
        this.resumeParsed.emit(result);
      };
      reader.readAsText(file);
    }
  }
}
