import Link from 'next/link'
import Head from 'next/head'
import RightNav from '../RightNav'
import Header from '../Header'

export default ({ children, title = 'This is the default title' }: any) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header>
      <nav>
        <Link href='/'><a>Home</a></Link> |
        <Link href='/about'><a>About</a></Link> |
        <Link href='/contact'><a>Contact</a></Link>
      </nav>
    </header>
    <Header></Header>
    <RightNav></RightNav>
    {children}

  </div>
)