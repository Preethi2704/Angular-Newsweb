import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {NewsapiservicesService} from '../service/newsapiservices.service';

@Component({
  selector: 'app-businessnews',
  templateUrl: './businessnews.component.html',
  styleUrls: ['./businessnews.component.css']
})
export class BusinessnewsComponent implements OnInit {
  constructor(private _service: NewsapiservicesService) { }

  //disaplay data
   businessnewsDisplay: any = [];

  ngOnInit(): void {
    this._service.businessNews().subscribe((result) => {
      console.log(result);
      this.businessnewsDisplay = result.articles;
    })
  }

}
