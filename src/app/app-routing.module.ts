import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RelatoriosComponent } from './components/pages/relatorios/relatorios.component';
import { SpotComponent } from './components/pages/spot/spot.component';

const routes: Routes = [
  {path: 'relatorios', component: RelatoriosComponent},
  {path: 'patio', component: SpotComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }