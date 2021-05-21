import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { CategoryPipe } from './category.pipe';
import { DataFilterPipe } from './data-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CategoryPipe,
    DataFilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
