import { Cart } from "@/services/cart/cart-service.types";

export class CartService {
  getCart = async (): Promise<Cart> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}cart`);

    return response.json();
  };

  addItem = async (productId: string): Promise<Cart> => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}cart`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({ productId }),
      },
    );

    return response.json();
  };

  removeItem = async (productId: string): Promise<Cart> => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}cart/${productId}`,
      {
        method: "DELETE",
      },
    );

    return response.json();
  };
}
