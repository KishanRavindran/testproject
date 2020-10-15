import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';





@Component({
  selector: 'app-screen541817',
  templateUrl: './screen541817.component.html',
  styleUrls: ['./screen541817.component.scss'],
})
export class Screen541817Component implements OnInit {

columnDefs = [
{headerName: 'No', field: 'stdno'},
{headerName: 'Name', field: 'stdname'},
{headerName: 'Mail', field: 'stdemail'}];
gridApi: any;
gridColumnApi: any;
rowSelection = 'single';
defaultColDef = { editable: false, sortable: true, resizable: true, filter: true };
paginationPageSize = 10;
rowData: any = [];

  constructor(
private router: Router
  ) { }

  ngOnInit() {
    this.GpSearch();
  }

GpRoute(queryId) {
this.router.navigate(['/screen642369'], { queryParams: { 'id': queryId } });
}
onSelectionChanged(event) {
  const selectedRows = this.gridApi.getSelectedRows();
  this.GpRoute(selectedRows[0]._id);
}
onGridReady(params) {
this.gridApi = params.api;
this.gridApi.sizeColumnsToFit();
this.gridColumnApi = params.columnApi;
}

}