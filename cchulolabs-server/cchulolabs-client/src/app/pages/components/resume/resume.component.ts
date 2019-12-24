import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  source = '/assets/files/Carlos_Chulo_-_Software_Engineer.pdf';
  busy = false;
  constructor() { }

  ngOnInit() {}

  download() {
    try {
      this.busy = true;
      saveAs(this.source, 'resume.pdf');
    } finally {
      this.busy = false;
    }
  }

}
