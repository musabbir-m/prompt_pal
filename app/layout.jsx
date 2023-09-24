import "@styles/globals.css";

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
      <main className="app">{children}</main>
    </html>
  );
};

export default RootLayout;
