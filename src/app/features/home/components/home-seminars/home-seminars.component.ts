import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-seminars',
  imports: [CommonModule, RouterLink],
  templateUrl: './home-seminars.component.html',
  styleUrl: './home-seminars.component.scss',
})
export class HomeSeminarsComponent {
  public blogData = [
    {
      id: 1,
      image: 'assets/images/blog/01.jpg',
      tag: 'Arts',
      date: '13th Sep 2023',
      title: '11 Tips to Help You Get New Clients Through Cold Calling',
      auther: 'Google',
    },
    {
      id: 2,
      image: 'assets/images/blog/02.jpg',
      tag: 'Illustration',
      date: '29th Nov 2023',
      title: 'DigitalOcean launches first Canadian data centre in Toronto',
      auther: 'Facebook',
    },
    {
      id: 3,
      image: 'assets/images/blog/03.jpg',
      tag: 'Music',
      date: '29th Dec 2023',
      title: 'Using Banner Stands To Increase Trade Show Traffic',
      auther: 'Linkedin',
    },
  ];
}
