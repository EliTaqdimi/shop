

import Container from "../../componenets/container/Container";
import Footer from "../../componenets/footer/Footer";

function Home() {
  return (
    <>
      <div className='mb-64'>
        <Container>
          <h1 className='text-5xl text-right text-black mt-20 font-serif'>فروشگاه آنلاین</h1>
          <img src="https://tse4.mm.bing.net/th?id=OIP.AYduB4Ezfcu7TRgurIMIdAHaEH&pid=Api&P=0&h=1980 " alt='' className='mt-12 w-full ' />
          <h2 className='text-2xl text-right text-black m-10 font-serif'>
            به فروشگاه آنلاین ما خوش آمدید<br />
            بهترین محصولات با بهترین قیمت‌ها!
            در فروشگاه آنلاین ما، می‌توانید انواع محصولات مورد نیاز خود را با قیمت‌های ویژه و تخفیف‌های استثنایی خریداری کنید. تجربه خرید آسان و سریع، پرداخت امن، و ارسال سریع به سراسر کشور را با ما تجربه کنید. از تخفیف‌های ویژه ما استفاده کنید و لذت خرید آنلاین را به نهایت برسانید<br />

            مزایای خرید از فروشگاه ما:
            محصولات باکیفیت و متنوع
            ارسال سریع به تمامی نقاط کشور
            تخفیف‌های جذاب و مناسبتی
            پشتیبانی ۲۴ ساعته
            همین حالا سفارش دهید و از تخفیف‌های ویژه بهره‌مند شوید
          </h2>

        </Container>
      </div>
      <Footer />
    </>
  );
}
export default Home;