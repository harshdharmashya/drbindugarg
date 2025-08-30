import Script from 'next/script';

const GoogleAnalyticsCode = ({ id, tagId }: { id: string; tagId: string }) => {
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${tagId}`} strategy='afterInteractive' />
      <Script id={`google-${id}`} strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${tagId}');
        `}
      </Script>
    </>
  );
};

export default GoogleAnalyticsCode;
