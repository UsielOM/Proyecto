import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './Components/bienvenida/bienvenida.component';
import { RegistroComponent } from './Components/registro/registro.component';



const routes: Routes = [
  {path:'', component:BienvenidaComponent},
  {path:'registro', component: RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
