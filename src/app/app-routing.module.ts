import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseDrinkComponent } from './ui/choose-drink/choose-drink.component';
import { ContainerStatusComponent } from './ui/container-status/container-status.component';
import { RefillingFormComponent } from './ui/refilling-form/refilling-form.component';
import { ReportOptionComponent } from './ui/report-option/report-option.component';

const routes: Routes = [
  {path: '', redirectTo: '/drinks', pathMatch:'full'},
  {path: 'drinks', component: ChooseDrinkComponent},
  {path: 'refills', component: RefillingFormComponent},
  {path: 'reports', component: ReportOptionComponent},
  {path: 'containers', component: ContainerStatusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
