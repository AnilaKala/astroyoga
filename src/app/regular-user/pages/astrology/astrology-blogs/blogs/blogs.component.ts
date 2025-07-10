import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent {
  searchText = '';
  viewAllMode = false;
  selectedViewCategory = '';
  categories = ['Product', 'Planetary Movement', 'Remedies', 'Celebrity'];

  blogs = [
    {
      id:1,
      title: 'Essential Gemstones For Your Zodiac Sign',
      description: 'Celestial Crystals that empower your sign.',
      image: 'assets/images/1.PNG',
      author: 'Team Astroyogi',
      date: 'Tue, Jun 17, 2025',
      category: 'Product'
    },
    {
      id:2,
      title: 'Essential Gemstones For Your Zodiac Sign',
      description: 'Celestial Crystals that empower your sign.',
      image: 'assets/images/1.PNG',
      author: 'Team Astroyogi',
      date: 'Tue, Jun 17, 2025',
      category: 'Product'
    },
    {
      id:3,
      title: 'Essential Gemstones For Your Zodiac Sign',
      description: 'Celestial Crystals that empower your sign.',
      image: 'assets/images/1.PNG',
      author: 'Team Astroyogi',
      date: 'Tue, Jun 17, 2025',
      category: 'Product'
    },
    {
      id:4,
      title: 'Essential Gemstones For Your Zodiac Sign',
      description: 'Celestial Crystals that empower your sign.',
      image: 'assets/images/1.PNG',
      author: 'Team Astroyogi',
      date: 'Tue, Jun 17, 2025',
      category: 'Product'
    },
    {
      id:5,
      title: 'Venus Transit Effects',
      description: 'How Venus transit impacts your zodiac.',
      image: 'assets/images/2.PNG',
      author: 'Team Astroyogi',
      date: 'Mon, Mar 11, 2025',
      category: 'Planetary Movement'
    },
    {
      id:6,
      title: 'Venus Transit Effects',
      description: 'How Venus transit impacts your zodiac.',
      image: 'assets/images/2.PNG',
      author: 'Team Astroyogi',
      date: 'Mon, Mar 11, 2025',
      category: 'Planetary Movement'
    },
    {
      id:7,
      title: 'Venus Transit Effects',
      description: 'How Venus transit impacts your zodiac.',
      image: 'assets/images/2.PNG',
      author: 'Team Astroyogi',
      date: 'Mon, Mar 11, 2025',
      category: 'Planetary Movement'
    },
    
    {
      id:8,
      title: 'Benefits of Tulsi Mala in Daily Life',
      description: 'Spiritual & health benefits of wearing Tulsi Mala.',
      image: 'assets/images/3.PNG',
      author: 'Team Astroyogi',
      date: 'Fri, Feb 28, 2025',
      category: 'Remedies'
    },
    {
      id:9,
      title: 'Benefits of Tulsi Mala in Daily Life',
      description: 'Spiritual & health benefits of wearing Tulsi Mala.',
      image: 'assets/images/3.PNG',
      author: 'Team Astroyogi',
      date: 'Fri, Feb 28, 2025',
      category: 'Remedies'
    },
    {
      id:10,
      title: 'Benefits of Tulsi Mala in Daily Life',
      description: 'Spiritual & health benefits of wearing Tulsi Mala.',
      image: 'assets/images/3.PNG',
      author: 'Team Astroyogi',
      date: 'Fri, Feb 28, 2025',
      category: 'Remedies'
    },
    {
      id:11,
      title: 'Celebrity Horoscope: Shah Rukh Khan',
      description: 'Insights into the King of Bollywood’s birth chart.',
      image: 'assets/images/1.PNG',
      author: 'Team Astroyogi',
      date: 'Sat, Jan 25, 2025',
      category: 'Celebrity'
    },
    {
      id:12,
      title: 'Celebrity Horoscope: Shah Rukh Khan',
      description: 'Insights into the King of Bollywood’s birth chart.',
      image: 'assets/images/1.PNG',
      author: 'Team Astroyogi',
      date: 'Sat, Jan 25, 2025',
      category: 'Celebrity'
    },
    {
      id:13,
      title: 'Celebrity Horoscope: Shah Rukh Khan',
      description: 'Insights into the King of Bollywood’s birth chart.',
      image: 'assets/images/1.PNG',
      author: 'Team Astroyogi',
      date: 'Sat, Jan 25, 2025',
      category: 'Celebrity'
    }
    // Add more blogs here...
  ];

  
  getBlogsByCategory(cat: string) {
    return this.blogs.filter(blog =>
      blog.category === cat &&
      blog.title.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  shouldShowViewAll(cat: string): boolean {
    return this.getBlogsByCategory(cat).length > 3 && !this.viewAllMode;
  }

  getLimitedBlogs(cat: string) {
    const blogs = this.getBlogsByCategory(cat);
    return blogs.length > 3 ? blogs.slice(0, 3) : blogs;
  }

  onViewAll(cat: string) {
    this.viewAllMode = true;
    this.selectedViewCategory = cat;
  }

  backToAll() {
    this.viewAllMode = false;
    this.selectedViewCategory = '';
  }
}
