import { Component } from '@angular/core';
import { headerStyles } from './header.styles';

@Component({
  selector: 'app-calculator-header',
  standalone: true,
  template: `
    <div class="header">
      <h1>Software Engineer Role Fit Calculator</h1>
      <h2>Veterans United Home Loans</h2>
    </div>
  `,
  styles: [headerStyles]
})
export class CalculatorHeaderComponent {} 