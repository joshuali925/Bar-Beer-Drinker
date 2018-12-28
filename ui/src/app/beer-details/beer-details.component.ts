import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BarsService, Bar } from '../bars.service';
import { HttpResponse } from '@angular/common/http';
declare const Highcharts: any;

@Component({
    selector: 'app-beer-details',
    templateUrl: './beer-details.component.html',
    styleUrls: ['./beer-details.component.css']
})
export class BeerDetailsComponent implements OnInit {
    beerName: string;
    
    constructor(
        private barService: BarsService,
        private route: ActivatedRoute
    ) { 
        route.paramMap.subscribe((paramMap) => {
            this.beerName = paramMap.get('beer');
        });
        this.barService.getPopularBarsForBeer(this.beerName).subscribe(
            data => {
                const bars = [];
                const total_quantity = [];
                data.forEach(bar => {
                    bars.push(bar.bar_name);
                    total_quantity.push(bar.total_quantity);
                });
                this.renderGraph('bargraph', bars, total_quantity, 'Bars where the item sells the most', 'Bar', 'Total quantity')
            }
        );
        this.barService.getBiggestConsumers(this.beerName).subscribe(
            data => {
                const drinkers = [];
                const total_quantity = [];
                data.forEach(drinker => {
                    drinkers.push(drinker.drinker_name);
                    total_quantity.push(drinker.total_quantity);
                });
                this.renderGraph('drinkergraph', drinkers, total_quantity, 'Biggest consumers of this item', 'Drinker', 'Total quantity')
            }
        );
        this.barService.getQuantityVsHour(this.beerName).subscribe(
            data => {
                const hour = [];
                const total_quantity = [];
                data.forEach(x => {
                    hour.push(x.hour);
                    total_quantity.push(x.total_quantity);
                });
                this.renderGraph('quantityvshourgraph', hour, total_quantity, 'Total quantity on different periods of a day', 'Hour', 'Total quantity')
            }
        );
        this.barService.getQuantityVsDayOfWeek(this.beerName).subscribe(
            data => {
                const dayOfWeek = [];
                const total_quantity = [];
                data.forEach(x => {
                    dayOfWeek.push(x.day_of_week);
                    total_quantity.push(x.total_quantity);
                });
                this.renderGraph('quantityvsdayofweekgraph', dayOfWeek, total_quantity, 'Total quantity on different days of a week', 'Day of Week', 'Total quantity')
            }
        );
        this.barService.getQuantityVsMonth(this.beerName).subscribe(
            data => {
                const month = [];
                const total_quantity = [];
                data.forEach(x => {
                    month.push(x.month);
                    total_quantity.push(x.total_quantity);
                });
                this.renderGraph('quantityvsmonthgraph', month, total_quantity, 'Total quantity on different months in a year', 'Month', 'Total quantity')
            }
        );
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
