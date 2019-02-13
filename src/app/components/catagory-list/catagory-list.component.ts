import { Component, OnInit, Injector, ViewChild } from '@angular/core';
import { CatagoryService } from '../../services/catagory.service';
import { BaseComponent } from '../base/base.component';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog , MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { CatagoryUpsertDialogComponent } from '../catagory-upsert-dialog/catagory-upsert-dialog.component';

//interface trong typescript chủ yếu để kiểm tra kiểu
interface Catagory{
  _id?:string;
  catagoryName?:string;
  parentId?:string;
}

@Component({
  selector: 'catagory-list',
  templateUrl: './catagory-list.component.html',
  styleUrls: ['./catagory-list.component.scss']
})
export class CatagoryListComponent extends BaseComponent implements OnInit {
  title:string="Manage Catagory";
  displayedColumns: string[] = ['Check','catagoryName','lastModified','action'];
  catagoryDataSource = new MatTableDataSource<Catagory>();
  selection = new SelectionModel<Catagory>(true, []);
  multiSelectMode = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(injector: Injector,
              private catagoryService:CatagoryService,
              public dialog:MatDialog){ super(injector)}

  ngOnInit() {
    this.loadCatagory();
  }

   async loadCatagory(){
      var listAll = await this.process<Catagory[]>(this.catagoryService.All());
      var listParent = await this.process<Catagory[]>(this.catagoryService.GetParentCategory()); 

      this.catagoryDataSource = new MatTableDataSource(listAll);
      this.catagoryDataSource.paginator = this.paginator;
   } 

   openEditPopup(catagoryId:string){    
    const dialogRef = this.dialog.open(CatagoryUpsertDialogComponent, {
      width: '550px',
      data: catagoryId,
      autoFocus: false,
      disableClose:true,
    });
    dialogRef.addPanelClass("no-padding");
    return;
  }

  openPopupCreate(){
    const dialogRef = this.dialog.open(CatagoryUpsertDialogComponent, {
      width: '550px',
      data: null,
      autoFocus: false,
      disableClose:true,
    });

    dialogRef.addPanelClass("no-padding");
  }
   /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.catagoryDataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.catagoryDataSource.data.forEach(row => this.selection.select(row));
  }

}
