import type { Metadata } from "next";
import ProviderRedux from "./Store/Provider";
import Header from "./Component/Header/index";
import { Raleway } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import moment from "moment";
import { img } from "@/app/Utils/img";
import "./globals.css";
import "./globals.icon.css";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rosy Mihigo Mbala",
  description:
    "L'enseignement est un pilier fondamental pour le développement individuel et collectif, façonnant les esprits, guidant les valeurs et ouvrant des horizons pour un avenir meilleur.",
  openGraph: {
    title: "Rosy Mihigo Mbala",
    description:
      "L'enseignement est un pilier fondamental pour le développement individuel et collectif, façonnant les esprits, guidant les valeurs et ouvrant des horizons pour un avenir meilleur.",
    images: [img("File/seo_/pasteur-rosy.png")],
  },
};

moment.locale("fr");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader
          color="#f8b83f"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
        />
        <div className={raleway.className}>
          <ProviderRedux>
            <Header />
            {children}
          </ProviderRedux>
        </div>
      </body>
    </html>
  );
}
