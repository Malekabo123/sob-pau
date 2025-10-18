import { Component } from '@angular/core';
import { HeroComponent } from '../components/hero/hero.component';
import { HomeEventsComponent } from '../components/home-events/home-events.component';
import { HomeClubsComponent } from '../components/home-clubs/home-clubs.component';
import { HomeSeminarsComponent } from '../components/home-seminars/home-seminars.component';
import { HomeVideoComponent } from '../components/home-video/home-video.component';
import { OurGoalsComponent } from '../components/our-goals/our-goals.component';
import { HomeFaqComponent } from '../components/home-faq/home-faq.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    HomeEventsComponent,
    HomeClubsComponent,
    HomeSeminarsComponent,
    HomeVideoComponent,
    OurGoalsComponent,
    HomeFaqComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
