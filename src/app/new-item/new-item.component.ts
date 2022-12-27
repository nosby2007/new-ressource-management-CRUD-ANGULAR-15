import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss']
})
export class NewItemComponent implements OnInit {
  itemForm!: FormGroup
  constructor(private api:ApiService){ }

  ngOnInit(): void {
    this.itemForm = new FormGroup({
      'name': new FormControl(null,Validators.required),
      'type': new FormControl(null,Validators.required),
      'description': new FormControl(null,Validators.required),
      'cost': new FormControl(null,Validators.required)
    })
    
  }

  get f(){
    return this.itemForm.controls;
  }
  addItem(){
    if(this.itemForm.valid){
      this.api.postItem(this.itemForm.value).subscribe({
        next:(res)=>{
          alert('allocation add successfully')
          this.itemForm.reset();
        }
      })
    }
  }

}
