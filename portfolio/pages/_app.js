import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import ThemeProvider from "@/components/ThemeProvider";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="pt-24 px-6 max-w-5xl mx-auto">
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
