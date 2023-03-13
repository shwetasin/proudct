import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { ServiceNameService } from '../service-name.service';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  sliderConfig = {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerview: 1.6

  }
  productList: any = [];
  productdetails: any;
  data: any;
  value: any;


  constructor(
    private http: HttpClient,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router,
    private service: ServiceNameService,
    private loadingCtrl: LoadingController
  ) {


  }

  routeclick(data: any) {
    console.log(data)
    this.router.navigate(['/singlecategory/' + data.id]);

  }

  add() {

  }

  ngOnInit() {

    this.getdeatils();
    let id = this.actRoute.snapshot.paramMap.get('id');

  }
  getdeatils() {
    let id = this.actRoute.snapshot.paramMap.get('id');
    console.log(id, "route data is here ");
    this.service.showLoading('Please wait...');
    this.apiService.getData('https://dummyjson.com/products/' + id).subscribe((response: any) => {
      if (response != null) {
        this.service.dismissLoader();
        console.log("Response:", response);
        this.productList = response;
        console.log("ProductList", this.productList);
      }
    }, (err) => {
      this.service.dismissLoader();
      console.log("Error:", err.error);
    });
  }


  Addtocart(id: any) {
    console.log(id)
    let body = {
      userId: 1,
      products: [
        {
          id: id,
          quantity: 1,
        }
      
      ]
    }
    this.service.presentAlert("Your proudct to add sucessfully.");
    this.apiService.sendData('https://dummyjson.com/carts/add', body).subscribe({
      next: (res: any) => {
        if (res && res != null)  {
          console.log("Response :", res)
          this.router.navigate(['/cart/' + 1]);
          console.log("id:",id);
        }else{
        this.service.presentAlert("Not Proudct in Cart.");

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




