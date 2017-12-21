import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { WeathercardComponent } from './weathercard/weathercard.component';
import { SearchComponent } from './search/search.component';
import { WeathertableComponent } from './weathertable/weathertable.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    WeathercardComponent,
    SearchComponent,
    WeathertableComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCUW6lliv28qcry9cWN4j84CSCPnQ18QMA'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
