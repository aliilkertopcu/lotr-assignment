import { Component, OnInit, AfterContentInit, ViewChild } from "@angular/core";
import { CharacterService } from "../character.service";
import { FormGroup, FormBuilder } from "@angular/forms";
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MediaObserver } from '@angular/flex-layout';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from "@core/services/user.service";
import { User } from "@core/models/user.interface";

import { Router } from "@angular/router";

@Component({
  selector: "app-character-gridlist",
  templateUrl: "./character-gridlist.component.html",
  styleUrls: ["./character-gridlist.component.scss"]
})
export class CharacterGridListComponent implements OnInit, AfterContentInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  filterForm: FormGroup;
  characters: any;
  filteredCharacters: any;

  filterOptions = {
    hairs: [],
    genders: [],
    races: [],
  };

  filters = {
    name: "",
    hair: "",
    gender: "",
    race: "",
    limit: "5",
    offset: "0"
  };

  filterCols = 2;

  gridByBreakpoint = {
    xl: 8,
    lg: 6,
    md: 4,
    sm: 2,
    xs: 1
  }
  loading = true;
  gridCols = 4;

  pageLength = 100;
  page = 1;
  pageSizeOptions: number[] = [1];
  user: User;

  constructor(
    private userService: UserService,
    private _snackBar: MatSnackBar,
    private characterService: CharacterService,
    private router: Router,
    private mediaObserver: MediaObserver) { }

  private getOptions(): void {
    this.filterOptions = this.characterService.getOptions();
  }

  public getCharacters(dontShowToaster?: boolean): void {
    this.loading = true;
    this.filteredCharacters = [];
    let filters = { ...this.filters };
    if (filters.name) {
      filters.name = "/" + filters.name + "/i";
    }
    this.characterService.get(filters).subscribe(
      (data) => {
        this.loading = false;
        this.pageLength = data.total;
        this.characters = data;
        this.filteredCharacters = this.characters.docs;
        !dontShowToaster && this._snackBar.open("We found " + data.total + " results!", "Undo", { duration: 3000 });
      },
      (error) => {
        this._snackBar.open(error, "Undo", { duration: 3000 });
        this.loading = false;
      }
    );
  }

  public getCharacterPage(event?: PageEvent) {
    this.filters.limit = "" + event.pageSize;
    this.filters.offset = "" + (event.pageIndex * parseInt(this.filters.limit));
    this.getCharacters(true);
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  ngOnInit(): void {
    this.getOptions();
    this.getCharacters();
    this.user = this.userService.getCurrentUser();
    this.pageSizeOptions = [1, 5, 10, 25, 50, 100, 250, 1000].filter(o => o <= this.user.maxLimit);
  }

  ngAfterContentInit(): void {
    this.mediaObserver.asObservable().subscribe(changes => {
      this.gridCols = this.gridByBreakpoint[changes[0].mqAlias];
      this.filterCols = this.gridByBreakpoint[changes[0].mqAlias];
      this.filterCols = this.filterCols === 1 ? 2 : this.filterCols;
    });
  }
}