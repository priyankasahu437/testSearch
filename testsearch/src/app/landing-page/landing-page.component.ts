import { Component, OnInit } from '@angular/core';
import { LandingPageService } from '../landing-page.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  exchanges;
  limits;
  isVisible :boolean=false;

  company;
  limit;
  exchange;

  tableData;
  displayedColumns: string[] = ['name', 'symbol', 'currency', 'stockExchange','action'];
  dataSource;

  constructor(private apiService: LandingPageService) {
    this.exchanges = [{
      id: 'NASDAQ',
      value: 'NASDAQ'
     },
     {
      id: 'NYSE',
      value: 'NYSE'
     },
     {
      id: 'AMEX',
      value: 'AMEX'
     },
     {
      id: 'FOREX',
      value: 'FOREX'
     }]



     this.limits = [{
      id: 10,
      value: '10'
     },
     {
      id: 25,
      value: '25'
     },
     {
      id: 50,
      value: '50'
     },
     {
      id: 100,
      value: '100'
     }]

     this.limit=''
     this.exchange=''

  }

  ngOnInit(): void {}

  //Get table data on the basis of condition
  searchTable() {

    var dataToSend = {
      "company":this.company,
      "limit":this.limit,
      "exchange":this.exchange
    }
//Calling API service to get data from server
    this.apiService.getApiDetails(dataToSend).then(response => {
      console.log("Response for Bank Edit ",response)
      this.isVisible=true;
      this.dataSource = response;
    });
  }

//Calling API service to download statment
  downloadStatement(rowData)
  {
    this.apiService.downloadAPI(rowData)
  }

}
