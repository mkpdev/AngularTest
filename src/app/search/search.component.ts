import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  getSearchData: string;
  getData: boolean = false;
  totalCount: number;
  getItemData: [];

  constructor(private dataService: DataService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void { }

  searchData = (getVal) => {
    this.getData = false;
    this.dataService.getData(getVal)
    .subscribe((res: any) => {
      if(res) {
        this.getData = true;
        this.getItemData = res.items;
        this.totalCount = res.total_count;
        this.openSnackBar("Request Successfull", "Success");
      }
    }, (err) => {
      this.openSnackBar("Something Went Wrong", err);
    });
  }

  resetInput = () => {
    this.getSearchData = '';
  }

  openSnackBar(getMessage: string, action?: string) {
    this._snackBar.open(getMessage, action, {
      duration: 5000
    });
  }

}
