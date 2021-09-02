import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  isCond:boolean=false;
  flowers:string[]=["Rose","Lotus", "Tulips", "Jasmine", "Orchid"];
  myflower:string="Tulips";
  myStyle={
    color:"blue",
    fontSize:"30px",
    backgroundColor:"pink"
  }
   myClass={
     "txtDanger":this.isCond,
     "txtSuccess":!this.isCond,
     "special":!this.isCond
   }
employee=[
  {id:101,name:"Anju",post:"FullStack Developer",salary:85000,gender:"female"},
  {id:102,name:"Nanju",post:"MeanStack Developer",salary:86000,gender:"male"},
  {id:103,name:"Kunju",post:"MernStack Developer",salary:81000,gender:"female"},
  {id:104,name:"Sanju",post:"FullStack Developer",salary:85000,gender:"male"},
  {id:105,name:"Manju",post:"HR",salary:89000,gender:"female"}
]

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }
setParameter(val:any){
  this._router.navigate(['/directives',val])
}
}
