import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GoogleDriveService {
  constructor(private httpClient: HttpClient) { }

  public createLead(data: object) {
    const range = 'survey!B2:B'
    const url = `${environment.sheet.baseUrl}/${environment.sheet.id}/values/${range}:append?valueInputOption=USER_ENTERED`;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 4/ZgGkbsq1LYpBnlvqBfE3M8QRhRck2re44vRA3EpSwiHIppeEzG7ptfb4hwGZFFiDgeFYDHO_sbgM-07dWh39tBU'
    });
    let options = { headers: headers };
    return this.httpClient.post(`${url}`, data, options);
   }
}
