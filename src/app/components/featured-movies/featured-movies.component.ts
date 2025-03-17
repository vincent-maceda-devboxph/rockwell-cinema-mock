import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, ViewChild } from '@angular/core';
import { CarouselComponent, CarouselModule, OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-featured-movies',
  imports: [CommonModule, CarouselModule],
  templateUrl: './featured-movies.component.html',
  styleUrl: './featured-movies.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FeaturedMoviesComponent implements OnInit {
  @ViewChild('featuredMovies', { static: false }) carousel!: CarouselComponent;
  selectedMovie: string = '';

  slides = [
    { img: 'https://placehold.co/600x400', title: 'WICKED', genres: ['Genre 1', 'Genre 2'] },
    { img: 'https://placehold.co/600x400', title: 'Movie 2', genres: ['Genre A', 'Genre B'] },
    { img: 'https://placehold.co/600x400', title: 'Movie 3', genres: ['Genre X', 'Genre Y'] },
    { img: 'https://placehold.co/600x400', title: 'Movie 4', genres: ['Genre M', 'Genre N'] },
  ];

  carouselOptions: OwlOptions = {
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    navText: ['<', '>'],
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1000: { items: 1 }
    }
  };

  movies = [
    { 
      id: 1, 
      title: 'Wicked', 
      image: 'https://popwire.net/wp-content/uploads/2024/12/universal-wicked-2024-digital-4k-uhd-blu-ray-dvd-release-details-3.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      genre: ["Genre 1", "Genre 2"]
    },
    { id: 2, 
      title: 'Transformers One', 
      image: 'https://m.media-amazon.com/images/M/MV5BODA0NmU1MzAtMzM1YS00ZTcwLTkwZGMtNTg3YWJlNjAxYTMwXkEyXkFqcGc@._V1_.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      genre: ["Genre 1", "Genre 2", "Genre 3"]
    },
    { id: 3, 
      title: 'Movie 3', 
      image: 'https://placehold.co/600x400',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      genre: ["Genre 1", "Genre 2"]
    },
    { id: 4, 
      title: 'Movie 4', 
      image: 'https://placehold.co/600x400',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      genre: ["Genre 1", "Genre 2"]
    }
  ];

  ngOnInit(): void {
    this.selectedMovie = "Wicked";
  }

  changeSlide(index: string) {
    if (this.carousel) {
      this.selectedMovie = index;
      this.carousel.to(index);
    }
  }

  changed(data: SlidesOutputData){
    if(data.slides){
      this.selectedMovie = data.slides[0].id;
    }
  }
}
