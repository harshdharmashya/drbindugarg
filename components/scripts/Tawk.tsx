import Script from 'next/script';

const Tawk = () => {
  return (
    <Script type='text/javascript' strategy='afterInteractive'>
      {`
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
          var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
          s1.async=true;
          s1.src='https://embed.tawk.to/63ecc6b2c2f1ac1e20336714/1gpaegaig';
          s1.charset='UTF-8';
          s1.setAttribute('crossorigin','*');
          s0.parentNode.insertBefore(s1,s0);
          })();
      `}
    </Script>
  );
};

export default Tawk;
