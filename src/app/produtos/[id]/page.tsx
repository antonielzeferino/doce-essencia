import Link from "next/link";

function ShowProduct() {
  return (
    <div className="p-4">
      <h1>Titulo qualquer</h1>
      <Link href={"/"}>Início</Link>
    </div>
  );
}

export default ShowProduct;