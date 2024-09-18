import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule]
})
export class DashboardComponent implements OnInit {
  pedidosArray: any[] = []; 
  nuevoPedido: any = {}; 
  ingredientString: string = '';

  ngOnInit(): void {
    
  }

  agregarPedido() {
    const ingredientes = this.ingredientString.split(',').map(ingrediente => ingrediente.trim());
    this.nuevoPedido.ingredients = ingredientes;
    this.pedidosArray.push({ ...this.nuevoPedido });

    this.nuevoPedido = {}; 
    this.ingredientString = '';
  }

  eliminarPedido(index: number) {
    this.pedidosArray.splice(index, 1);
  }
}
