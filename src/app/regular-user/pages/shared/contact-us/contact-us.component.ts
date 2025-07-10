import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  contactInfo = [
    {
      icon: 'bi-telephone-fill',
      title: 'Call to ask any question',
      content: '+012 345 6789'
    },
    {
      icon: 'bi-envelope-fill',
      title: 'Email to get free quote',
      content: 'info@example.com'
    },
    {
      icon: 'bi-geo-alt-fill',
      title: 'Visit our office',
      content: '123 Street, NY, USA'
    }
  ];
}
