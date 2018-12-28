import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export interface Bar {
    name: string;
    phone: string;
    address: string;
    state: string;
    open_hour: number;
    close_hour: number;
}
export interface Drinker {
    name: string;
    phone: string;
    address: string;
    state: string;
}

export interface Beer {
    name: string;
    manufacture: string;
}

export interface Bill {
    transaction_id: number;
    time: string;
    bar_name: string;
    drinker_name: string;
    total: number;
    tip: number;
    tax: number;
    day_of_week: string;
}

@Injectable({
    providedIn: 'root'
})
export class BarsService {
    constructor(
        public http: HttpClient
    ) { }
    
    anyQuery(query) {
        return this.http.get<any[]>('/api/any-query/' + query)
    }
    getBars() {
        return this.http.get<Bar[]>('/api/bar');
    }
    findBars(name: string) {
        return this.http.get<Bar[]>('/api/bar/' + name);
    }
    getDrinkers() {
        return this.http.get<Drinker[]>('/api/drinker');
    }
    findDrinkers(name: string) {
        return this.http.get<Bar[]>('/api/drinker/' + name);
    }
    getBeers() {
        return this.http.get<Beer[]>('/api/beer');
    }
    findBeers(name: string) {
        return this.http.get<Beer[]>('/api/beer/' + name);
    }
    getFrequentCounts() {
        return this.http.get<any[]>('/api/frequents-data');
    }
    getBills(drinker_name: string) {
        return this.http.get<Bill[]>('/api/bill/' + drinker_name);
    }
    getBeersOrderedMost(drinker_name: string) {
        return this.http.get<any[]>('/api/beers-ordered-most/' + drinker_name);
    }
    getLargestSquanders(bar_name: string) {
        return this.http.get<any[]>('/api/largest-squanders/' + bar_name);
    }
    getPopularBeers(bar_name: string) {
        return this.http.get<any[]>('/api/popular-beers/' + bar_name);
    }
    getPopularManfs(bar_name: string) {
        return this.http.get<any[]>('/api/popular-manfs/' + bar_name);
    }
    getPopularBarsForBeer(beer_name: string) {
        return this.http.get<any[]>('/api/popular-bars-for-beer/' + beer_name);
    }
    getBiggestConsumers(beer_name: string) {
        return this.http.get<any[]>('/api/biggest-consumers/' + beer_name);
    }
    getSpendingInBars(drinker_name: string){
        return this.http.get<any[]>('/api/spending-in-bars/' + drinker_name);
    }
    getSpendingVsHour(drinker_name: string){
        return this.http.get<any[]>('/api/spending-vs-hour/' + drinker_name);
    }
    getSpendingVsDayOfWeek(drinker_name: string){
        return this.http.get<any[]>('/api/spending-vs-day-of-week/' + drinker_name);
    }
    getSpendingVsMonth(drinker_name: string){
        return this.http.get<any[]>('/api/spending-vs-month/' + drinker_name);
    }
    getSalesVsHour(bar_name: string){
        return this.http.get<any[]>('/api/sales-vs-hour/' + bar_name);
    }
    getSalesVsDayOfWeek(bar_name: string){
        return this.http.get<any[]>('/api/sales-vs-day-of-week/' + bar_name);
    }
    getSalesVsMonth(bar_name: string){
        return this.http.get<any[]>('/api/sales-vs-month/' + bar_name);
    }
    getQuantityVsHour(beer_name: string){
        return this.http.get<any[]>('/api/quantity-vs-hour/' + beer_name);
    }
    getQuantityVsDayOfWeek(beer_name: string){
        return this.http.get<any[]>('/api/quantity-vs-day-of-week/' + beer_name);
    }
    getQuantityVsMonth(beer_name: string){
        return this.http.get<any[]>('/api/quantity-vs-month/' + beer_name);
    }
}
