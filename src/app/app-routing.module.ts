import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatFormComponent } from './mat-form/mat-form.component';
import { FormComponent } from './form/form.component';
const routes: Routes = [
  {path:'matForm',component:MatFormComponent},
  {path:'Form',component:FormComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
