import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RefillingFormComponent } from './ui/refilling-form/refilling-form.component';
import { ChooseDrinkComponent } from './ui/choose-drink/choose-drink.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ContainerStatusComponent } from './ui/container-status/container-status.component';
import { ReportOptionComponent } from './ui/report-option/report-option.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    RefillingFormComponent,
    ChooseDrinkComponent,
    ContainerStatusComponent,
    ReportOptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    RefillingFormComponent,
    ChooseDrinkComponent,
    ContainerStatusComponent,
    ReportOptionComponent
  ]
})
export class AppModule { }
