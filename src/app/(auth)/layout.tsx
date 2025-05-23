
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <footer 
        style={{
            backgroundColor: "ghostwhite",
            padding: "1rem"
        }}
        >
            <h1>Footer</h1>
        </footer>
      </body>
    </html>
  );
}
