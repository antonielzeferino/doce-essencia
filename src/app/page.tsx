import Link from "next/link";

function Home() {
  return (
    <div>
      <main>
        <h1>
          pagina inicial
        </h1>

        <Link href={"/produtos"}>
          <button>
            ver catálogo
          </button>
        </Link>
      </main>
    </div>
  );
}

export default Home;