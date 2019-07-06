import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-dialog-data',
  templateUrl: './dialog-data.component.html',
  styleUrls: ['./dialog-data.component.less']
})
export class DialogDataComponent implements OnInit {
  previousJourneyDetails = {};

  constructor(    
    private dialogRef: MatDialogRef<DialogDataComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
  }

  ngOnInit() {    
    this.previousJourneyDetails = JSON.parse(localStorage.getItem('journeyDetails'));
    // console.log('this.previousJourneyDetails-> ', this.previousJourneyDetails);
  }

  close() {
    this.dialogRef.close();
  }

}
