import { Component, OnInit } from '@angular/core';
import {SessionService} from '../../../core/services/session.service';

@Component({
  selector: 'app-menu-not-connected',
  templateUrl: './menu-not-connected.component.html',
  styleUrls: ['./menu-not-connected.component.scss']
})
export class MenuNotConnectedComponent implements OnInit {

  menuConnexion = [
    {
      title: "Login",
      link: ["connexion"]
    },
    {
      title: "Inscription",
      link: ["connexion/inscription"]
    }
  ];

  constructor(public sessionService:SessionService) { }

  ngOnInit(): void {
  }

}
