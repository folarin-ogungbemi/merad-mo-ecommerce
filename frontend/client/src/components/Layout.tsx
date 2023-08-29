import {Helmet} from 'react-helmet'
import {ReactNode} from 'react'
import Header from '../components/Header'

interface LayoutProps {
  title: string,
  content: string,
  children: ReactNode
}


const Layout= ({title, content, children }: LayoutProps) => {

  return (
    <>
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={content} />
        </Helmet>
        <Header />
        <div>{children}</div>
    </>
  )
}

export default Layout;