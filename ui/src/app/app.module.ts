import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TableModule, Table } from 'primeng/table';
import { BarDetailsComponent } from './bar-details/bar-details.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BarpageComponent } from './barpage/barpage.component';
import { DrinkerDetailsComponent } from './drinker-details/drinker-details.component';
import { DrinkerpageComponent } from './drinkerpage/drinkerpage.component';
import { BeerpageComponent } from './beerpage/beerpage.component';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { QuerypageComponent } from './querypage/querypage.component';

@NgModule({
    declarations: [
        AppComponent,
        BarDetailsComponent,
        HomepageComponent,
        BarpageComponent,
        DrinkerDetailsComponent,
        DrinkerpageComponent,
        BeerpageComponent,
        BeerDetailsComponent,
        QuerypageComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        TableModule
    ],
    providers: [HttpClient],
    bootstrap: [AppComponent]
})
export class AppModule { }
