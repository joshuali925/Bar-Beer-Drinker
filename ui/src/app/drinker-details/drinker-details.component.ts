import { Component, OnInit } from '@angular/core';
import { BarsService, Bill } from '../bars.service';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
declare const Highcharts: any;

@Component({
    selector: 'app-drinker-details',
    templateUrl: './drinker-details.component.html',
    styleUrls: ['./drinker-details.component.css']
})
export class DrinkerDetailsComponent implements OnInit {
    drinkerName: string;
    bills: Bill[];

    constructor(
        private barService: BarsService,
        private route: ActivatedRoute
    ) {
        route.paramMap.subscribe((paramMap) => {
            this.drinkerName = paramMap.get('drinker');
        });
        this.barService.getBills(this.drinkerName).subscribe(
            data => {
                this.bills = data;
            },
            (error: HttpResponse<any>) => {
                if (error.status === 404) {
                    alert('Drinker not found');
                } else {
                    console.error(error.status + ' - ' + error.body);
                    alert('An error occurred on the server.');
                }
            }
        );
        this.barService.getBeersOrderedMost(this.drinkerName).subscribe(
            data => {
                const item_names = [];
                const item_quantities = [];
                data.forEach(item => {
                    item_names.push(item.item_name);
                    item_quantities.push(item.total_quantity);
                });
                this.renderGraph('ordergraph', item_names, item_quantities, 'Items ordered the most', 'Items', 'Number of items')
            }
        );
        this.barService.getSpendingInBars(this.drinkerName).subscribe(
            data => {
                const bar_name = [];
                const total = [];
                data.forEach(x => {
                    bar_name.push(x.bar_name);
                    total.push(x.total);
                });
                this.renderGraph('spendinginbarsgraph', bar_name, total, 'Spending in different bars', 'Bar', 'Total spendings')
            }
        );
        this.barService.getSpendingVsHour(this.drinkerName).subscribe(
            data => {
                const hour = [];
                const total = [];
                data.forEach(x => {
                    hour.push(x.hour);
                    total.push(x.total);
                });
                this.renderGraph('spendingvshourgraph', hour, total, 'Spending on different periods of a day', 'Hour', 'Total spendings')
            }
        );
        this.barService.getSpendingVsDayOfWeek(this.drinkerName).subscribe(
            data => {
                const day_of_week = [];
                const total = [];
                data.forEach(x => {
                    day_of_week.push(x.day_of_week);
                    total.push(x.total);
                });
                this.renderGraph('spendingvsdayofweek', day_of_week, total, 'Spending on different days of a week', 'Day of week', 'Total spendings')
            }
        );
        this.barService.getSpendingVsMonth(this.drinkerName).subscribe(
            data => {
                const month = [];
                const total = [];
                data.forEach(x => {
                    month.push(x.month);
                    total.push(x.total);
                });
                this.renderGraph('spendingvsmonthgraph', month, total, 'Spending on different months in a year', 'Month', 'Total spendings')
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
