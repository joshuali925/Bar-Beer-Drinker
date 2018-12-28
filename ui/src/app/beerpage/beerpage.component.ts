import { Component, OnInit } from '@angular/core';
import { BarsService, Beer } from '../bars.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        FormsModule
    ]
})

@Component({
    selector: 'app-beerpage',
    templateUrl: './beerpage.component.html',
    styleUrls: ['./beerpage.component.css']
})
export class BeerpageComponent implements OnInit {
    beers: Beer[];
    beer_name = '';
    constructor(
        public barService: BarsService
    ) { }
    ngOnInit() {
        this.getBeers();
    }
    getBeers() {
        this.barService.getBeers().subscribe(
            data => {
                this.beers = data;
            },
            error => {
                alert('Could not retrieve a list of beers');
            }
        );
    }
    findBeers() {
        console.log(this.beer_name)
        this.barService.findBeers(this.beer_name).subscribe(
            data => {
                this.beers = data;
            },
            error => {
                alert('Could not retrieve a list of beers');
            }
        )
    }
}

