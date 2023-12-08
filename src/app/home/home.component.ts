import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss','./css/style.css','./css/style.min.css','./css/lightbox.css','./css/lightbox.min.css'],
  animations: [
    trigger('divAnimation', [
      state('initial', style({
        opacity: 0,
        transform: 'translateY(-50px)'
      })),
      state('final', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('initial => final', animate('500ms ease-in')),
      transition('final => initial', animate('500ms ease-out'))
    ])
  ]


})
export class HomeComponent implements OnInit    {
  Products:any=[]
  errorMessage: any;
  constructor( private ProductService:ProductService){}



  ngOnInit(): void {

this.ProductService.GetAllproduct().subscribe({
    next:(data:any)=>{
      this.Products = data.data
    console.log(this.Products)

    },
    error:(error:any)=>this.errorMessage = error
  });



  // this.ProductService.Getproductofsubcategory(1).subscribe({
  //   next: (data) => {
  //     this.Products = data;
  //   },
  //   error: (err) => console.log('Error'),
  // });

}
}
