import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceNameService } from '../service-name.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage {

  id: any;
  cartsdata: any = [];
  constructor(
    private apiService: ApiService,
    private router: Router,
    private http: HttpClient,
    private actRoute: ActivatedRoute,
    private service: ServiceNameService
  ) {
    this.id = this.actRoute.snapshot.paramMap.get('product');
    console.log("this", this.id);
    this.Cart();
  }

  
  routeclick(data: any) {
    console.log(data)
    this.router.navigate(['/single/' + data.id]);

  }





  Cart() {
    this.apiService.getData('https://dummyjson.com/carts/user/' + this.id).subscribe({
      next: (res: any) => {
        if (res && res != null) {
          console.log("Response :", res)
          this.cartsdata = res.carts[0].products;
          console.log("cartsdata", this.cartsdata);
        };
      },
      error: (err) => {
        console.log(err.error);
        this.service.presentAlert("Not Proudct in Cart.");
        this.router.navigate(['/home/']);
      }
    });

  }

  goToCartDetails(data:any){
    this.router.navigate(['/single/' + data.id]);
    console.log("data",data)
  }

}
