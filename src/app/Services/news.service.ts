import { Injectable } from '@angular/core';

// HTTP Import
import { HttpClient } from '@angular/common/http';

// Observable
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient: HttpClient) { }

  // Method to get the latest news from newsapi.org - Ireland
  GetLatestNews(): Observable<any> {
    return this.httpClient.get('http://newsapi.org/v2/top-headlines?country=ie&apiKey=aa5e82681678404ebd9a385141f0e49c');
  }

}
