export interface Pedido {
    id: number;
    cliente: string;
    plato: string;
    precio: number;
    sucursales?: string[];
  }
