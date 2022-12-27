import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';


@Component({
  selector: 'app-add-allocation',
  templateUrl: './add-allocation.component.html',
  styleUrls: ['./add-allocation.component.scss']
})
export class AddAllocationComponent implements OnInit{
  allocationForm!:FormGroup
  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.allocationForm= new FormGroup({
      'id': new FormControl(null, Validators.required),
      'allo': new FormControl(null, Validators.required),
      'start': new FormControl(null, Validators.required),
      'end': new FormControl(null, Validators.required),
      'projectDataList': new FormControl(null, Validators.required),
      'itemDataList': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'Allo': new FormControl(null, Validators.required),
      'number': new FormControl(null, Validators.required),
      'amount': new FormControl(null, Validators.required),
    })
    
  }
  get f(){
      return this.allocationForm.controls;
    }
    
  addAllocation(){
    if(this.allocationForm.valid){
      this.api.postAllocation(this.allocationForm.value).subscribe({
        next:(res)=>{
          alert('allocation add successfully')
          this.allocationForm.reset();
        }
      })
    }
  }

}
