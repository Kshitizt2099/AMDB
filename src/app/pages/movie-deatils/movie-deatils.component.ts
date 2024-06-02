import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-deatils',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-deatils.component.html',
  styleUrl: './movie-deatils.component.css'
})
export class MovieDeatilsComponent implements OnInit{
  getMovieDetailResult:any=''; 
  getMovieVideoResult:any;
  getMovieCastResult:any;
  constructor(private router:ActivatedRoute,private movieservice:MoviesService)
   {

   }

  ngOnInit(): void {
    
    // this.router.paramMap.subscribe(params => {
    //   // Access route parameters here
    //   const id = params.get('id'); // Assuming 'id' is the name of the route parameter
    //    this.fetchDetails(id);
    // });
     const id=this.router.snapshot.paramMap.get("id");
     this.fetchDetails(id);
     this.getMovieCast(id);
     this.getVideo(id)
    
  }

  fetchDetails(id:any)
  {
      this.movieservice.getMovieDetails(id).subscribe((res)=>this.getMovieDetailResult=res)
    
  }
  getVideo(id:any)
  {
    this.movieservice.getMovieVideo(id).subscribe((result)=>{
        console.log(result,'getMovieVideo#');
        result.results.forEach((element:any) => {
            if(element.type=="Trailer")
            {
              this.getMovieVideoResult = element.key;
            }
        });

    });
  }

  getMovieCast(id:any)
  {
    this.movieservice.getMovieCast(id).subscribe((result)=>{
      console.log(result,'movieCast#');
      this.getMovieCastResult = result.cast;
    });
  }

}
