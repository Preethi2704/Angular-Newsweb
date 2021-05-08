import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

//newsapiurl
newsapiUrl ="https://newsapi.org/v2/top-headlines?country=in&apiKey=8e388c5f79834cb3a02b47a83676c120";

//technewsurl
techApiUrl ="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=8e388c5f79834cb3a02b47a83676c120";

//businessnewsurl
businessApiUrl ="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=8e388c5f79834cb3a02b47a83676c120";


//topheading()
topHeading():Observable<any>
{
  return this._http.get(this.newsapiUrl);
}

//technews()
techNews():Observable<any>
{
  return this._http.get(this.techApiUrl);
}

//businessnews()
businessNews():Observable<any>
{
  return this._http.get(this.businessApiUrl);
}



}
