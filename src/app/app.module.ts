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
import { CustomersComponent } from './customers/customers.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FirstArticleComponent,
    StatisticComponent,
    FeaturesComponent,
    PackageComponent,
    NetworkComponent,
    CustomersComponent,
    SubscribeComponent,
    FooterComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [HeaderComponent, 
    FirstArticleComponent, 
    StatisticComponent,
    FeaturesComponent,
    PackageComponent,
    NetworkComponent,
    CustomersComponent,
    SubscribeComponent,
    FooterComponent
  ]
})
export class AppModule { }
