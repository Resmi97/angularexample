import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectivesComponent } from './directives/directives.component';
import { ParentComponent } from './parent/parent.component';
import { AngularformComponent } from './angularform/angularform.component';
import { UtdfComponent } from './utdf/utdf.component';
import { RtfComponent } from './rtf/rtf.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AngularMatComponent } from './angular-mat/angular-mat.component';
import { PipesComponent } from './pipes/pipes.component';

const routes: Routes = [
{
  path:"",
  redirectTo: "databinding",
  pathMatch:"full"
},
//{path:""}];
{
  path:"databinding",
  component: DatabindingComponent
},
{
  path:"directives/:id",
  component: DirectivesComponent
},
{
  path:"directives",
  component: DirectivesComponent
},
{
  path:"crud",
  loadChildren:()=> import('./crud/crud.module').then(m=>m.CrudModule)
},
{
  path:"angmat",
  component: AngularMatComponent
},
{
  path:"pipes",
  component: PipesComponent
},
{
  path:"parent",
  component: ParentComponent
},
{
  path:"angform",
  component:AngularformComponent,
  children: [ //childrouting
   {path:"utdf",component: UtdfComponent },
   {path:"rtf", component:RtfComponent }
  ]
},

{
  path: "**",
  component: PageNotFoundComponent
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
