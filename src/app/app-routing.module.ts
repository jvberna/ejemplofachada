import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConFacadeComponent } from './components/con-facade/con-facade.component';
import { SinFacadeComponent } from './components/sin-facade/sin-facade.component';

const routes: Routes = [
  { path: 'sinFacade', component: SinFacadeComponent },
  { path: 'conFacade', component: ConFacadeComponent },
  { path: '**', redirectTo: 'sinFacade'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
