import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute , Router} from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { ServiceNameService } from '../service-name.service';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  categoriesList: any = [];
  productdetails: any;
  data: any;
  value: any;
  singlecategoriesdata:any=[];

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



  ngOnInit() {
    this.getCategories();
  
  }

  getCategories() {
    this.service.showLoading('Please wait...');
    this.apiService.getData('https://dummyjson.com/products/categories').subscribe((response: any) => {
      console.log("Response:", response);
      this.categoriesList = response;
      this.service.dismissLoader();
      
    }, (err) => {
      console.log("Error:", err.error);
    })

  }

  singlecategory(data: any){

    this.router.navigate(['/singlecategory/' + data])
    console.log("data",data  )
}



}

