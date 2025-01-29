import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

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
  colors?: string[];
  imageUrl: string;
}

type FilterKeys = "name" | "description" | "tags" | "category" | "promotion";

type FilterValue = {
  name?: { contains: string; mode: "insensitive" };
  description?: { contains: string; mode: "insensitive" };
  tags?: { hasSome: string[] };
  category?: { contains: string };
  AND?: { 
    promotionEndDate?: { gt: Date }; 
    discountPercentage?: { gt: number }; 
  }[];
};

export async function GET(
  request: Request,
  { params }: { params: Promise<{ filters: string[] }> }
) {
  try {
    const { filters } = await params;

    const filterObject: FilterValue = {};

    for (const filter of filters) {
      const [key, value] = filter.split("=");
      if (!key || !value) continue;

      switch (key as FilterKeys) {
        case "name":
          filterObject.name = { contains: value, mode: "insensitive" };
          break;
        case "description":
          filterObject.description = { contains: value, mode: "insensitive" };
          break;
        case "tags":
          filterObject.tags = { hasSome: value.split(",") };
          break;
        case "category":
          filterObject.category = { contains: value };
          break;
        case "promotion":
          if (value === "true") {
            filterObject.AND = [
              { promotionEndDate: { gt: new Date() } },
              { discountPercentage: { gt: 0 } },
            ];
          }
          break;
        default:
          break;
      }
    }

    const products = await prisma.product.findMany({
      where: filterObject,
    });

    const expiredProducts = products.filter(
      (product) =>
        product.promotionEndDate &&
        product.discountPercentage &&
        new Date(product.promotionEndDate) <= new Date()
    );

    for (const expiredProduct of expiredProducts) {
      await prisma.product.update({
        where: { id: expiredProduct.id },
        data: {
          discountPercentage: null,
          promotionEndDate: null,
        },
      });
    }

    const response = NextResponse.json(products, { status: 200 });

    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    response.headers.set(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );

    return response;
  } catch (error: unknown) {
    console.error("Erro ao buscar produtos:", error);

    const response = NextResponse.json(
      {
        error: "Erro ao buscar produtos",
        details: error instanceof Error ? error.message : "",
      },
      { status: 500 }
    );

    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    response.headers.set(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );

    return response;
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
