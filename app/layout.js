import "./globals.css";

export const metadata = {
  title: "Harare Realty Partners",
  description: "Find your home in Harare. Trusted real estate brokerage serving local and diaspora buyers across Borrowdale, Highlands, Avondale and beyond.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
