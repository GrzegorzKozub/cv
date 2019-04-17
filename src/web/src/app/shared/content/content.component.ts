import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  @Input() value: string | string[];
  @Input() asBullets: boolean;
  @Input() asTags: boolean;
  @Input() asParagraphs: boolean;
}
