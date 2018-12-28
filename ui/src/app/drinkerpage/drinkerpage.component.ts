import { Component, OnInit } from '@angular/core';
import { BarsService, Drinker } from '../bars.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        FormsModule
    ]
})

@Component({
    selector: 'app-drinkerpage',
    templateUrl: './drinkerpage.component.html',
    styleUrls: ['./drinkerpage.component.css']
})
export class DrinkerpageComponent implements OnInit {
    drinkers: Drinker[];
    drinker_name = '';
    constructor(
        public barService: BarsService
    ) { }
    ngOnInit() {
        this.getDrinkers();
    }
    getDrinkers() {
        this.barService.getDrinkers().subscribe(
            data => {
                this.drinkers = data;
            },
            error => {
                alert('Could not retrieve a list of drinkers');
            }
        );
    }
    findDrinkers() {
        console.log(this.drinker_name)
        this.barService.findDrinkers(this.drinker_name).subscribe(
            data => {
                this.drinkers = data;
            },
            error => {
                alert('Could not retrieve a list of drinkers');
            }
        )
    }
}

