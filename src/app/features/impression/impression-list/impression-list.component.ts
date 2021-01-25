import { Component, OnInit } from '@angular/core';
import {ImpressionService} from '../../../core/services/impression.service';
import {ImpressionModel} from '../../../core/models/ImpressionModel';

@Component({
  selector: 'app-impression-list',
  templateUrl: './impression-list.component.html',
  styleUrls: ['./impression-list.component.scss']
})
export class ImpressionListComponent implements OnInit {

  impressionModel:ImpressionModel[];

  page = 1;
  pageSize = 5;

  constructor(public impressionService:ImpressionService) { }

  ngOnInit(): void {
    this.impressionService.impressionList().subscribe(data => {
      this.impressionModel = data;
    })
  }

}
