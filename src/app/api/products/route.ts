import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";


export interface ProductData {
  id?: string;
  name: string;
  description: string;
  price: number;
  discountPercentage?: number;
  promotionEndDate?: string;
  tags?: string[];
  category: string;
  brand?: string;
  quantity?: string;
  weight?: number;
  colors?: string[];
  imageUrl: string;
}


// get all products
export async function GET() {
  try {
    const products = await prisma.product.findMany();

    return NextResponse.json(products, { status: 200 });
  } catch (error: unknown) {
    console.error("Erro ao buscar produtos:", error);

    if (error instanceof Error) {
      return NextResponse.json(
        { error: "Erro ao buscar produtos", details: error.message },
        { status: 500 }
      );
    } else {
      return NextResponse.json(
        { error: "Erro ao buscar produtos" },
        { status: 500 }
      );
    }
  }
}