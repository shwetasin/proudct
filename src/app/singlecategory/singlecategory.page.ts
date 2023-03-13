import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { ServiceNameService } from '../service-name.service';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-singlecategory',
  templateUrl: './singlecategory.page.html',
  styleUrls: ['./singlecategory.page.scss'],
})
export class SinglecategoryPage implements OnInit {
  singlecategoriesdata: any = [];

  constructor(
    private http: HttpClient,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router,
    private service: ServiceNameService,
    private loadingCtrl: LoadingController
  ) { }

  routeclick(data: any) {
    console.log(data)
    this.router.navigate(['/singlecategory/' + data.id]);

  }



  ngOnInit() {
    this.singlecategory();
  }

  singlecategory() {
    let categories = this.actRoute.snapshot.paramMap.get('categories');
    this.service.showLoading('Please wait...');
    console.log("categories:", categories)
    this.apiService.getData('https://dummyjson.com/products/category/' + categories).subscribe((response: any) => {
      console.log("Response:", response);
      this.singlecategoriesdata = response.products;
      console.log("singlecategoriesdata", this.singlecategoriesdata);
      this.service.dismissLoader();
    }, (err) => {
      console.log("Error:", err.error);
    })
  }


  goToProductDetails(pId: any) {
    this.router.navigate(['/detail/' + pId]);
    console.log("data", pId)
  }

}
