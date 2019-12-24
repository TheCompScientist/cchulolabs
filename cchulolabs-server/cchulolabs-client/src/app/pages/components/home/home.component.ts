import { Component, OnInit, OnDestroy } from '@angular/core';
import { timer, Unsubscribable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  commands = [
    'Hello world my name is Carlos Chulo',
    'I am a Software Engineer',
    'I am a Computer Scientist',
    'I am a Maker',
    'I am a Problem Solver',
    'Welcome to my page'
  ];
  cursor = '█';
  command = '';
  commandToShow = '';
  showCursor = false;
  commandTyped = true;
  commandIndex = -1;
  commandStringIndex = 0;

  terminalTypeDelay = .025;
  terminalCursorDelay = .5;
  
  cursorTimerSub: Unsubscribable;
  typeTimerSub: Unsubscribable;

  constructor() { }

  ngOnInit() {
    const timerTypeInterval = this.terminalTypeDelay * 1000;
    const cursorInterval = this.terminalCursorDelay * 1000;
    const cursorTimerSource = timer(cursorInterval, cursorInterval);

    const maxCursorIndex = 3;
    let currCursorIndex = 0;

    this.cursorTimerSub = cursorTimerSource.pipe(take(3)).subscribe(() => {
      this.displayCursor();
    })

    // this.timerSub = timer(timerInterval, timerInterval).subscribe(() => {

    //   if (this.commandTyped) {
    //     this.commandIndex = (this.commandIndex + 1) % this.commands.length;
    //     this.commandTyped = false;
    //     this.commandStringIndex = 0;
    //     this.command = '';
    //   }

    //   const currCommand = this.commands[this.commandIndex];
    //   if (!this.commandTyped) {
    //     if (this.commandStringIndex < currCommand.length) {
    //       const char = currCommand[this.commandStringIndex];
    //       this.commandStringIndex++;
    //       this.command += char;
    //     } else {
    //       this.commandTyped = true;
    //       return;
    //     }
    //   }


    //   this.showCursor = !this.showCursor;

    //   if (this.showCursor) {
    //     this.commandToShow = this.command + this.cursor;
    //   } else {
    //     this.commandToShow = this.command;
    //   }
    // });
  }

  ngOnDestroy() {
    if (this.cursorTimerSub) {
      this.cursorTimerSub.unsubscribe();
    }
  }

  displayCursor() {
    this.showCursor = !this.showCursor;
    if (this.showCursor) {
      this.commandToShow = this.command + this.cursor;
    } else {
      this.commandToShow = this.command;
    }
  }

}
