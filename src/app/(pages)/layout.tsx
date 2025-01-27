import Footer from "@/components/Footer";
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
    <div className="flex flex-col h-screen">
      <Header />
      <main className="pt-14 flex flex-col flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
