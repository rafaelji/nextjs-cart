import { Cart } from "@/services/cart/cart-service.types";

export class CartService {
  getCart = async (): Promise<Cart> => {
    const response = await fetch(`http://localhost:3000/cart`);

    return response.json();
  };

  addItem = async (productId: string): Promise<Cart> => {
    const response = await fetch(`http://localhost:3000/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({ productId }),
    });

    return response.json();
  };

  removeItem = async (productId: string): Promise<Cart> => {
    const response = await fetch(`http://localhost:3000/cart/${productId}`, {
      method: "DELETE",
    });

    return response.json();
  };
}
