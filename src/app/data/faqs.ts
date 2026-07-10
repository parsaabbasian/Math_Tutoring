export interface FaqItem {
  q: string;
  a: string;
}

// Shared FAQ content used by both the landing-page preview and the full /faq page.
export const faqs: { en: FaqItem[]; fa: FaqItem[] } = {
  en: [
    {
      q: "What are your qualifications?",
      a: "I'm an engineering student at York University and a graduate of the Ontario Secondary School Diploma (OSSD) program, so I'm fully familiar with the Canadian math curriculum and how it's taught at every grade level. I have hands-on experience tutoring students privately from elementary through high school.",
    },
    {
      q: "How long before I see improvement?",
      a: "Every student is different, but most families notice a shift in confidence and comprehension within the first few sessions. Real, lasting improvement (better grades and less anxiety around math) typically builds over 4 to 6 weeks of consistent lessons.",
    },
    {
      q: "What grades do you tutor?",
      a: "I work with students from elementary school through high school, covering the full range of the Ontario math curriculum.",
    },
    {
      q: "How does online tutoring work?",
      a: "Lessons take place over video call using a shared digital whiteboard, so your child can follow along, ask questions, and work through problems in real time, just like an in-person lesson.",
    },
    {
      q: "Do you offer a free trial?",
      a: "Every new student starts with a free 15-minute introduction meeting (a chance for me to meet your child, learn about their current level and goals, and for us to see if the connection feels right). If you'd like to continue after that, the first full session is just $15 and is held online (even if you plan to continue with in-person classes), so your child can experience a real lesson before you commit to anything further.",
    },
    {
      q: "Do you provide homework help?",
      a: "Yes. In addition to core lessons, I can help your child work through school assignments and prepare for upcoming tests and exams.",
    },
  ],
  fa: [
    {
      q: "مدارک و سوابق شما چیست؟",
      a: "من دانشجوی مهندسی در دانشگاه یورک و فارغ‌التحصیل برنامه دیپلم متوسطه انتاریو (OSSD) هستم، بنابراین با برنامه درسی ریاضی کانادا و نحوه تدریس آن در همه پایه‌ها کاملاً آشنا هستم. تجربه عملی تدریس خصوصی به دانش‌آموزان از دبستان تا دبیرستان را دارم.",
    },
    {
      q: "چقدر طول می‌کشد تا بهبود را ببینم؟",
      a: "هر دانش‌آموزی متفاوت است، اما بیشتر خانواده‌ها در همان چند جلسه اول تغییری در اعتماد به نفس و درک مطلب احساس می‌کنند. بهبود واقعی و ماندگار (نمرات بهتر و اضطراب کمتر نسبت به ریاضی) معمولاً طی ۴ تا ۶ هفته کلاس منظم شکل می‌گیرد.",
    },
    {
      q: "با چه پایه‌هایی کار می‌کنید؟",
      a: "با دانش‌آموزان از دبستان تا دبیرستان کار می‌کنم و کل برنامه درسی ریاضی انتاریو را پوشش می‌دهم.",
    },
    {
      q: "تدریس آنلاین چگونه کار می‌کند؟",
      a: "کلاس‌ها از طریق تماس ویدیویی و با استفاده از تخته دیجیتال مشترک برگزار می‌شوند، بنابراین فرزند شما می‌تواند همراهی کند، سؤال بپرسد و مسائل را به‌صورت زنده حل کند، درست مثل کلاس حضوری.",
    },
    {
      q: "آیا جلسه آزمایشی رایگان دارید؟",
      a: "هر دانش‌آموز جدید با یک جلسه آشنایی رایگان ۱۵ دقیقه‌ای شروع می‌کند (فرصتی برای آشنایی من با فرزند شما، شناخت سطح و اهداف فعلی او، و اینکه ببینیم ارتباط مناسبی شکل می‌گیرد یا نه). اگر بعد از آن بخواهید ادامه دهید، اولین جلسه کامل فقط ۱۵ دلار است و به‌صورت آنلاین برگزار می‌شود (حتی اگر قصد ادامه به‌صورت حضوری را داشته باشید) تا فرزندتان پیش از هر تعهدی، یک درس واقعی را تجربه کند.",
    },
    {
      q: "آیا در انجام تکالیف هم کمک می‌کنید؟",
      a: "بله. علاوه بر کلاس‌های اصلی، می‌توانم به فرزند شما در انجام تکالیف مدرسه و آمادگی برای امتحان‌ها و آزمون‌های پیش رو کمک کنم.",
    },
  ],
};
