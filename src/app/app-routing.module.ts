import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Feature1Component } from './features/feature1/components/feature1.component';
// import { Feature2Component } from './features/feature2/components/feature2.component';

const routes: Routes = [
  { path: 'feature1', component: Feature1Component },
  // { path: 'feature2', component: Feature2Component },
  { path: '', redirectTo: '/feature1', pathMatch: 'full' } // default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
