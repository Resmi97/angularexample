import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  myname: string ="Flowers";
  imgPath: string = "../../assets/download1.jfif";
 i:number=0;
  imgName: string = "SunFlower";
  item: string = "";

  constructor() { }

  ngOnInit(): void {
   
  }
  switchImage(){
  this.i=this.i+1;
  if(this.i==6)
  {
    this.i=0;
  }
  switch(this.i) {
    case 1:
      this.imgPath= "../../assets/download.jfif";
      break;
    case 2:
      this.imgPath= "../../assets/download2.jfif";
      break;
    case 3:
      this.imgPath= "../../assets/download3.jfif";
      break;
    case 4:
      this.imgPath= "../../assets/download4.jfif";
      break;
    case 5:
        this.imgPath= "../../assets/download5.jfif";
        break;
    default:
      this.imgPath= "../../assets/download1.jfif";
      break; 
  }
  }

 
}
