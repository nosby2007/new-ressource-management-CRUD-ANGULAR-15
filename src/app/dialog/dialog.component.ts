import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit{

  productForm!: FormGroup
  actionBtn:string="save"

employeeList = ["New Employee", "Old Employe", "Temporary"]
  dialogRef: any;

  constructor(private formBuilder:FormBuilder, 
    private api:ApiService, 
    @Inject(MAT_DIALOG_DATA) public editData:any,
    private dialog: MatDialogRef<DialogComponent>){}

  ngOnInit(): void {
    this.productForm= this.formBuilder.group({
      emplName: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      department: ['', Validators.required],
      category: ['', Validators.required],
      empId: ['', Validators.required],
      comment: ['', Validators.required],
      date: ['', Validators.required],
    });
    if(this.editData){
      this.actionBtn="Update"
      this.productForm.controls['emplName'].setValue(this.editData.emplName);
      this.productForm.controls['email'].setValue(this.editData.email);
      this.productForm.controls['phone'].setValue(this.editData.phone);
      this.productForm.controls['department'].setValue(this.editData.department);
      this.productForm.controls['category'].setValue(this.editData.category);
      this.productForm.controls['empId'].setValue(this.editData.empId);
      this.productForm.controls['comment'].setValue(this.editData.comment);
      this.productForm.controls['date'].setValue(this.editData.date);
    }
  }
  addProduct(){
    if(!this.editData){
      if(this.productForm.valid){
        this.api.postProduct(this.productForm.value).subscribe({
          next:(res)=>{
            alert("product add succesfully");
            this.productForm.reset;
            this.dialog.close('save');
          },
          error:()=>{
            alert("error while adding the product")
          }
        })
      }
    }else{
      this.updateProduct()
    }
    
  }
  updateProduct(){
    this.api.putProduct(this.productForm.value,this.editData).subscribe({next:(res)=>{
      alert('Employee updated Successfully')
      this.productForm.reset();
      this.dialogRef.close('update');
    }, error:()=>{
      alert('error while updating the employee record')
    }
    })
  }

}