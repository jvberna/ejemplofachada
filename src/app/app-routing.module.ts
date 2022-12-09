import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConFacadeComponent } from './components/con-facade/con-facade.component';
import { OtroConFacadeComponent } from './components/otro-con-facade/otro-con-facade.component';
import { SinFacadeComponent } from './components/sin-facade/sin-facade.component';

const routes: Routes = [
  { path: 'sinFacade', component: SinFacadeComponent },
  { path: 'conFacade', component: ConFacadeComponent },
  { path: 'otroConFacade', component: OtroConFacadeComponent },
  { path: '**', redirectTo: 'sinFacade'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
