import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Title,Meta } from '@angular/platform-browser';
import { MoviesService } from '../../services/movies.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  imports:[CommonModule,FormsModule],
  standalone:true
})
export class SearchComponent implements OnInit {
 value:string='';
 results:any=[];
 found:boolean=false
 showDetails: boolean[]=[];
 
 constructor(private movieservice:MoviesService )
 {

 }
 ngOnInit(): void {
   
 }
 getData(data:any)
 {
     this.movieservice.getSearchMovie(data).subscribe((res)=>{
      console.log(res.results,'searchmovie##');
      this.results=res.results
       this.found=true;
     }
      );
      this.value="";
 
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
} 