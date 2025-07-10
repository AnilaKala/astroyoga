import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.scss'
})
export class BlogDetailComponent {
  blog: any;
  relatedBlogs: any[] = [];
  categories = [
    { name: 'Product', count: 4 },
    { name: 'Planetary Movement', count: 3 },
    { name: 'Remedies', count: 3 },
    { name: 'Celebrity', count: 3 }
  ];
  
  tags = ['Travel', 'Adventure', 'Food', 'Lifestyle', 'Business', 'Freelancing'];

  blogs = [
    {
      id:1,
      title: 'Essential Gemstones For Your Zodiac Sign',
      description: 'Celestial Crystals that empower your sign.',
      content: 'Full detailed content of this blog post goes here. It may include more explanation, tips, benefits, and how the gemstones are chosen per zodiac sign, historical relevance, etc.',
      image: 'assets/images/1.PNG',
      author: 'Team Astroyogi',
      date: 'Tue, Jun 17, 2025',
      category: 'Product'
    },
    {
      id:2,
      title: 'Essential Gemstones For Your Zodiac Sign',
      description: 'Celestial Crystals that empower your sign.',
      content: 'Full detailed content of this blog post goes here. It may include more explanation, tips, benefits, and how the gemstones are chosen per zodiac sign, historical relevance, etc.',
      image: 'assets/images/1.PNG',
      author: 'Team Astroyogi',
      date: 'Tue, Jun 17, 2025',
      category: 'Product'
    },
    {
      id:3,
      title: 'Essential Gemstones For Your Zodiac Sign',
      description: 'Celestial Crystals that empower your sign.',
      content: 'Full detailed content of this blog post goes here. It may include more explanation, tips, benefits, and how the gemstones are chosen per zodiac sign, historical relevance, etc.',
      image: 'assets/images/1.PNG',
      author: 'Team Astroyogi',
      date: 'Tue, Jun 17, 2025',
      category: 'Product'
    },
    {
      id:4,
      title: 'Essential Gemstones For Your Zodiac Sign',
      description: 'Celestial Crystals that empower your sign.',
      content: 'Full detailed content of this blog post goes here. It may include more explanation, tips, benefits, and how the gemstones are chosen per zodiac sign, historical relevance, etc.',
      image: 'assets/images/1.PNG',
      author: 'Team Astroyogi',
      date: 'Tue, Jun 17, 2025',
      category: 'Product'
    },
    {
      id:5,
      title: 'Venus Transit Effects',
      description: 'How Venus transit impacts your zodiac.',
      content: 'Full detailed content of this blog post goes here. It may include more explanation, tips, benefits, and how the gemstones are chosen per zodiac sign, historical relevance, etc.',
      image: 'assets/images/2.PNG',
      author: 'Team Astroyogi',
      date: 'Mon, Mar 11, 2025',
      category: 'Planetary Movement'
    },
    {
      id:6,
      title: 'Venus Transit Effects',
      description: 'How Venus transit impacts your zodiac.',
      content: 'Full detailed content of this blog post goes here. It may include more explanation, tips, benefits, and how the gemstones are chosen per zodiac sign, historical relevance, etc.',
      image: 'assets/images/2.PNG',
      author: 'Team Astroyogi',
      date: 'Mon, Mar 11, 2025',
      category: 'Planetary Movement'
    },
    {
      id:7,
      title: 'Venus Transit Effects',
      description: 'How Venus transit impacts your zodiac.',
      content: 'Full detailed content of this blog post goes here. It may include more explanation, tips, benefits, and how the gemstones are chosen per zodiac sign, historical relevance, etc.',
      image: 'assets/images/2.PNG',
      author: 'Team Astroyogi',
      date: 'Mon, Mar 11, 2025',
      category: 'Planetary Movement'
    },
    
    {
      id:8,
      title: 'Benefits of Tulsi Mala in Daily Life',
      description: 'Spiritual & health benefits of wearing Tulsi Mala.',
      content: 'Full detailed content of this blog post goes here. It may include more explanation, tips, benefits, and how the gemstones are chosen per zodiac sign, historical relevance, etc.',
      image: 'assets/images/3.PNG',
      author: 'Team Astroyogi',
      date: 'Fri, Feb 28, 2025',
      category: 'Remedies'
    },
    {
      id:9,
      title: 'Benefits of Tulsi Mala in Daily Life',
      description: 'Spiritual & health benefits of wearing Tulsi Mala.',
      content: 'Full detailed content of this blog post goes here. It may include more explanation, tips, benefits, and how the gemstones are chosen per zodiac sign, historical relevance, etc.',
      image: 'assets/images/3.PNG',
      author: 'Team Astroyogi',
      date: 'Fri, Feb 28, 2025',
      category: 'Remedies'
    },
    {
      id:10,
      title: 'Benefits of Tulsi Mala in Daily Life',
      description: 'Spiritual & health benefits of wearing Tulsi Mala.',
      content: 'Full detailed content of this blog post goes here. It may include more explanation, tips, benefits, and how the gemstones are chosen per zodiac sign, historical relevance, etc.',
      image: 'assets/images/3.PNG',
      author: 'Team Astroyogi',
      date: 'Fri, Feb 28, 2025',
      category: 'Remedies'
    },
    {
      id:11,
      title: 'Celebrity Horoscope: Shah Rukh Khan',
      description: 'Insights into the King of Bollywood’s birth chart.',
      content: 'Full detailed content of this blog post goes here. It may include more explanation, tips, benefits, and how the gemstones are chosen per zodiac sign, historical relevance, etc.',
      image: 'assets/images/1.PNG',
      author: 'Team Astroyogi',
      date: 'Sat, Jan 25, 2025',
      category: 'Celebrity'
    },
    {
      id:12,
      title: 'Celebrity Horoscope: Shah Rukh Khan',
      description: 'Insights into the King of Bollywood’s birth chart.',
      content: 'Full detailed content of this blog post goes here. It may include more explanation, tips, benefits, and how the gemstones are chosen per zodiac sign, historical relevance, etc.',
      image: 'assets/images/1.PNG',
      author: 'Team Astroyogi',
      date: 'Sat, Jan 25, 2025',
      category: 'Celebrity'
    },
    {
      id:13,
      title: 'Celebrity Horoscope: Shah Rukh Khan',
      description: 'Insights into the King of Bollywood’s birth chart.',
      content: 'Full detailed content of this blog post goes here. It may include more explanation, tips, benefits, and how the gemstones are chosen per zodiac sign, historical relevance, etc.',
      image: 'assets/images/1.PNG',
      author: 'Team Astroyogi',
      date: 'Sat, Jan 25, 2025',
      category: 'Celebrity'
    }
    // Add more blogs here...
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const blogId = Number(this.route.snapshot.paramMap.get('id'));
    this.blog = this.blogs.find(b => b.id === blogId);

    if (!this.blog) {
      // If blog not found, redirect to blog list
      this.router.navigate(['/astrology/blogs']);
      return;
    }

    // Filter related blogs from the same category
    this.relatedBlogs = this.blogs.filter(
      b => b.category === this.blog.category && b.id !== this.blog.id
    );
  }

  backToBlogList(): void {
    this.router.navigate(['/astrology/blogs']);
  }
}
