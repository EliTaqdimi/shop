function Footer() {
  return (
    <div className="bg-slate-800 text-white py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* ستون اول: متن و توضیحات */}
        <div className="flex-1 mb-4 md:mb-0 md:w-1/2 justify-center">
          <h1 className="text-xl font-bold mb-2 text-right ">فروشگاه اینترنتی، بررسی، انتخاب و خرید آنلاین</h1>
          <p className="text-base leading-relaxed text-right">
            یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمان ی کوتاه به دست مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی که فروشگاه اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار کرده و توانسته از این طریق مشتریان ثابت خود را داشته باشد.
          </p>
        </div>
        {/* ستون دوم: تماس با ما و حقوق */}
        <div className="flex flex-col items-start md:items-end md:w-1/2">
          <p className="text-sm mb-2">&copy; {new Date().getFullYear()} تمامی حقوق محفوظ است</p>
          <a href="#contact" className="text-sky-400 hover:underline">تماس با ما</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
