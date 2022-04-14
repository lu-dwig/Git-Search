import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { DatePipe } from './date-pipe.pipe/date-pipe.pipe.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RepositoriesComponent,
    SearchFormComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
