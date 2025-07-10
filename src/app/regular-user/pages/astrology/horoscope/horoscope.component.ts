import { Component } from '@angular/core';

@Component({
  selector: 'app-horoscope',
  templateUrl: './horoscope.component.html',
  styleUrl: './horoscope.component.scss'
})
export class HoroscopeComponent {
  horoscopeTypes = ['Today', 'Weekly', 'Monthly', 'Yearly'];
  selectedType = 'Today';

  zodiacSigns = [
    { name: 'Aries', icon: 'assets/images/user1.jpg', image: 'assets/images/1.PNG', description: 'Aries is a fire sign known for passion, energy, and enthusiasm.' },
    { name: 'B', icon: 'assets/images/user2.jpg', image: 'assets/images/1.PNG', description: 'Aries is a fire sign known for passion, energy, and enthusiasm.' },
    { name: 'C', icon: 'assets/images/user3.jpg', image: 'assets/images/1.PNG', description: 'Aries is a fire sign known for passion, energy, and enthusiasm.' },
    { name: 'D', icon: 'assets/images/user1.jpg', image: 'assets/images/1.PNG', description: 'Aries is a fire sign known for passion, energy, and enthusiasm.' },
    { name: 'E', icon: 'assets/images/user2.jpg', image: 'assets/images/1.PNG', description: 'Aries is a fire sign known for passion, energy, and enthusiasm.' },
    { name: 'F', icon: 'assets/images/user3.jpg', image: 'assets/images/1.PNG', description: 'Aries is a fire sign known for passion, energy, and enthusiasm.' },
    { name: 'G', icon: 'assets/images/user3.jpg', image: 'assets/images/1.PNG', description: 'Aries is a fire sign known for passion, energy, and enthusiasm.' },
    { name: 'H', icon: 'assets/images/user1.jpg', image: 'assets/images/1.PNG', description: 'Aries is a fire sign known for passion, energy, and enthusiasm.' },
    { name: 'I', icon: 'assets/images/user3.jpg', image: 'assets/images/1.PNG', description: 'Aries is a fire sign known for passion, energy, and enthusiasm.' },
    { name: 'J', icon: 'assets/images/user1.jpg', image: 'assets/images/1.PNG', description: 'Aries is a fire sign known for passion, energy, and enthusiasm.' },
    { name: 'K', icon: 'assets/images/user2.jpg', image: 'assets/images/1.PNG', description: 'Aries is a fire sign known for passion, energy, and enthusiasm.' },
    { name: 'L', icon: 'assets/images/user1.jpg', image: 'assets/images/1.PNG', description: 'Aries is a fire sign known for passion, energy, and enthusiasm.' },

  ];

  selectedSign = this.zodiacSigns[0];

  selectSign(sign: any) {
    this.selectedSign = sign;
  }

  selectType(type: string) {
    this.selectedType = type;
  }

  getHoroscopeDescription(): string {
    return `This is a sample ${this.selectedType.toLowerCase()} horoscope for ${this.selectedSign.name}. It will be replaced with actual data.`;
  }
}
