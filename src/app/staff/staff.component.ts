import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  message: 'Under age!';
  userEdit: Boolean = false;
  underAge: Boolean = false;
  public i: number;
  newStaffName: string = '';
  newStaffAge: number;
  newStaffAddress: string = '';

  editStaffName: string = '';
  editStaffAge: number;
  editStaffAddress: string = '';

  validated: Boolean = true;

    newStaff = {
      name: '',
      age: null,
      address: '',
    };

    newEditedStaff = {
      name: '',
      age: null,
      address: '',
    };


  staff = [
    {
    name: 'Bob',
    age: 32,
    address: 'NYC'
    },
    {
    name: 'Tim',
    age: 27,
    address: 'Boston'
    },
    {
    name: 'Rob',
    age: 24,
    address: 'Toronto'
    }
  ];

  constructor() {

  }

// Add Staff Method
  onAddStaff() {
  this.newStaff.name = this.newStaffName;
  this.newStaff.age = this.newStaffAge;
  this.newStaff.address = this.newStaffAddress;
  console.log(this.validated);


  if (this.newStaffName !== '' && this.newStaffAge >= 18 && this.newStaffAddress !== '') {
    this.staff.push(this.newStaff);
    this.newStaff = {name: '', age: null, address: ''};

  } else {
    return this.validated = false;
  }

  }

// Delete Staff Method
  onDeleteStaff(person) {
    console.log(person);
    this.i = this.staff.indexOf(person);
    console.log('Object Index is:' + this.i);
    this.staff.splice(this.i, 1);
  }

  extractId(person) {
    this.i = this.staff.indexOf(person);
    console.log(this.i);
  }

// Edit Staff Method
  onEditStaff(person) {

    this.newEditedStaff.name = this.editStaffName;
    this.newEditedStaff.age = this.editStaffAge;
    this.newEditedStaff.address = this.editStaffAddress;

    if (this.newEditedStaff.name !== '' && this.newEditedStaff.age >= 18 && this.newEditedStaff.address !== '') {
        console.log(person);
        // this.i = this.staff.indexOf(person);
        console.log('Object index is:' + this.i);
        this.staff.splice(this.i, 1, this.newEditedStaff);
        this.newEditedStaff = {name: '', age: null, address: ''};
        this.userEdit = false;


    }

  }

  ngOnInit() {

   }

  }

