import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-movies-schedules',
  imports: [CommonModule],
  templateUrl: './movies-schedules.component.html',
  styleUrl: './movies-schedules.component.scss'
})
export class MoviesSchedulesComponent {
  movie = {
    title: 'WICKED',
    duration: 108,
    rating: 'PG',
    description: 'Family friendly, parental guidance is advised. In the Land of Oz, Glinda the Good joins the citizens of Munchkinland as they celebrate the death of the Wicked Witch of the West.',
    posterUrl: 'https://m.media-amazon.com/images/I/81GdeKm+M0L._AC_UF894,1000_QL80_.jpg',
    bannerUrl: 'https://popwire.net/wp-content/uploads/2024/12/universal-wicked-2024-digital-4k-uhd-blu-ray-dvd-release-details-3.jpg'
  };

  dates = [
    { day: 'JAN', num: '17' },
    { day: 'JAN', num: '18' },
    { day: 'JAN', num: '19' },
    { day: 'JAN', num: '20' },
    { day: 'JAN', num: '21' },
    { day: 'JAN', num: '22' },
    { day: 'JAN', num: '23' }
  ];

  cinemas = [
    { name: 'Power Plant Mall - C1 Standard', times: ['1:00 PM', '3:00 PM', '5:00 PM', '7:00 PM'] },
    { name: 'Power Plant Mall - VIP Cinema', times: ['5:00 PM', '7:00 PM'] },
    { name: 'Power Plant Mall - C4 Standard', times: ['11:30 AM', '12:45 PM', '2:30 PM', '4:45 PM', '7:00 PM', '9:00 PM', '11:00 PM'] },
    { name: 'Power Plant Mall - C5 Standard', times: ['11:30 AM', '12:45 PM', '2:30 PM', '4:45 PM', '7:00 PM', '9:00 PM', '11:00 PM'] }
  ];
}
