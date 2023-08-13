import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app2-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class App2Component {
  title = 'app2';
}
