
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <h2>Featured products</h2>
      </body>
    </html>
  );
}
