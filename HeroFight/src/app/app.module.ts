import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeroSelectComponent } from './hero-select/hero-select.component';
import { FightAreaComponent } from './fight-area/fight-area.component';
import { VillainSelectComponent } from './villain-select/villain-select.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeroSelectComponent,
    FightAreaComponent,
    VillainSelectComponent
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    MatSliderModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
