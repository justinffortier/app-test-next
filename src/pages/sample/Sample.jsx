import Head from 'next/head';

const Sample = ({ data }) => (
  <>
    <Head>
      <title>{data.title}</title>
      <meta name="description" content={data.metaDescription} />
      <meta property="og:description" content={data.metaDescription} />
      <meta property="og:title" content={data.title} />
      {data.keywords.map(keyword => (
        <meta key={keyword} name="keywords" content={keyword} />
      ))}
    </Head>
    <div className="text-primary">{data?.headline}</div>
  </>
);

export default Sample;
