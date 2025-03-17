import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { MovieDetailsModalComponent } from './movie-details-modal/movie-details-modal.component';

@Component({
  selector: 'app-movies-list',
  imports: [CommonModule, MovieDetailsModalComponent],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.scss'
})
export class MoviesListComponent implements OnInit {
  movies: any[] = [];
  allMovies: any[] = [];
  movieBatchSize = 10;
  selectedMovie: any = null;

  ngOnInit(): void {
    this.allMovies = this.getDummyMovies(50); // Generate 50 movies
    this.loadMoreMovies();
  }

  @HostListener("window:scroll", [])
  onScroll(): void {
    console.log("Scrolling..."); // Debugging
    if (this.isBottomReached()) {
      console.log("Bottom reached! Loading more movies...");
      this.loadMoreMovies();
    }
  }
  
  isBottomReached(): boolean {
    const scrollPosition = window.innerHeight + window.scrollY;
    return scrollPosition >= document.documentElement.scrollHeight - 50;
  }

  loadMoreMovies(): void {
    const nextMovies = this.allMovies.splice(0, this.movieBatchSize);
    this.movies = [...this.movies, ...nextMovies];
  }

  getDummyMovies(count: number): any[] {
    return Array.from({ length: count }, (_, i) => ({
      title: `Movie ${i + 1}`,
      duration: Math.floor(Math.random() * 60) + 60, // Random duration between 60 and 120 minutes
      rating: ['G', 'PG', 'PG-13', 'R', 'NC-17'][Math.floor(Math.random() * 5)],
      language: ['English', 'Spanish', 'French', 'German', 'Japanese'][Math.floor(Math.random() * 5)],
      genre: ['Animated', 'Action', 'Comedy', 'Drama', 'Horror'][Math.floor(Math.random() * 5)],
      description: `This is a brief description for Movie ${i + 1}. It is an exciting film with a great storyline.`,
      posterUrl: `https://placehold.co/300x440?text=Movie+${i + 1}`,
      advancedBooking: Math.random() > 0.5,
      comingSoon: Math.random() > 0.5
    }));
  }  

  openModal(movie: any) {
    this.selectedMovie = movie;
  }

  closeModal() {
    this.selectedMovie = null;
  }
}
