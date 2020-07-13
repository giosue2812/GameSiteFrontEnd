import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menu = [
    {
      title: "Game",
      menu1: "List",
      linkMenu1: "#",
      menu2: "Edit",
      linkMenu2: "#",
      menu3: "New",
      linkMenu3: "#",
      idDrop: "gameNav"
    },
    {
      title: "Liste Envie",
      menu1: "List",
      linkMenu1: "#",
      menu2: "Edit",
      linkMenu2: "#",
      menu3: "Add",
      linkMenu3: "#",
      idDrop: "listeEnvieNav"
    },
    {
      title: "Impression",
      menu1: "List",
      linkMenu1: "#",
      menu2: "Edit",
      linkMenu2: "#",
      menu3: "Add",
      linkMenu3: "#",
      idDrop: "impressionNav"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
