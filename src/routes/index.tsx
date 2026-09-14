import { createFileRoute } from "@tanstack/react-router";
import {
  ChevronLeft,
  ChevronRight,
  Gift,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  PackageCheck,
  ShoppingBasket,
  Sparkles,
  X,
} from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/le-petit-hero.jpg";
import basket11 from "@/assets/products/basket-1-1.jpeg";
import basket12 from "@/assets/products/basket-1-2.jpeg";
import basket13 from "@/assets/products/basket-1-3.jpeg";
import basket14 from "@/assets/products/basket-1-4.jpeg";
import basket15 from "@/assets/products/basket-1-5.jpeg";
import basket21 from "@/assets/products/basket-2-1.jpeg";
import basket22 from "@/assets/products/basket-2-2.jpeg";
import basket31 from "@/assets/products/basket-3-1.jpeg";
import basket32 from "@/assets/products/basket-3-2.jpeg";
import basket33 from "@/assets/products/basket-3-3.jpeg";
import basket34 from "@/assets/products/basket-3-4.jpeg";
import basket35 from "@/assets/products/basket-3-5.jpeg";
import basket36 from "@/assets/products/basket-3-6.jpeg";
import basket41 from "@/assets/products/basket-4-1.jpeg";
import basket42 from "@/assets/products/basket-4-2.jpeg";
import basket51 from "@/assets/products/basket-5-1.jpeg";
import basket52 from "@/assets/products/basket-5-2.jpeg";
import basket53 from "@/assets/products/basket-5-3.jpeg";
import basket61 from "@/assets/products/basket-6-1.jpg";
import basket62 from "@/assets/products/basket-6-2.jpg";

const phone = "5598920074977";
const whatsappUrl = (message: string) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

