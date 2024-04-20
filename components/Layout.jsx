import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      {/* metadata */}
      <Head>
        <title>I tec web</title>
        <meta
          name="description"
          content="Itecweb est une agence digitale spécialisée dans la création de sites web et le marketing digital. Notre équipe dévouée transforme vos idées en réalités digitales concrètes. Nous proposons des solutions personnalisées pour répondre à vos besoins spécifiques et vous aider à atteindre vos objectifs en ligne. Faites confiance à Itecweb pour propulser votre présence digitale vers de nouveaux sommets."
        />
        <meta
          name="keywords"
          content="digital marketing, marketing numérique, branding, marque, design, conception, development, développement, copywriting, rédaction, SEO, référencement, online presence, présence en ligne, website design, conception de site web, social media marketing, marketing sur les réseaux sociaux, PPC advertising, publicité au paiement par clic, content marketing, marketing de contenu, email marketing, marketing par email, online visibility, visibilité en ligne, customer engagement, engagement client, testimonials, témoignages, about us, à propos de nous, services, services, contact us, nous contacter, portfolio, portefeuille"
        />
        <meta name="author" content="Itecweb" />
        <meta name="theme-color" content="#51ADE5" />
      </Head>

      <TopLeftImg />
      <Nav />
      <Header />

      {/* main content */}
      {children}
    </main>
  );
};

export default Layout;
