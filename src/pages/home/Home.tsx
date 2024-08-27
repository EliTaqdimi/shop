

import Container from "../../componenets/container/Container";
import Footer from "../../componenets/footer/Footer";

function Home() {
  return (
    <>
      <div className='mb-64'>
        <Container>
          <h1 className='text-6xl text-right text-black mt-20'>مسئله‌ی مهم­‌ در خرید وسایل آشپزخانه</h1>
          <img src="https://www.chidaneh.com/cdn/api/images/2023/06/1-1-1.jpg" alt='' className='mt-12 w-full' />
          <h2 className='text-2xl text-right text-black m-10'>
            مسئله‌ی مهم­‌ در خرید وسایل آشپزخانه، توجه به مواردی مانند مساحت فضای آشپزخانه و همچنین میزان استفاده از وسایل است. درنتیجه لازم نیست همه­‌ی لوازمی که در لیست وسایل برقی آشپزخانه آمده است را خریداری کنید. در ادامه وسایل برقی جهیزیه که ضروری هستند معرفی می‌شوند.
          </h2>

        </Container>
      </div>
      <Footer />
    </>
  );
}
export default Home;