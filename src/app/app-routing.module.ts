import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCatsComponentComponent } from './component/list-cats-component/list-cats-component.component';

const routes: Routes = [
  { path: 'list-cats-component', component: ListCatsComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
