import NavBar from './NavBar';
import FooterNav from './FooterNav';

interface ILayout {
  children: React.ReactNode;
}

function Layout({ children }: ILayout) {
  return (
    <>
      <NavBar />
      {children}
      <FooterNav />
    </>
  );
}

export default Layout;
