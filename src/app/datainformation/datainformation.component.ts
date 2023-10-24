import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-datainformation',
  templateUrl: './datainformation.component.html',
  styleUrls: ['./datainformation.component.scss']
})
export class DatainformationComponent implements OnInit {
  constructor(private fb: FormBuilder) { }
  dataForm: boolean = false;
  showData: boolean = false;
  confirmData: boolean = false;
  disVal: boolean = true
  checked: boolean = false;
  busData: FormGroup | any;
  showForm: FormGroup | any;
  ngOnInit(): void {
    this.busData = this.fb.group({
      arName: [null, [Validators.required]],
      enName: [null, [Validators.required]],
      rowNu: [null, [Validators.required]],
      colNu: [null, [Validators.required]],
      seatNu: [null, [Validators.required]],
      levNu: [null, [Validators.required]],
    })
    this.showForm = this.fb.group({
      arName: [null, [Validators.required]],
      enName: [null, [Validators.required]],
      rowNu: [null, [Validators.required]],
      colNu: [null, [Validators.required]],
      seatNu: [null, [Validators.required]],
      levNu: [null, [Validators.required]],
    })
  }
  showDialog() {
    this.dataForm = true;
  }
  confirm() {
    this.confirmData = true;
    console.log(this.busData.value);
  }
  get controls() {
    return this.busData.controls
  }
  switchDialog() {
    console.log(this.busData.value);
    this.showData = true; this.dataForm = false; this.confirmData = false;
  }
  switchDis() {
    if (this.checked) {
      this.checked = false;
      this.disVal = true;
    }
    else {
      this.checked = true;
      this.disVal = false;
    }
  }
}

