import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

    constructor() { }

    ngOnInit() {}
    chartOptions = {
        responsive: true
    };

    chartData = [
        { data: [330, 600, 260, 700], label: 'Account A' },
        { data: [120, 455, 100, 340], label: 'Account B' },
        { data: [45, 67, 800, 500], label: 'Account C' }
    ];

    chartLabels = ['January', 'February', 'Mars', 'April'];

    onChartClick(event) {
        console.log(event);
    }

    belleArray = [
        {
            name:'西施'
        },{
            name:'王昭君'
        },{
            name:'貂蝉'
        },{
            name:'杨玉环'
        },{
            name:'赵飞燕'
        },{
            name:'梁红玉'
        },{
            name:'李师师'
        }
    ];
    firstName="阴丽华"
    click(){
        console.log(`娶妻当娶${this.firstName}`);
    }

}
