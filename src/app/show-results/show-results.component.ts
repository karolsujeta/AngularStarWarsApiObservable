import { Component, OnInit } from '@angular/core';
import { DataInterface } from '../service/data-interface';
import { DataService } from '../service/data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-show-results',
  templateUrl: './show-results.component.html',
  styleUrls: ['./show-results.component.css']
})
export class ShowResultsComponent implements OnInit {

  datas: DataInterface[];

  constructor(private service: DataService, http: HttpClient) { }

  ngOnInit() {
  }

  showData() {
    this.service
      .downloadData()
      .subscribe((data: any) => {
        console.log(data);
        this.datas = data.data;
      });
  }

}
