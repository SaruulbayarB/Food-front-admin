import { FoodProvider } from "./_providers/FoodProvider";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <FoodProvider>
        <body>{children}</body>
        <div>{foods.name}</div>
      </FoodProvider>
    </html>
  );
}
