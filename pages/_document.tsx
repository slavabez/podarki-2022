import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script type="text/javascript" dangerouslySetInnerHTML={{
            __html: `
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
            ym(${process.env.NEXT_PUBLIC_YANDEX_ANALYTICS}, "init", {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true
          });
            `
          }} >

          </script>
        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    )
  }
}
