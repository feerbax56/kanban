import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainViewComponent} from './pages/main-view/main-view.component';
import {BoardComponent} from './models/board/board.component';
import {CdkDropList} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CdkDropList,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
