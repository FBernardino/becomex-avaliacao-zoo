import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  check: boolean;
  id: number;
  especies: string;
  sexo: string;
  nome: string;
  nomePai: string;
  nomeMae: string;
  aniversario: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {check: true, id: 1, especies: 'Hydrogen', sexo: 'Macho', nome: 'H', nomePai: 'Roberval', nomeMae: 'Marieta', aniversario:'04/10/2015'},
  {check: true, id: 2, especies: 'Helium', sexo: 'Macho', nome: 'He', nomePai: 'Roberval', nomeMae: 'Marieta', aniversario:'04/10/2015'},
  {check: true, id: 3, especies: 'Lithium', sexo: 'Macho', nome: 'Li', nomePai: 'Roberval', nomeMae: 'Marieta', aniversario:'04/10/2015'},
  {check: true, id: 4, especies: 'Beryllium', sexo: 'Macho', nome: 'Be', nomePai: 'Roberval', nomeMae: 'Marieta', aniversario:'04/10/2015'},
  {check: true, id: 5, especies: 'Boron', sexo: 'Macho', nome: 'B', nomePai: 'Roberval', nomeMae: 'Marieta', aniversario:'04/10/2015'},
  {check: true, id: 6, especies: 'Carbon', sexo: 'Macho', nome: 'C', nomePai: 'Roberval', nomeMae: 'Marieta', aniversario:'04/10/2015'},
  {check: true, id: 7, especies: 'Nitrogen', sexo: 'Macho', nome: 'N', nomePai: 'Roberval', nomeMae: 'Marieta', aniversario:'04/10/2015'},
  {check: true, id: 8, especies: 'Oxygen', sexo: 'Macho', nome: 'O', nomePai: 'Roberval', nomeMae: 'Marieta', aniversario:'04/10/2015'},
  {check: true, id: 9, especies: 'Fluorine', sexo: 'Macho', nome: 'F', nomePai: 'Roberval', nomeMae: 'Marieta', aniversario:'04/10/2015'},
  {check: true, id: 10, especies: 'Neon', sexo: 'Macho', nome: 'Ne', nomePai: 'Roberval', nomeMae: 'Marieta', aniversario:'04/10/2015'},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['check', 'id', 'especies', 'sexo', 'nome','nomePai','nomeMae','aniversario'];
  dataSource: any[];
  constructor() { }

  ngOnInit() {
    this.dataSource = ELEMENT_DATA;
  }
  

}


