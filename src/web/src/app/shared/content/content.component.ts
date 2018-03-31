import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  @Input() label: string;
  @Input() value: string | string[];
  @Input() asBullets: boolean;
  @Input() asParagraphs: boolean;
}