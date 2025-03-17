import { Component, HostListener, OnInit } from '@angular/core';
import { FeaturedMoviesComponent } from '../featured-movies/featured-movies.component';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from "../movies-list/movies-list.component";

@Component({
  selector: 'app-home',
  imports: [CommonModule, FeaturedMoviesComponent, MoviesListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  isMobile: boolean = false;
  movies: any[] = [];
  allMovies: any[] = [];
  movieBatchSize = 10;

  ngOnInit(): void {
    this.isMobile = window.innerWidth <= 768;

    window.addEventListener('resize', () => {
        this.isMobile = window.innerWidth <= 768;
    });
  }
}
