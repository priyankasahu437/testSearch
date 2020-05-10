import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {

  constructor(private http: HttpClient) {}

//Consuming API Service using httpclient
  getApiDetails(dataToSend:any): Promise<any> {

            return new Promise((resolve, reject) => {
                this.http.get(' https://financialmodelingprep.com/api/v3/search?query='+dataToSend.company+'&limit='+dataToSend.limit+'&exchange='+dataToSend.exchange)
                    .subscribe((resp: any) => {
                        resolve(resp);
                    }, reject);
            });
        }

//Consuming API Service and downloading CSV file
        public downloadAPI(dataToSend: any) {

        // alert(JSON.stringify(dataToSend))
          const headers = new HttpHeaders()
          .append('Content-Type', 'application/json')
          .append('Access-Control-Allow-Headers', 'Content-Type')
          .append('Access-Control-Allow-Methods', 'GET')
          .append('Access-Control-Allow-Origin', '*');


          this.http.get('https://financialmodelingprep.com/api/v3/financials/income-statement/'+dataToSend.symbol+'?datatype=csv',{responseType: 'arraybuffer',headers:headers})
          .subscribe(response => this.downLoadFile(response, "text/csv"));
      }
  
 //Download CSV file Function 
      downLoadFile(data: any, type: string) {
          let blob = new Blob([data], { type: type});
          let url = window.URL.createObjectURL(blob);
          let pwa = window.open(url);
          if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
              alert( 'Please disable your Pop-up blocker and try again.');
          }
      }
}
