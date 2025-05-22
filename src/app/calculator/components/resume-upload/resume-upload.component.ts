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
      <input type="file" accept=".txt,.doc,.docx,.pdf" (change)="onFileSelected($event)" />
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
      const ext = file.name.split('.').pop()?.toLowerCase();
      const reader = new FileReader();

      reader.onload = () => {
        let text = '';
        if (ext === 'txt') {
          text = String(reader.result);
        } else {
          const buffer = new Uint8Array(reader.result as ArrayBuffer);
          let extracted = '';
          for (const b of buffer) {
            if (b === 10 || b === 13 || (b >= 32 && b <= 126)) {
              extracted += String.fromCharCode(b);
            } else {
              extracted += ' ';
            }
          }
          text = extracted.replace(/\s+/g, ' ');
        }
        const result = this.parser.parse(text);
        this.resumeParsed.emit(result);
      };

      if (ext === 'txt') {
        reader.readAsText(file);
      } else {
        reader.readAsArrayBuffer(file);
      }
    }
  }
}
