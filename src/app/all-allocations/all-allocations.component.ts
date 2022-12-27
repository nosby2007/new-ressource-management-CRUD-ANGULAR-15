import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-all-allocations',
  templateUrl: './all-allocations.component.html',
  styleUrls: ['./all-allocations.component.scss']
})
export class AllAllocationsComponent implements OnInit {
  allocationList: any;
  constructor(public api:ApiService){}
  ngOnInit(): void {
    this.api.getAllocation().subscribe(res=>{
      this.allocationList=res;
    })

  }

}
