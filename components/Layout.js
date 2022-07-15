import Head from "next/head";

export default function Layout({ children, pageTitle }) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta charset="UTF-8" />
        <meta name="description" content="Twitter Bis" />
        <link rel="icon" href="/lune2.png" />
      </Head>
      <div>
        <main className="mt-20 ml-[10%] w-[100vw]">{children}</main>
      </div>
    </>
  );
}
