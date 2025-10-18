import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-clubs',
  imports: [CommonModule],
  templateUrl: './home-clubs.component.html',
  styleUrl: './home-clubs.component.scss',
})
export class HomeClubsComponent {
  servicesData = [
    {
      icon: 'uil uil-phone',
      title: '24/7 Support',
      desc: 'Many desktop publishing now use and a search for job.',
    },
    {
      icon: 'uil uil-atom',
      title: 'Tech & Startup Jobs',
      desc: 'Many desktop publishing now use and a search for job.',
    },
    {
      icon: 'uil uil-user-arrows',
      title: 'Quick & Easy',
      desc: 'Many desktop publishing now use and a search for job.',
    },
    {
      icon: 'uil uil-hourglass',
      title: 'Save Time',
      desc: 'Many desktop publishing now use and a search for job.',
    },
  ];
}
