import {Component, OnInit} from '@angular/core';
import { DayServiceService} from '../../day-service/day-service.service';

@Component({
  selector: 'day',
  templateUrl: './day-list.component.html',
  styleUrls: ['./day-list.component.css']
})
export class DayListComponent implements OnInit {

  chartOptions = {


    tooltips: {
      display: true,
      backgroundColor: '#fff',
      titleFontSize: 14,
      titleFontColor: 'chocolate',
      bodyFontColor: '#000',
      bodyFontSize: 12,
      displayColors: false,
    },

    animation: {
      duration: 1000,
      easing: 'easeInOutQuad'
    },
    responsive: true,
    legend: {
      display: true,
      position: 'top',
      cornerRadius: 10,
      titleSpacing: 4,
      footerFontStyle: 'bold',
      multiKeyBackground: '#eee'
    },
    hover: {
      mode: 'nearest',
      intersect: true
    },
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Gün',
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Kişi Sayısı'
        },
      }]
    }
  };

  constructor(public dayServiceService: DayServiceService ) {
  }

  public chartType = 'line';
  public chartLabel: string[] = [];
  barChartData: any;
  days: any;

  getDaysData() {
    this.dayServiceService.getDataSet()
      .subscribe(data => {
        this.days = (data);
        console.log(this.days);
      });
  }

  chartFilled(x) {

    this.chartLabel.push('14 Nisan', '15 Nisan', '16 Nisan', '17 Nisan', '18 Nisan');

    this.barChartData = [
      {data: [33070, 34090, 40427, 40270, 40520], label: 'Bugünkü Test Sayısı'},
      {data: this.days, label: 'Bugünkü Vaka Sayısı'},
      {data: [107, 115, 125, 126, 121], label: 'Bugünkü Vefat Sayısı'},
      {data: [842, 875, 1415, 1542, 1822], label: 'Bugünkü İyileşen Sayısı'},
    ];
    console.log(this.barChartData);
    console.log("days",this.days);
    console.log("önce",x);

  }


  ngOnInit() {
    this.getDaysData();
    console.log("bar",this.barChartData);
    setTimeout(() => {
      this.chartFilled(this.days);
    }, 1000);
    console.log("basr",this.barChartData);


  }


}
