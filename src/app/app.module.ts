import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RefillingFormComponent } from './ui/refilling-form/refilling-form.component';
import { ChooseDrinkComponent } from './ui/choose-drink/choose-drink.component';
import { ActivatedRoute, RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    RefillingFormComponent,
    ChooseDrinkComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent,
  RefillingFormComponent,
  ChooseDrinkComponent
  ]
})
export class AppModule { }