const products = [
  {
    category: "Dia dos Pais",
    name: "Café do Paizão",
    price: "R$ 189,00",
    items: ["Café especial", "Biscoitos artesanais", "Caneca premium", "Carteira de Couro"],
    images: [basket11, basket12, basket13, basket14, basket15],
  },
  {
    category: "Dia das Mães",
    name: "Doce Aconchego",
    price: "R$ 215,00",
    items: [
      "Urso de Pelúcia",
      "Caneca personalizada",
      "Chocolates selecionados",
      "Mimo personalizado",
    ],
    images: [basket21, basket22],
  },
  {
    category: "Aniversário",
    name: "Festa na Caixa",
    price: "R$ 198,00",
    items: ["Mini bolo decorado", "Doces especiais", "Balão comemorativo", "Cartão com mensagem"],
    images: [basket31, basket32, basket33, basket34, basket35, basket36],
  },
  {
    category: "Romance",
    name: "Amor em Detalhes",
    price: "R$ 245,00",
    items: ["Buquê de rosas", "Chocolates finos", "Vinho selecionado", "Vela aromática"],
    images: [basket41, basket42],
  },
  {
    category: "Lembrançinhas",
    name: "Lembrei de você",
    price: "R$ 180,00",
    items: ["Porta Jóias", "Porta perfumes", "Kit de autocuidado", "Copo personalizado"],
    images: [basket51, basket52, basket53],
  },
  {
    category: "Momentos Especiais",
    name: "Pausa & Carinho",
    price: "R$ 205,00",
    items: ["Chás selecionados", "Vela perfumada", "Biscoitos amanteigados", "Kit de autocuidado"],
    images: [basket61, basket62],
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cestas Personalizadas | Le Petit Presentes" },
      {
        name: "description",
        content:
          "Cestas personalizadas para aniversários, romance e datas especiais. Encomende pelo WhatsApp com a Le Petit Presentes.",
      },
      { property: "og:title", content: "Le Petit Presentes — Carinho em cada detalhe" },
      {
        property: "og:description",
        content:
          "Cestas personalizadas para transformar datas especiais em memórias inesquecíveis.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Brand() {
  return (
    <a
      href="#inicio"
      aria-label="Le Petit Presentes — início"
      className="flex flex-col items-center leading-none text-primary"
    >
      <span className="font-display text-[2rem] leading-6">Le Petit</span>
      <span className="mt-1 text-[0.62rem] font-bold uppercase tracking-[0.32em]">Presentes</span>
    </a>
  );
}

function ProductCard({ product }: { product: (typeof products)[number] }) {
  const [slide, setSlide] = useState(0);
  const touchStart = useRef<number | null>(null);
  const move = (next: number) => setSlide((next + product.images.length) % product.images.length);
  return (
    <article className="group overflow-hidden rounded-lg border border-border/70 bg-card shadow-card transition-transform duration-300 hover:-translate-y-1">
      <div
        className="relative aspect-[9/7] overflow-hidden bg-muted"
        onTouchStart={(e) => {
          touchStart.current = e.touches[0]?.clientX ?? null;
        }}
        onTouchEnd={(e) => {
          const end = e.changedTouches[0]?.clientX;
          if (
            touchStart.current !== null &&
            end !== undefined &&
            Math.abs(end - touchStart.current) > 45
          )
            move(slide + (end < touchStart.current ? 1 : -1));
        }}
      >
        <img
          src={product.images[slide]}
          alt={`${product.name} — foto ${slide + 1}`}
          width={900}
          height={700}
          loading="lazy"
          className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.025]"
        />
        <Button
          variant="elegant"
          size="icon"
          aria-label="Foto anterior"
          onClick={() => move(slide - 1)}
          className="absolute left-3 top-1/2 hidden -translate-y-1/2 rounded-full md:inline-flex"
        >
          <ChevronLeft />
        </Button>
        <Button
          variant="elegant"
          size="icon"
          aria-label="Próxima foto"
          onClick={() => move(slide + 1)}
          className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-full md:inline-flex"
        >
          <ChevronRight />
        </Button>
        <div
          className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2"
          aria-label={`Foto ${slide + 1} de ${product.images.length}`}
        >
          {product.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setSlide(index)}
              aria-label={`Ver foto ${index + 1}`}
              className={`h-2 rounded-full border border-background transition-all ${slide === index ? "w-5 bg-primary" : "w-2 bg-background/80"}`}
            />
          ))}
        </div>
      </div>
      <div className="p-6">
        <span className="inline-flex rounded-full bg-secondary px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-secondary-foreground">
          {product.category}
        </span>
        <h3 className="mt-4 font-display text-3xl text-foreground">{product.name}</h3>
        <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-2 text-sm text-muted-foreground">
          {product.items.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex items-end justify-between border-t border-border pt-5">
          <div>
            <span className="text-xs text-muted-foreground">Faça seu orçamento </span>
            {/* <p className="text-xl font-extrabold text-rose-deep">{product.price}</p> */}
          </div>
          <Button asChild variant="whatsapp">
            <a
              href={whatsappUrl(
                `Olá! Gostaria de pedir a cesta ${product.name}. Pode me passar mais detalhes?`,
              )}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle /> Pedir
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    ["Início", "#inicio"],
    ["Cestas", "#cestas"],
    ["Como funciona", "#como-funciona"],
    ["Contato", "#contato"],
  ];
  return (
    <main className="overflow-hidden bg-background">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-xl">
        <div className="mx-auto grid h-20 max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-5 lg:px-8">
          <Brand />
          <nav className="hidden items-center justify-center gap-7 lg:flex">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center justify-end gap-2">
            <Button asChild variant="ghost" size="icon" className="hidden sm:inline-flex">
              <a
                href="https://instagram.com/le_petit_presentes"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <Instagram />
              </a>
            </Button>
            <Button asChild variant="whatsapp" className="hidden sm:inline-flex">
              <a
                href={whatsappUrl("Olá! Gostaria de conhecer as cestas da Le Petit Presentes.")}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle /> WhatsApp
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {menuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        {menuOpen && (
          <nav className="border-t border-border bg-background px-5 py-5 lg:hidden">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-border py-3 font-semibold"
              >
                {label}
              </a>
            ))}
            <Button asChild variant="whatsapp" className="mt-5 w-full">
              <a
                href={whatsappUrl("Olá! Gostaria de conhecer as cestas da Le Petit Presentes.")}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle /> Falar no WhatsApp
              </a>
            </Button>
          </nav>
        )}
      </header>

      <section id="inicio" className="relative min-h-[780px] pt-20 lg:min-h-[760px]">
        <img
          src={heroImage}
          alt="Cesta Le Petit com flores, pães, frutas, café e chocolates"
          width={1600}
          height={1104}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-[64%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/92 to-background/5" />
        <div className="relative mx-auto flex min-h-[700px] max-w-7xl items-center px-5 py-16 lg:px-8">
          <div className="max-w-[640px]">
            <div className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-rose-deep">
              <Sparkles className="size-4 text-gold" /> Feito para emocionar
            </div>
            <h1 className="font-display text-5xl leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
              Presentes que transformam momentos em memórias.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg">
              Cestas personalizadas, preparadas com produtos selecionados e cada detalhe escolhido
              para contar a sua história.
            </p>
            <Button
              asChild
              variant="whatsapp"
              size="lg"
              className="mt-9 w-full shadow-soft sm:w-auto"
            >
              <a
                href={whatsappUrl(
                  "Olá! Quero fazer uma encomenda personalizada com a Le Petit Presentes.",
                )}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle /> Fazer encomenda via WhatsApp
              </a>
            </Button>
            <p className="mt-5 flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-whatsapp" /> Atendimento personalizado
            </p>
          </div>
        </div>
      </section>

      <section id="cestas" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
              Nosso catálogo
            </span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">Um carinho para cada ocasião</h2>
            <p className="mt-4 text-muted-foreground">
              Escolha uma inspiração e personalize cada detalhe com a gente.
            </p>
          </div>
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section id="como-funciona" className="bg-secondary/55 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
              Simples e especial
            </span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">Como funciona</h2>
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {[
              [
                ShoppingBasket,
                "01",
                "Escolha a sua cesta",
                "Encontre a cesta ideal no nosso catálogo.",
              ],
              [
                MessageCircle,
                "02",
                "Conte os detalhes",
                "Peça pelo WhatsApp e informe data e local de entrega.",
              ],
              [
                PackageCheck,
                "03",
                "Receba com carinho",
                "Sua cesta chega fresca e lindamente embalada no dia desejado.",
              ],
            ].map(([Icon, num, title, text]) => {
              const StepIcon = Icon as typeof ShoppingBasket;
              return (
                <div key={String(num)} className="text-center">
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-gold/50 bg-background text-primary shadow-soft">
                    <StepIcon />
                  </div>
                  <span className="mt-5 block text-xs font-extrabold tracking-[0.2em] text-gold">
                    PASSO {String(num)}
                  </span>
                  <h3 className="mt-2 font-display text-2xl">{String(title)}</h3>
                  <p className="mx-auto mt-3 max-w-xs leading-7 text-muted-foreground">
                    {String(text)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <footer id="contato" className="bg-foreground py-16 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-10 border-b border-primary-foreground/15 pb-12 md:grid-cols-[1.2fr_1fr_1fr]">
            <div className="max-w-sm">
              <div className="inline-flex rounded-md bg-background px-5 py-4">
                <Brand />
              </div>
              <p className="mt-5 leading-7 text-primary-foreground/70">
                Criamos presentes cheios de afeto para tornar cada celebração ainda mais
                inesquecível.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl">Entregas & pedidos</h3>
              <p className="mt-4 flex items-start gap-3 text-sm leading-6 text-primary-foreground/70">
                <MapPin className="mt-1 size-4 shrink-0 text-gold" /> Atendemos bairros
                selecionados. Consulte a disponibilidade para o seu endereço.
              </p>
              <p className="mt-3 flex items-start gap-3 text-sm leading-6 text-primary-foreground/70">
                <Gift className="mt-1 size-4 shrink-0 text-gold" /> Recomendamos fazer seu pedido
                com antecedência.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl">Fale com a gente</h3>
              <a
                href="https://instagram.com/le_petit_presentes"
                target="_blank"
                rel="noreferrer"
                className="mt-4 flex items-center gap-3 text-sm text-primary-foreground/75 hover:text-primary-foreground"
              >
                <Instagram className="size-5 text-gold" /> @le_petit_presentes
              </a>
              <a
                href={whatsappUrl("Olá! Gostaria de falar com a Le Petit Presentes.")}
                target="_blank"
                rel="noreferrer"
                className="mt-4 flex items-center gap-3 text-sm text-primary-foreground/75 hover:text-primary-foreground"
              >
                <MessageCircle className="size-5 text-whatsapp" /> +55 98 92007-4977
              </a>
            </div>
          </div>
          <p className="pt-7 text-center text-xs text-primary-foreground/45">
            © 2026 Le Petit Presentes. Feito com carinho.
          </p>
        </div>
      </footer>
    </main>
  );
}
