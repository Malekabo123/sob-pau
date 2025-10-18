import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-video',
  imports: [CommonModule],
  templateUrl: './home-video.component.html',
  styleUrl: './home-video.component.scss',
})
export class HomeVideoComponent {
  isOpen: any = false;

  togggleModal(e: any) {
    e.preventDefault();
    this.isOpen = !this.isOpen;
  }
}
