import { notFound } from "next/navigation";
import Link from "next/link";
import AnnouncementBar from "../../components/AnnouncementBar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductDetail from "../../components/ProductDetail";
import { PRODUCTS, getProduct, relatedProducts } from "../../data/products";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ id: p.id }));
}

export function generateMetadata({ params }) {
  const product = getProduct(params.id);
  if (!product) return { title: "Produto não encontrado — Nebulari" };
  return {
    title: `${product.name} — Nebulari`,
    description: product.description,
  };
}

export default function ProductPage({ params }) {
  const product = getProduct(params.id);
  if (!product) notFound();

  const related = relatedProducts(product.id, 3);

  return (
    <>
      <AnnouncementBar />
      <Header />
      <main className="product-page">
        <div className="container product-breadcrumb">
          <Link href="/">Início</Link>
          <span aria-hidden="true">/</span>
          <Link href="/#edicoes">Edições</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{product.name}</span>
        </div>

        <ProductDetail product={product} related={related} />
      </main>
      <Footer />
    </>
  );
}
