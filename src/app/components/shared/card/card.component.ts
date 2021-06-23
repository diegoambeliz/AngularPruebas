import { Component, Input, OnInit } from '@angular/core';

export interface InfoCard{
  id: number;
  title: string;
  subtitle: string;
  content: string;
  urlImage: string;
  altTitleImagen: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input('infoCard') infoCard!: InfoCard;
  constructor() { }

  ngOnInit(): void {}

}
