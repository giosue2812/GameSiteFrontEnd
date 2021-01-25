import { Component, OnInit } from '@angular/core';
import {SessionService} from '../../../core/services/session.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu-connected',
  templateUrl: './menu-connected.component.html',
  styleUrls: ['./menu-connected.component.scss']
})
export class MenuConnectedComponent {
  menu = [
    {
      title: "Game",
      menu1: "List",
      linkMenu1: ["game"],
      menu2: "Edit",
      linkMenu2: ["game/edit"],
      menu3: "New",
      linkMenu3: ["game/new"],
      idDrop: "gameNav"
    },
    {
      title: "Liste Envie",
      menu1: "List",
      linkMenu1: ["listEnvie"],
    },
    {
      title: "Impression",
      menu1: "List",
      linkMenu1: ["impression"],
      menu3: "Add",
      linkMenu3: ["impression/new"],
      idDrop: "impressionNav"
    },
    {
      title: "Setup",
      menu1: "Edit",
      linkMenu1: ["setup"]
    },
    {
      title: "Profil",
      menu1: "Edit",
      linkMenu1: ["connexion/profil"]
    }
  ];

  constructor(public sessionService:SessionService,private router:Router) { }

  logout(){
    this.sessionService.remove();
    return this.router.navigateByUrl('');
  }

}
