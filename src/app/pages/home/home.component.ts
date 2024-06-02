import { Component, OnInit,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { SliderComponent } from '../../components/slider/slider.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,HttpClientModule,RouterLink,SliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent implements OnInit {
  movies:any=[];
  showDetails: boolean[];
 
  actionMovieResult: any[] = [];

  constructor(private Api:MoviesService,private route:Router)
  {
    this.showDetails = new Array(this.movies.length).fill(false);
  }
  ngOnInit(): void {
    
    this.getBanner();
    this.actionMovie()
  }
  getBanner()
  {
    this.Api.trendingMovieApiData().subscribe((res)=>this.movies=res.results);
    console.log("movies are",this.movies);
  }


  getMovieDetails(id:Number)
  {
     this.route.navigate(["movie/"+id])  
  }
  truncateOverview(overview: string): string {
    const maxLength = 100; // Maximum length of overview text
    if (overview.length > maxLength) {
      return overview.substring(0, maxLength) + '...'; // Truncate overview text if it exceeds maxLength
    }
    if(overview.length==0)
      {
        return "No desc"
      }
    return overview; // Return the original overview if its length is within maxLength
  }

  actionMovie() {
    this.Api.fetchActionMovies().subscribe((result) => {
      this.actionMovieResult = result.results;
    });
  }

}
