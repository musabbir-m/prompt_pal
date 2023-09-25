import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "Promptpal",
  description: "Share your awesome prompt",
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
      </body>
      <main className="app">
        <Nav />
        {children}
      </main>
    </html>
  );
};

export default RootLayout;
