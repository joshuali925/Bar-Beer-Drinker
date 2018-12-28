import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { BarpageComponent } from './barpage/barpage.component';
import { BarDetailsComponent } from './bar-details/bar-details.component';
import { DrinkerpageComponent } from './drinkerpage/drinkerpage.component';
import { DrinkerDetailsComponent } from './drinker-details/drinker-details.component';
import { BeerpageComponent } from './beerpage/beerpage.component';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { QuerypageComponent } from './querypage/querypage.component';
// import { HashLocationStrategy, LocationStrategy } from '@angular/common';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'static', pathMatch: 'full', redirectTo: 'home' },
    { path: 'static/query', pathMatch: 'full', redirectTo: 'query' },
    { path: 'static/bars', pathMatch: 'full', redirectTo: 'bars' },
    { path: 'static/beers', pathMatch: 'full', redirectTo: 'beers' },
    { path: 'static/drinkers', pathMatch: 'full', redirectTo: 'drinkers' },
    { path: 'home', pathMatch: 'full', component: HomepageComponent },
    { path: 'bars', pathMatch: 'full', component: BarpageComponent },
    { path: 'bars/:bar', pathMatch: 'full', component: BarDetailsComponent },
    { path: 'drinkers', pathMatch: 'full', component: DrinkerpageComponent },
    { path: 'drinkers/:drinker', pathMatch: 'full', component: DrinkerDetailsComponent },
    { path: 'beers', pathMatch: 'full', component: BeerpageComponent },
    { path: 'beers/:beer', pathMatch: 'full', component: BeerDetailsComponent },
    { path: 'query', pathMatch: 'full', component: QuerypageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    // providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppRoutingModule { }
