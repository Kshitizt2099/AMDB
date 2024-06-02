import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, HostListener,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'imdb';
  navcolor:any={};
  @HostListener("document:scroll")
  onScroll()
  {
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)
      {
        this.navcolor = {
          'background-color':'#000000'
        }
      }else
      {
          this.navcolor = {}
      }
   
  }
}
