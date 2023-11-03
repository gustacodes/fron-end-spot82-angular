import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RelatoriosComponent } from './components/relatorios/relatorios.component';
import { SpotComponent } from './components/spot/spot.component';
import { ModalRegisterComponent } from './components/modal-register/modal-register.component';

const routes: Routes = [
  {path: '', component: SpotComponent},
  {path: 'relatorios', component: RelatoriosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }