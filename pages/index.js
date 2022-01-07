/*import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts';
import utilStyles from '../styles/utils.module.css';*/

import { useState } from "react"
import indexStyles from '../styles/index.module.css';

const Home = () => {
  const formDataInit = {
    cert: null,
    document: null,
    password: ''
  }

  const [formData, setFormData] = useState(formDataInit)
  const printText = (e) => {
    e.preventDefault()
    e.stopPropagation()
    
  }
  const handleFormChange = (e) => {
    console.log(e)
    setFormData({
      ...formData,
      [e.target.name]: e.target.value || e.target.files[0]
    })
  }

  const { document, password, cert } = formData
  return (
    <form onSubmit={(event) => printText(event)} className={indexStyles.sign_form}>
      <div className={indexStyles.form_controls}>
        <label>Documento</label>
        <input type="file" name="document" onChange={(e) => handleFormChange(e)} value={document} accept=".pdf"/>
        <small>Documeto .pdf que desea firmar</small>
      </div>
      <div className={indexStyles.form_controls}>
        <label>Certificado</label>
        <input type="file" name="cert" onChange={(e) => handleFormChange(e)} value={cert} accept=".p12"/>
        <small>Llave publica para firmas digitales .p12</small>
      </div>
      <div className={indexStyles.form_controls}>
        <label>Contrasenna</label>
        <input type="password" name="password" onChange={(e) => handleFormChange(e)} value={password}/>
        <small>Contrasenna de su certificado digital para realizar la firma</small>
      </div>
      <input type="submit"/>
    </form>
    /*<Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>*/
  )
}

/* export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
} */

export default Home