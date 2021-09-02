import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  myname: string ="Flowers";
  imgPath: string = "../../assets/download.jfif";
  imgName: string = "Flower";
  item: string = "";
  constructor() { }

  ngOnInit(): void {
  }
  greeting() {
    alert("you called event binding");
  }
}
