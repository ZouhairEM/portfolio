import NavBar from './NavBar';
import FooterNav from './FooterNav';

interface ILayout {
  children: React.ReactNode;
}

function Layout({ children }: ILayout) {
  return (
    <div>
      <NavBar />
      {children}
      <FooterNav />
    </div>
  );
}

export default Layout;
