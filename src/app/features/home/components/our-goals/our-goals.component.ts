import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-our-goals',
  imports: [CommonModule],
  templateUrl: './our-goals.component.html',
  styleUrl: './our-goals.component.scss',
})
export class OurGoalsComponent {
  workData = [
    {
      icon: 'uil uil-airplay',
      title: 'Create Account',
      desc: 'The phrasal sequence of the is now so that many campaign and benefit',
      shadow: false,
    },
    {
      icon: 'uil uil-shutter',
      title: 'Complete Your Profile',
      desc: 'The phrasal sequence of the is now so that many campaign and benefit',
      shadow: true,
    },
    {
      icon: 'uil uil-camera-plus',
      title: 'Apply Job or Hire',
      desc: 'The phrasal sequence of the is now so that many campaign and benefit',
      shadow: false,
    },
  ];
}
