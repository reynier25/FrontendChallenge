import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { useState } from 'react';

export default function Home() {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        {!first && (
          <>
            <div>PIZZA</div>
            <button onClick={() => setSecond(true)}>First button</button>
          </>
        )}
        {second && (
          <>
            <div>BURGER</div>
            <button onClick={() => setThird(true)}>Second button</button>
          </>
        )}
        {third && (
          <>
            <div>HOT DOG</div>
            <button onClick={() => setFourth(true)}>Third button</button>
          </>
        )}
      </section>
    </Layout>
  );
}
