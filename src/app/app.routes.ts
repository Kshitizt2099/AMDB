import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { MovieDeatilsComponent } from './pages/movie-deatils/movie-deatils.component';

export const routes: Routes = [

    {
        path:"",
        component:HomeComponent
    },
    {
        path:"search",
        component:SearchComponent

    },
    {
      path:"movie/:id",
      component:MovieDeatilsComponent
    }
];
