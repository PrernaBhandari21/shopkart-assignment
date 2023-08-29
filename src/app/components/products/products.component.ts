import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  // products : any = [];
  categories : any = ["electronics",
  "jewelery",
  "men's clothing",
  "women's clothing"];

  products = [
{
  title:'florida jacket',
  image:"../../../assets/images/image1.png",
  description:"   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, placeat ad voluptatibus vitae nihil vero saepe eveniet aperiam minima sit."
},
{
  title:'florida jacket',
  image:"../../../assets/images/image2.png",
  description:"   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, placeat ad voluptatibus vitae nihil vero saepe eveniet aperiam minima sit."
},


  ]

  desktop_products : any=[
    {
      title:'florida jacket',
      image:"../../../assets/images/image1.png",
      description:"   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, placeat ad voluptatibus vitae nihil vero saepe eveniet aperiam minima sit."
    },
    {
      title:'florida jacket',
      image:"../../../assets/images/image2.png",
      description:"   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, placeat ad voluptatibus vitae nihil vero saepe eveniet aperiam minima sit."
    },
    {
      title:'florida jacket',
      image:"../../../assets/images/image3.png",
      description:"   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, placeat ad voluptatibus vitae nihil vero saepe eveniet aperiam minima sit."
    },
    {
      title:'florida jacket',
      image:"../../../assets/images/image2.png",
      description:"   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, placeat ad voluptatibus vitae nihil vero saepe eveniet aperiam minima sit."
    },
  ]

  // constructor(private http:HttpClient){
  //   this.http.get('https://fakestoreapi.com/products').subscribe(data=>{
  //     this.products = data;

  //     console.log(this.products);
  //   })
  // }

}
