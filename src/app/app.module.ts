import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HeroImageComponent } from './home/hero-image/hero-image.component';
import { ContentComponent } from './home/content/content.component';
import { FooterComponent } from './footer/footer.component';
import { ScrollLineComponent } from './scroll-line/scroll-line.component';
import { CommonModule } from '@angular/common';
import { ParallaxMousemoveDirective } from './parallax-mousemove.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroImageComponent,
    ContentComponent,
    FooterComponent,
    ScrollLineComponent,
    ParallaxMousemoveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
