import { Component, OnInit } from '@angular/core';
import { IDesignItem } from './design-item';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-design-list',
  templateUrl: './design-list.component.html',
  styleUrls: ['./design-list.component.css']
})
export class DesignListComponent implements OnInit {

  //#region Simple Properties

  fileUrl: string = '../assets/api/designs.json';
  designItems: IDesignItem[];
  filteredDesignItems: IDesignItem[];
  errorMessage: string;
  designVersions: string[];

  //#endregion

  //#region Defined Properties

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredDesignItems = this.designItems ? this.performFilter(this._listFilter, this._typeFilter) : this.designItems;
  }

  _typeFilter: string;
  get typeFilter(): string {
    return this._typeFilter;
  }
  set typeFilter(value: string) {
    this._typeFilter = value;
    this.filteredDesignItems = this.designItems ? this.performFilter(this._listFilter, this._typeFilter) : this.designItems;
  }

  //#endregion

  //#region Constructors

  constructor(private _http: HttpClient) { }

  //#endregion

  //#region Public Methods

  public getDesignItems(): Observable<IDesignItem[]> {
    return this._http.get<IDesignItem[]>(this.fileUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  //#endregion

  //#region Private Methods

  private handleError(err) {
    console.log(err.message);
    return Observable.throw(err.message);
  }

  private performFilter(filterBy: string, typeFilter: string): IDesignItem[] {
    filterBy = !(filterBy == null || filterBy == undefined) ? filterBy.toLocaleLowerCase() : filterBy;
    typeFilter = !(typeFilter == null || typeFilter == undefined) ? typeFilter.toLocaleLowerCase() : typeFilter;
    let auxiliarArray: IDesignItem[] = this.designItems;

    if (filterBy !== "" && filterBy != null && filterBy != undefined) {
      auxiliarArray = auxiliarArray.filter((item: IDesignItem) => item.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    if (typeFilter !== "" && typeFilter != null && typeFilter != undefined) {
      auxiliarArray = auxiliarArray.filter((item: IDesignItem) => item.euroscbVersion.toLocaleLowerCase().indexOf(typeFilter) !== -1);
    }

    return auxiliarArray;
  }

  //#endregion

  //#region Lifecycle Hookups

  ngOnInit() {
    this.getDesignItems().subscribe(
      items => {
        this.designItems = items;
        this.filteredDesignItems = this.designItems;
        this.designVersions = Array.from(new Set(this.designItems.map(item => item.euroscbVersion)));
        this.designVersions.splice(0, 0, '');
      },
      error => this.errorMessage = <any>error
    );
  }

  //#endregion

}
