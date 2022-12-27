import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-manage-item',
  templateUrl: './manage-item.component.html',
  styleUrls: ['./manage-item.component.scss']
})
export class ManageItemComponent  implements OnInit {

  constructor(private api: ApiService){}
  itemList:any

  ngOnInit(): void {
    this.api.getItem().subscribe(res=>{
      this.itemList=res;
    })
  }

  deleteItem(id: number){
    this.api.deleteItem(id).subscribe({
      next:(res)=>{
        alert('item delete successfully')
      }, error:()=>{
        alert('error while deleting item')
      }
    })
  }
}
