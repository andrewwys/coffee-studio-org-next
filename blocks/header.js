import Link from 'next/link'

const Header = () => {
  return (
    <header>
      <nav className="nav">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/product-preview">
          <a>Products</a>
        </Link>
      </nav>
      <style jsx>{`
        nav {
          display: flex;
        }
        a {
          margin: 10px 5px;
        }
      `}</style>
    </header>
  );
}

export default Header;