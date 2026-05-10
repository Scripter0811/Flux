import React from "react";
import "./globals.css";

export const metadata = {
  title: "Flux",
  description: "Your modern corporate hub.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          background: "#0d0d0d",
          color: "white",
          fontFamily: "Segoe UI, sans-serif",
        }}
      >
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px",
            background: "#111",
            borderBottom: "1px solid #222",
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 700 }}>Flux</div>

          <nav style={{ display: "flex", gap: "20px" }}>
            <a href="/" style={{ color: "white", textDecoration: "none" }}>Home</a>
            <a href="/about" style={{ color: "white", textDecoration: "none" }}>About</a>
            <a href="/projects" style={{ color: "white", textDecoration: "none" }}>Projects</a>
            <a href="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</a>
          </nav>
        </header>

        <main style={{ padding: "20px" }}>{children}</main>
      </body>
    </html>
  );
}
