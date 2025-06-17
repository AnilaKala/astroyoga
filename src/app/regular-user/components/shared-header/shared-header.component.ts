import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shared-header',
  templateUrl: './shared-header.component.html',
  styleUrls: ['./shared-header.component.scss'],
})
export class SharedHeaderComponent implements OnInit {
   @Input() currentPage: 'astrology' | 'yoga' = 'astrology';

  constructor(private router: Router) {}

  navigateToOtherSection(): void {
    const newPath = this.currentPage === 'astrology' ? '/yoga' : '/astrology';
    this.router.navigate([newPath]);
  }

  menuItems: { label: string; path: string }[] = [];

  ngOnInit(): void {
    if (this.currentPage === 'astrology') {
      this.menuItems = [
        { label: 'Home', path: '/astrology' },
        { label: 'Horoscope', path: '/astrology/horoscope/daily' },
        { label: 'Blogs', path: '/astrology/blogs' },
        { label: 'Services', path: '/astrology/services' },
        { label: 'Courses', path: '/astrology/courses' },
        { label: 'Contact Us', path: '/astrology/contact-us' },
        { label: 'About Us', path: '/astrology/about-us' },
      ];
    } else {
      this.menuItems = [
        { label: 'Home', path: '/yoga' },
        { label: 'Daily Yoga', path: '/yoga/daily-yoga' },
        { label: 'Courses', path: '/yoga/courses' },
        { label: 'Services', path: '/yoga/services' },
        { label: 'Contact Us', path: '/yoga/contact-us' },
        { label: 'About Us', path: '/yoga/about-us' },
      ];
    }
  }
}
