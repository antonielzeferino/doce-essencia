import Header from "@/components/Header"; // Atualize o caminho para onde está seu Header
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Produtos - Doce Essência",
  description: "Explore os nossos melhores produtos",
};

export default function ProdutosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="pt-14 min-h-screen flex flex-col">{children}</main>
    </>
  );
}
