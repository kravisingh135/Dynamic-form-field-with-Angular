import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {KeySplitPipe} from '../key-split.pipe';

@Component({
  selector: 'app-dialog-save',
  templateUrl: './dialog-save.component.html',
  styleUrls: ['./dialog-save.component.less']
})
export class DialogSaveComponent implements OnInit {
  journeyDetails = {};
  constructor(    
    private dialogRef: MatDialogRef<DialogSaveComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
  }

  ngOnInit() {
    this.journeyDetails = JSON.parse(localStorage.getItem('journeyDetails'));
    // console.log('this.journeyDetails-> ', this.journeyDetails);
  }

  close() {
    this.dialogRef.close();
  }

}
