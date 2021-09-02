import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
   msg:string="Hello";
   d=new Date();

   employee=[
    {id:101,name:"Anju",post:"FullStack Developer",salary:85000,gender:"female"},
  {id:102,name:"Nanju",post:"MeanStack Developer",salary:86000,gender:"male"},
  {id:103,name:"Kunju",post:"MernStack Developer",salary:81000,gender:"female"},
  {id:104,name:"Sanju",post:"FullStack Developer",salary:85000,gender:"male"},
  {id:105,name:"Manju",post:"HR",salary:89000,gender:"female"}
   ]
     constructor() { }

  ngOnInit(): void {
  }

}
