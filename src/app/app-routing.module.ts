import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseDrinkComponent } from './ui/choose-drink/choose-drink.component';
import { RefillingFormComponent } from './ui/refilling-form/refilling-form.component';

const routes: Routes = [
  {path: '', redirectTo: '/drinks', pathMatch:'full'},
  {path: 'drinks', component: ChooseDrinkComponent},
  {path: 'refills', component: RefillingFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
