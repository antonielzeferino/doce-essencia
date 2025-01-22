import ShowProduct from "@/components/ShowProduct";
import Link from "next/link";

const Product = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params
  return (
    <div>
      <Link href="/produtos">voltar</Link>
      <ShowProduct id={id}/>
    </div>
  );
}

export default Product;