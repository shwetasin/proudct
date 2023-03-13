import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { ServiceNameService } from '../service-name.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-single',
  templateUrl: './single.page.html',
  styleUrls: ['./single.page.scss'],
})
export class SinglePage implements OnInit {

  singleCart: any = [];
  constructor(
    private http: HttpClient,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router,
    private service: ServiceNameService,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.singledataCart();
  }

  singledataCart() {

    let carts = this.actRoute.snapshot.paramMap.get('carts');
    console.log("carts:", carts)
    this.apiService.getData('https://dummyjson.com/carts/' + carts).subscribe({
      next: (res: any) => {
        if (res && res != null) {
          console.log("Response :", res)
          this.singleCart = res.products
          console.log("singleCart", this.singleCart);
        };
      },
      error: (err) => {
        this.service.presentAlert("Not Proudct in Cart.");
        console.log(err.error);
        this.router.navigate(['/home/']);
      }
    });


  }

}
