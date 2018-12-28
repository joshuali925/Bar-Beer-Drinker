import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BarsService, Bar } from '../bars.service';
import { HttpResponse } from '@angular/common/http';
declare const Highcharts: any;

@Component({
    selector: 'app-bar-details',
    templateUrl: './bar-details.component.html',
    styleUrls: ['./bar-details.component.css']
})

export class BarDetailsComponent implements OnInit {
    barName: string;
    barDetails: Bar;

    constructor(
        private barService: BarsService,
        private route: ActivatedRoute
    ) {
        route.paramMap.subscribe((paramMap) => {
            this.barName = paramMap.get('bar');
        });
        this.barService.findBars(this.barName).subscribe(
            data => {
                this.barDetails = data[0];
            },
            (error: HttpResponse<any>) => {
                if (error.status === 404) {
                    alert('Bar not found');
                } else {
                    console.error(error.status + ' - ' + error.body);
                    alert('An error occurred on the server.');
                }
            }
        );
        this.barService.getLargestSquanders(this.barName).subscribe(
            data => {
                const drinkers = [];
                const totals = [];
                data.forEach(drinker => {
                    drinkers.push(drinker.drinker_name);
                    totals.push(drinker.total_amount);
                });
                this.renderGraph('squandergraph', drinkers, totals, 'Drinkers who are largest squanders', 'Drinker', 'Total')
            }
        );
        this.barService.getPopularBeers(this.barName).subscribe(
            data => {
                const beers = [];
                const total_quantity = [];
                data.forEach(beer => {
                    beers.push(beer.item_name);
                    total_quantity.push(beer.total_quantity);
                });
                this.renderGraph('beergraph', beers, total_quantity, 'Most popular beers', 'Beer', 'Total quantity')
            }
        );
        this.barService.getPopularManfs(this.barName).subscribe(
            data => {
                const manfs = [];
                const total_quantity = [];
                data.forEach(manf => {
                    manfs.push(manf.manufacture);
                    total_quantity.push(manf.total_quantity);
                });
                this.renderGraph('manfgraph', manfs, total_quantity, 'Manufactures who sell the most beers', 'Manufacture', 'Total')
            }
        );
        this.barService.getSalesVsHour(this.barName).subscribe(
            data => {
                const hour = [];
                const total = [];
                data.forEach(x => {
                    hour.push(x.hour);
                    total.push(x.total);
                });
                this.renderGraph('salesvshourgraph', hour, total, 'Sales on different periods of a day', 'Hour', 'Total')
            }
        )
        this.barService.getSalesVsDayOfWeek(this.barName).subscribe(
            data => {
                const dayOfWeek = [];
                const total = [];
                data.forEach(x => {
                    dayOfWeek.push(x.day_of_week);
                    total.push(x.total);
                });
                this.renderGraph('salesvsdayofweekgraph', dayOfWeek, total, 'Sales on different days of a week', 'Day of week', 'Total')
            }
        )
        this.barService.getSalesVsMonth(this.barName).subscribe(
            data => {
                const month = [];
                const total = [];
                data.forEach(x => {
                    month.push(x.month);
                    total.push(x.total);
                });
                this.renderGraph('salesvsmonthgraph', month, total, 'Sales on different months in a year', 'Month', 'Total')
            }
        )
    }

    ngOnInit() {
    }
    renderGraph(id: string, x: string[], y: number[], title: string, x_legend: string, y_legend: string) {
        Highcharts.chart(id, {
            chart: {
                type: 'column'
            },
            title: {
                text: title
            },
            xAxis: {
                categories: x,
                title: {
                    text: x_legend
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: y_legend
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                data: y
            }]
        });
    }
}
