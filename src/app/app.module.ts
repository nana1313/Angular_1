import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FirstArticleComponent } from './first-article/first-article.component';
import { StatisticComponent } from './statistic/statistic.component';
import { FeaturesComponent } from './features/features.component';
import { PackageComponent } from './package/package.component';
import { NetworkComponent } from './network/network.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FirstArticleComponent,
    StatisticComponent,
    FeaturesComponent,
    PackageComponent,
    NetworkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [HeaderComponent, FirstArticleComponent, StatisticComponent,FeaturesComponent,PackageComponent,NetworkComponent]
})
export class AppModule { }
