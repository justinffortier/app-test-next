import Head from 'next/head';

const ContentWrapper = ({
  children,
  className,
  style,
  title = 'YOUR APP TITLE TODO',
  description = 'YOUR APP DESCRIPTION TODO',
  as: Component = 'main',
}) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Component
      className={className || ''}
      style={style}
    >
      {children}
    </Component>
  </>
);

export default ContentWrapper;
