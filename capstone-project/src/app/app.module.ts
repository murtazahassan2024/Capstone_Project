import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { ContactComponent } from './component/contact/contact.component';
import { AboutComponent } from './component/about-us/about/about.component';
import { LeadershipComponent } from './component/leadership/leadership/leadership.component';
import { ButtonModule } from 'primeng/button';
import { ProductsComponent } from './component/products/products.component';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    NavigationMenuComponent,
    ContactComponent,
    AboutComponent,
    LeadershipComponent,
    ProductsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ButtonModule, CardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
