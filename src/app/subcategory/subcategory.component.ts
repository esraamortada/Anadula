import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.scss']
})
export class SubcategoryComponent implements OnInit {
  products :any=[]
  errormessage: any;


  constructor(private ProductService:ProductService){}
  ngOnInit() {
    // this.ProductService.Getproductofsubcategory(3).subscribe({
    //   next: (data) => {
    //     this.products = data.data;
    //   },
    //   error: (err) => console.log('Error'),
    // });

  }

}





