import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  
  //Home
  { path: 'home', component: HomeComponent },

  { path: '**', redirectTo: '/home' } 
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled', // Scrolls to top on route change
  anchorScrolling: 'enabled', // Enables anchor scrolling if needed
};

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

