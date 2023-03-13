import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  productList: any = [];

  constructor(
    private apiService: ApiService,
    private nav: NavController,
    private router: Router,
    private actRoute: ActivatedRoute,

  ) {




  }

  ionViewWillEnter() {
    this.Viewall();
  }
  routeclick(data: any) {
    console.log(data)
    this.router.navigate(['/detail/' + data.id]);

  }

  cart() {
    console.log()
    this.router.navigate(['/cart/1']);

  }

  Viewall() {
    this.apiService.getData('https://dummyjson.com/products').subscribe((response: any) => {
      console.log("Response:", response);
      this.productList = response.products;
      console.log("ProductList", this.productList);

    }, (err) => {
      console.log("Error:", err.error);
    })
  }


  onChange(event: any) {

    let data = event.target.value;

    this.apiService.getData('https://dummyjson.com/products/search?q=' + data).subscribe((response: any) => {
      console.log("Response search:", response);
      // console.log(event.target.value);
        this.productList = response.products;
      //   console.log("ProductList",this.productList);
    }, (err) => {
      console.log("Error:", err.error);
    })
  }

  filter(){
    
  }


  


}



