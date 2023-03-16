import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {Board} from "../../models/board.model";
import {Column} from "../../models/column.model";



@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
})
export class MainViewComponent {

  board: Board = new Board('testBoard', [
    new Column( 'GetStarted', [
      'one', 'duos', 'tree'
    ] ),
    new Column( 'Plus one', [
      'firefox', 'Chromium', 'Opera'
    ] ),
    new Column('todo', [
      'Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'
    ]),
    new Column('done',[
      'Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'
    ])
  ])

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
