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

  menuItems: { label: string; path: string,exact:boolean }[] = [];

  ngOnInit(): void {
    if (this.currentPage === 'astrology') {
      this.menuItems = [
        { label: 'Home', path: '/astrology/dashboard', exact: true },
        { label: 'Horoscope', path: '/astrology/horoscope', exact: true },
        { label: 'Blogs', path: '/astrology/blogs' , exact: false},
        { label: 'Services', path: '/astrology/services', exact: true },
        // { label: 'Courses', path: '/astrology/courses', exact: true },
        { label: 'Contact Us', path: '/astrology/contact-us' , exact: true},
        { label: 'About Us', path: '/astrology/about-us', exact: true },
      ];
    } else {
      this.menuItems = [
        { label: 'Home', path: '/yoga/dashboard', exact: true },
        { label: 'Daily Yoga', path: '/yoga/daily-yoga', exact: true },
        { label: 'Courses', path: '/yoga/courses', exact: true },
        { label: 'Services', path: '/yoga/services', exact: true },
        { label: 'Contact Us', path: '/yoga/contact-us', exact: true },
        { label: 'About Us', path: '/yoga/about-us' , exact: true},
      ];
    }
  }
}
