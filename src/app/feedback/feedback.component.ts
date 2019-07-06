import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { DialogDataComponent } from '../dialog-data/dialog-data.component';
import { DialogSaveComponent } from '../dialog-save/dialog-save.component';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.less']
})
export class FeedbackComponent implements OnInit {
  typeCollection = ['text', 'select', 'boolean'];
  type = 'text';
  tripDetails:any = {};
  formError = false;
  pastJourneyDetails = false;
  previousJourneyDetails:any = {};

  constructor(private dialog: MatDialog) { }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(DialogDataComponent, dialogConfig);
    dialogConfig.position = {
      'top': '0',
      'left': '0'
    };
  }

  saveDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(DialogSaveComponent, dialogConfig);
    dialogConfig.position = {
      'top': '0',
      'left': '0'
    };
  }

  ngOnInit() {    
  }

  ngAfterViewInit() {
    this.type = this.typeCollection[Math.floor(Math.random() * this.typeCollection.length)]; 
    console.log('this.type->>> ', this.type);
    if(localStorage.getItem('journeyDetails')){      
      this.pastJourneyDetails = true;
      this.openDialog();
    }       
  }

  onSubmit(){
    if((this.type === 'boolean' && !this.tripDetails.reach_By) || (this.type === 'text' && !this.tripDetails.full_Name) || (this.type === 'select' && !this.tripDetails.place_To_Visit)){
      this.formError = true;
      return false
    }else{
      this.formError = false; 
      localStorage.setItem('journeyDetails', JSON.stringify(this.tripDetails)); 
      this.saveDialog();
    }
    
  }

}
