import { Component } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-yoga-home',
  templateUrl: './yoga-home.component.html',
  styleUrl: './yoga-home.component.scss'
})
export class YogaHomeComponent {
  ngOnInit(): void {
    AOS.init();
  }
  classes = [
    { title: 'Private & Group Lessons', time: '10:00am - 02:00pm', image: 'assets/images/1.PNG' },
    { title: 'YogaFit For Beginners', time: '10:00am - 02:00pm', image: 'assets/images/2.PNG' },
    { title: 'YogaFit For Pregnant', time: '03:00pm - 05:00pm', image: 'assets/images/3.PNG' },
    { title: 'YogaFit Barre', time: '03:00pm - 05:00pm', image: 'assets/images/2.PNG' },
    { title: 'YogaFit Core', time: '10:00am - 02:00pm', image: 'assets/images/1.PNG' },
    { title: 'YogaFit Restore', time: '03:00pm - 05:00pm', image: 'assets/images/3.PNG' },
  ];

  blogs = [
    {
      title: 'Lorem ipsum dolor',
      category: 'Body Fitness',
      date: '01 Jan 2045',
      views: 5,
      image: 'assets/images/1.PNG',
      description: 'Lorem ipsum dolor sit amet elit. Neca pretium mi...'
    },
    {
      title: 'Lorem ipsum dolor',
      category: 'Body Fitness',
      date: '01 Jan 2045',
      views: 5,
      image: 'assets/images/1.PNG',
      description: 'Lorem ipsum dolor sit amet elit. Neca pretium mi...'
    },
    {
      title: 'Lorem ipsum dolor',
      category: 'Body Fitness',
      date: '01 Jan 2045',
      views: 5,
      image: 'assets/images/1.PNG',
      description: 'Lorem ipsum dolor sit amet elit. Neca pretium mi...'
    },
  ];
  

  team = [
    {
      name: 'Lloyd Wilson',
      role: 'CEO, FOUNDER',
      image: 'assets/images/1.PNG',
      title: 'About Us'
    },
    {
      name: 'Rachel Parker',
      role: 'BUSINESS LAWYER',
      image: 'assets/images/1.PNG',
      title: 'About Us'
    },
    {
      name: 'Ian Smith',
      role: 'INSURANCE LAWYER',
      image: 'assets/images/1.PNG',
      title: 'About Us'
    },
    {
      name: 'Alicia Henderson',
      role: 'CRIMINAL LAW',
      image: 'assets/images/1.PNG',
      title: 'About Us'
    },
  ];
  

}
