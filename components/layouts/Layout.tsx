
import Header from "./Navbar";

export default function Layout({ children}:any) {

  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
}
