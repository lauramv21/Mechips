import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  activeCan = 0;
  activeIndividual = 0;
  canArray = [
    {src: '../../../../../../assets/tarro-papa-limon.jpeg', alt: 'tarro papas limón'},
    {src: '../../../../../../assets/tarro-papa-natural.jpeg', alt: 'tarro papas naturales'},
    {src: '../../../../../../assets/tarro-papa-pimienta.jpeg', alt: 'tarro papas pimienta'},
    {src: '../../../../../../assets/tarro-rosquillas.jpeg', alt: 'tarro rosquillas'},
    {src: '../../../../../../assets/tarro-platano-maduro.jpeg', alt: 'tarro plátano maduro'},
    {src: '../../../../../../assets/tarro-platano-verde.jpeg', alt: 'tarro plátano verde'},
    {src: '../../../../../../assets/tarro-yucas.jpeg', alt: 'tarro yucas'},
  ];
  individualsArray = [
    {src: '../../../../../../assets/ind-papa-natural.jpeg', alt: 'paquete personal papas naturales'},
    {src: '../../../../../../assets/ind-platano-maduro.jpeg', alt: 'paquete personal plátano maduro'},
    {src: '../../../../../../assets/ind-platano-verde.jpeg', alt: 'paquete personal plátano verde'},
    {src: '../../../../../../assets/ind-rosquillas.jpeg', alt: 'paquete personal rosquillas'},
    {src: '../../../../../../assets/ind-yuca.jpeg', alt: 'paquete personal yucas'},
    {src: '../../../../../../assets/ind-justo-bueno.jpeg', alt: 'paquetes personales papa natural y bbq'},
  ];

  constructor() { }

  ngOnInit() {
  }

  setActiveCan(index: number) {
    if (index < 0) {
      this.activeCan = 0;
    } else if (index > this.canArray.length - 1) {
      this.activeCan = this.canArray.length - 1;
    } else {
      this.activeCan = index;
    }
  }

  setActiveIndividual(index: number) {
    if (index < 0) {
      this.activeIndividual = 0;
    } else if (index > this.individualsArray.length - 1) {
      this.activeIndividual = this.individualsArray.length - 1;
    } else {
      this.activeIndividual = index;
    }
  }
}
