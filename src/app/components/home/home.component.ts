import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { InfoCard } from '../shared/card/card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public infoCards: InfoCard[];

  public myControl = new FormControl();
  public options: Array<any> = ["Guatemala", "México", "El Salvador", "Argentina"];

  constructor() {
    this.infoCards = [
      {
        id: 1,
        title: "Título 1",
        subtitle: "Subtítulo 1",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dicta saepe odio quo aut. Ex veritatis asperiores iusto, consequuntur eligendi cum iste recusandae quisquam. Vel libero aspernatur optio aut expedita.",
        urlImage: "https://material.angular.io/assets/img/examples/shiba2.jpg",
        altTitleImagen: "Perro"
      },
      {
        id: 2,
        title: "Título 2",
        subtitle: "Subtítulo 2",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dicta saepe odio quo aut. Ex veritatis asperiores iusto, consequuntur eligendi cum iste recusandae quisquam. Vel libero aspernatur optio aut expedita.",
        urlImage: "https://material.angular.io/assets/img/examples/shiba2.jpg",
        altTitleImagen: "Perro"
      },
      {
        id: 3,
        title: "Título 3",
        subtitle: "Subtítulo 3",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dicta saepe odio quo aut. Ex veritatis asperiores iusto, consequuntur eligendi cum iste recusandae quisquam. Vel libero aspernatur optio aut expedita.",
        urlImage: "https://material.angular.io/assets/img/examples/shiba2.jpg",
        altTitleImagen: "Perro"
      },
      {
        id: 4,
        title: "Título 4",
        subtitle: "Subtítulo 4",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dicta saepe odio quo aut. Ex veritatis asperiores iusto, consequuntur eligendi cum iste recusandae quisquam. Vel libero aspernatur optio aut expedita.",
        urlImage: "https://material.angular.io/assets/img/examples/shiba2.jpg",
        altTitleImagen: "Perro"
      },
      {
        id: 5,
        title: "Título 5",
        subtitle: "Subtítulo 5",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dicta saepe odio quo aut. Ex veritatis asperiores iusto, consequuntur eligendi cum iste recusandae quisquam. Vel libero aspernatur optio aut expedita.",
        urlImage: "https://material.angular.io/assets/img/examples/shiba2.jpg",
        altTitleImagen: "Perro"
      }
    ]
  }

  ngOnInit(): void {
  }

}
