import { Component, OnInit } from '@angular/core';
import { BarsService } from '../bars.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-querypage',
    templateUrl: './querypage.component.html',
    styleUrls: ['./querypage.component.css']
})
export class QuerypageComponent implements OnInit {

    query: string;
    message = '';
    keys: any[];
    vals: any[][];
    // vals: string;

    constructor(
        private barService: BarsService
    ) { }

    ngOnInit() {
    }

    execute() {
        if (!this.query || this.query.trim().length == 0) {
            this.message = "Please enter a query."
            this.keys = null;
            this.vals = null;
            return;
        }
        this.barService.anyQuery(this.query).subscribe(
            data => {
                if (!data[0])
                    this.message = "Error: " + data[1];
                else {
                    if (data[1])
                        this.message = "Returned " + data[2];
                    else
                        this.message = "Matched " + data[2];
                    if (data[2] > 1)
                        this.message += " rows.";
                    else
                        this.message += " row.";
                }
                this.keys = data[3];
                this.vals = data[4];
            }
        )
    }
}
