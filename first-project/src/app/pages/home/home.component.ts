import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { DummyJsonService } from '../../services/products/dummy-json.service';
import { Product, ProductsResponse } from '../../interfaces/products-response';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  productsService = inject(DummyJsonService);
  products: Product[] = [];

  ngOnInit(){
    this.showAllProducts();
  }
  
  showAllProducts(){
    this.productsService.returnAllProducts().subscribe({
      next:(products: Product[])=>{
        this.products = products;
      }
    })
  }
}
