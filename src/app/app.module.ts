import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FeaturesComponent } from './shared/components/features/features.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { InspirationComponent } from './shared/components/inspiration/inspiration.component';
import { IconsComponent } from './shared/components/icons/icons.component';
import { FeatureCardsComponent } from './shared/components/feature-cards/feature-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeaturesComponent,
    FooterComponent,
    NavbarComponent,
    InspirationComponent,
    IconsComponent,
    FeatureCardsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
