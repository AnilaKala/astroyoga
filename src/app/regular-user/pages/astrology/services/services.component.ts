import { Component,AfterViewInit } from '@angular/core';
declare var bootstrap: any;

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class AstrologyServicesComponent implements AfterViewInit {


  services = [
    {
      title: 'Nesciunt Mete',
      description: 'Provident nihil minus qui consequatur non omnis maiores.',
      image: 'assets/images/1.PNG',
      icon: 'bi-activity'
    },
    {
      title: 'Eosle Commodi',
      description: 'Itaque earum rerum hic tenetur a sapiente delectus.',
      image: 'assets/images/2.PNG',
      icon: 'bi-broadcast'
    },
    {
      title: 'Ledo Market',
      description: 'Ut aut reiciendis voluptatibus maiores alias consequatur.',
      image: 'assets/images/3.PNG',
      icon: 'bi-chat-dots'
    },
    {
      title: 'Asperiores Commodit',
      description: 'Non et temporibus minus omnis sed dolor esse consequatur.',
      image: 'assets/images/3.PNG',
      icon: 'bi-box'
    },
    {
      title: 'Velit Doloremque',
      description: 'Cupiditate et suscipit esse accusamus enim.',
      image: 'assets/images/1.PNG',
      icon: 'bi-bar-chart'
    },
    {
      title: 'Dolori Architecto',
      description: 'Hic molestiae ab quibusdam eveniet reiciendis.',
      image: 'assets/images/2.PNG',
      icon: 'bi-briefcase'
    }
  ];

  testimonials = [
    {
      image: 'assets/images/user1.PNG',
      name: 'Saul Goodman',
      feedback: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.'
    },
    // Add more testimonials as needed
  ];

  
  ngAfterViewInit(): void {
    const el = document.getElementById('testimonialCarousel');
    if (el) {
      new bootstrap.Carousel(el, {
        interval: 3000,
        ride: 'carousel'
      });
    }
  }
}
