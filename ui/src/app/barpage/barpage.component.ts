import { Component, OnInit } from '@angular/core';
import { BarsService, Bar } from '../bars.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        FormsModule
    ]
})

@Component({
    selector: 'app-barpage',
    templateUrl: './barpage.component.html',
    styleUrls: ['./barpage.component.css']
})
export class BarpageComponent implements OnInit {
    bars: Bar[];
    bar_name = '';
    constructor(
        public barService: BarsService
    ) { }
    ngOnInit() {
        this.getBars();
    }
    getBars() {
        this.barService.getBars().subscribe(
            data => {
                this.bars = data;
            },
            error => {
                alert('Could not retrieve a list of bars');
            }
        );
    }
    findBars() {
        this.barService.findBars(this.bar_name).subscribe(
            data => {
                this.bars = data;
            },
            error => {
                alert('Could not retrieve a list of bars');
            }
        )
    }
}

