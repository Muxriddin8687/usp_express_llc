import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  closeNav(){
    window.scroll(0, 0);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
