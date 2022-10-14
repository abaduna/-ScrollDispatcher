import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  tabla = 5
  hasta = 10 
  resultado:any = []
  constructor() { }

  ngOnInit(): void {
  }
  multiplicar(){
    
    for (let index = 0; index < this.hasta; index++) {
      //  console.log(this.tabla + "x" + index + "=" + this.tabla*index)
      this.resultado.push({
        tabla: this.tabla,
        resultado: this.tabla*index
      })
    }
    
    console.log(this.resultado)
  }
}
