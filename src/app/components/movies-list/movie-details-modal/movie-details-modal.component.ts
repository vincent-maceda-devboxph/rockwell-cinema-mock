import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-movie-details-modal',
  imports: [],
  templateUrl: './movie-details-modal.component.html',
  styleUrl: './movie-details-modal.component.scss'
})
export class MovieDetailsModalComponent {
  @Input() movie: any;
  @Output() close = new EventEmitter<void>();

  onClose(): void {
    this.close.emit();
  }
}
