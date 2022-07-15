import Head from "next/head";
import Header from "./Header";

export default function Layout({ children, pageTitle }) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta charset="UTF-8" />
        <meta name="description" content="Instagram Bis" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Header />
      <div>
        <main className="mt-20 ml-[10%] w-[100vw]">{children}</main>
      </div>
    </>
  );
}
