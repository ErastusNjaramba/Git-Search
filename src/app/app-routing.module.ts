import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { RepositoryComponent } from './repository/repository.component'
import { NavbarComponent } from './navbar/navbar.component';


const routes: Routes = [
  {path: 'form', component:FormComponent},
  {path: 'repository', component: RepositoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
