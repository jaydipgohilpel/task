import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ServiceService } from '../service/service.service'
@Component({
  selector: 'app-param-use-in-get',
  templateUrl: './param-use-in-get.component.html',
  styleUrls: ['./param-use-in-get.component.scss']
})
export class ParamUseInGetComponent implements OnInit {

  constructor(private serviceData: ServiceService,) { }

  ngOnInit(): void {

    this.serviceData.getApiDataWithParameter().subscribe((data:any) => {
      console.log(data);
    });
  }

}
