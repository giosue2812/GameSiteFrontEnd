import { Component, OnInit } from '@angular/core';
import {ListEnvieModel} from '../../../core/models/ListEnvieModel';
import {ListEnvieService} from '../../../core/services/list-envie.service';

@Component({
  selector: 'app-list-envie',
  templateUrl: './list-envie.component.html',
  styleUrls: ['./list-envie.component.scss']
})
export class ListEnvieComponent implements OnInit {

  listEnvie: ListEnvieModel[];

  page = 1;
  pageSize = 5;

  constructor(public listEnvieService: ListEnvieService) { }

  ngOnInit(): void {
    this.listEnvieService.listEnvieList().subscribe(data => {
      this.listEnvie = data;
    })
  }

}
