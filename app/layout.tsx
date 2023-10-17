async function getSiteOptions<T>(): Promise<T> {
  const res = await fetch("https://catfact.ninja/fact", {
    next: {
      revalidate: 2,
    },
  });

  if (!res.ok) {
    throw new Error("getSiteOptions");
  }

  return res.json();
}

export default async function RootLayout({ children }) {
  const data = await getSiteOptions();
  console.log({ data });
  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  );
}
