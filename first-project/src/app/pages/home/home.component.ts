import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { DummyJsonService } from '../../services/products/dummy-json.service';
import { ProductsResponse } from '../../interfaces/products-response';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  productsService = inject(DummyJsonService);
  response?: ProductsResponse;
  
  showAllProducts(){
    this.productsService.returnAllProducts(
    ).subscribe({
      next:(val:ProductsResponse)=>{
        this.response = val;
      }
    })
  }
}
