import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges  } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements OnChanges {
  //  movies:any[]=[
  //   {
  //     image: 'path/to/spiderman2.jpg',
  //     title: "Marvel's Spider Man 2",
  //     description: "Spider-Men, Peter Parker and Miles Morales, return for an exciting new adventure in the critically acclaimed Marvel’s Spider-Man franchise for PS5."
  //   },
  //   {
  //     image: 'path/to/godofwarragnarok.jpg',
  //     title: "God of War Ragnarök",
  //     description: "Fimbulwinter is well underway. Kratos and Atreus must journey to each of the Nine Realms in search of answers as Asgardian forces prepare for a prophesied battle that will end the world."
  //   },
  //   {
  //     image: 'path/to/lastofus.jpg',
  //     title: "The Last of Us Part I",
  //     description: "In a ravaged civilization, where infected and hardened survivors run rampant, Joel, a weary protagonist, is hired to smuggle 14-year-old Ellie out of a military quarantine zone."
  //   },
  //   {
  //     image: 'path/to/horizonforbiddenwest.jpg',
  //     title: "Horizon Forbidden West",
  //     description: "Explore distant lands, fight bigger and more awe-inspiring machines, and encounter astonishing new tribes as you return to the far-future, post-apocalyptic world of Horizon."
  //   },
  //   {
  //     image: 'path/to/granturismo7.jpg',
  //     title: "Gran Turismo 7",
  //     description: "Whether you're a competitive or casual racer, collector, tuner, livery designer or photographer – find your line with a staggering collection of game modes."
  //   }
  //  ]
  @Input() movies:any[]=[];
  activeGame: any;

  
  ngOnChanges(changes: SimpleChanges) {
    if (this.movies.length > 0) {
      this.activeGame = this.movies[0];
    }
  }

  prevSlide() {
    const currentIndex = this.movies.indexOf(this.activeGame);
    this.activeGame = this.movies[(currentIndex - 1 + this.movies.length) % this.movies.length];
  }

  nextSlide() {
    const currentIndex = this.movies.indexOf(this.activeGame);
    this.activeGame = this.movies[(currentIndex + 1) % this.movies.length];
  }
}
