import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, startWith, map } from 'rxjs';

@Component({
  selector: 'app-add-asset',
  templateUrl: './add-asset.component.html',
  styleUrls: ['./add-asset.component.css']
})
export class AddAssetComponent implements OnInit {


  constructor(private fb: FormBuilder) {

  }

  submitted = false;
  assetDetailsForm: FormGroup | any;
  filteredStates: Observable<any> | any;

  states = [
    {
      name: 'dasktop',
      id: '1',
    },
    {
      name: 'laptop',
      id: '2',
    }, {
      name: 'printer',
      id: '3',
    }
  ];

  ngOnInit(): void {

    this.assetDetailsForm = this.fb.group({
      assetType: ['', Validators.required],
      model: ['', Validators.required],
      processor: ['', Validators.required],
      ram: ['', Validators.required],
      HDD: ['', Validators.required],
      serialNo: ['', Validators.required],
      AssetNo: ['', Validators.required],
      date: ['', Validators.required],
      bag: ['', Validators.required],
      wirelessMouse: ['', Validators.required],
      laptopStand: ['', Validators.required],
      accessory: ['', Validators.required],
      remarks: ['', Validators.required],
    })


    this.filteredStates = this.assetDetailsForm.controls['assetType'].valueChanges.pipe(
      startWith(''),
      map(state => (state ? this._filterStates(state) : this.states.slice())),
    );
  }

  submit() {
    this.submitted = true
    let controls = this.assetDetailsForm.controls
    if (this.assetDetailsForm.invalid) {
      return this.assetDetailsForm.markAllAsTouched();
    }
  }

  _filterStates(value: any) {
    const filterValue = value.toLowerCase();
    return this.states.filter(state => state.name.toLowerCase().includes(filterValue));
  }
}
