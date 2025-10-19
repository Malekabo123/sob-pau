import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() navLight: any;
  @Input() navClass: any;
  @Input() bgLight: any;
  @Input() navFull: any;

  scrolled: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 0;
  }

  ngAfterViewInit() {
    feather.replace();
  }

  currentUrl: string = '';
  subManu: string = '';

  ngOnInit(): void {
    this.currentUrl = window.location.pathname;
    window.scrollTo(0, 0);
  }

  openSubManu(item: string) {
    if (this.subManu === item) {
      this.subManu = '';
    } else {
      this.subManu = item;
    }
  }

  showToggleMenu: boolean = false;

  toggleMenu() {
    this.showToggleMenu = !this.showToggleMenu;
  }

  user: boolean = false;

  userDropdow(e: any) {
    e.preventDefault();
    this.user = !this.user;
  }
  closeOutSideClick(e: any) {
    this.user = false;
  }

  changeMode(e: any) {
    e.preventDefault();

    const htmlTag = document.documentElement;
    if (htmlTag.className.includes('dark')) {
      htmlTag.className = 'light';
    } else {
      htmlTag.className = 'dark';
    }
  }
}
