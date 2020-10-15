import { Component, OnInit } from '@angular/core';





@Component({
  selector: 'app-screen841984',
  templateUrl: './screen841984.component.html',
  styleUrls: ['./screen841984.component.scss'],
})
export class Screen841984Component implements OnInit {

columnDefs = [
{headerName: 'No', field: ''}];
gridApi: any;
gridColumnApi: any;
rowSelection = 'single';
defaultColDef = { editable: false, sortable: true, resizable: true, filter: true };
paginationPageSize = 10;
rowData: any = [];

  constructor(

  ) { }

  ngOnInit() {
    this.GpGetAllValues();
  }

onGridReady(params) {
this.gridApi = params.api;
this.gridApi.sizeColumnsToFit();
this.gridColumnApi = params.columnApi;
}

}