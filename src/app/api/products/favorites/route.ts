import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { ids } = await req.json();

    // Validação: verificar se os IDs foram enviados corretamente
    if (!ids || !Array.isArray(ids)) {
      return NextResponse.json(
        { error: "IDs inválidos ou não fornecidos." },
        { status: 400 }
      );
    }

    // Busca os produtos com base nos IDs fornecidos
    const products = await prisma.product.findMany({
      where: {
        id: {
          in: ids,
        },
      },
    });

    return NextResponse.json(products);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erro ao buscar os produtos favoritos." },
      { status: 500 }
    );
  }
}
