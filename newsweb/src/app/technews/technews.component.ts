import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {NewsapiservicesService} from "../service/newsapiservices.service";

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {
  constructor(private _service: NewsapiservicesService) { }

  //disaplay data
   technewsDisplay: any = [];

  ngOnInit(): void {
    this._service.techNews().subscribe((result) => {
      console.log(result);
      this.technewsDisplay = result.articles;
    })
  }

}

