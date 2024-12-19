import React from "react";
import { useParams } from "react-router-dom";

// Data Dummy
const articles = [
  {
    id: 1,
    image: "/images/artikel1.jpg",
    title: "Mengembangkan Kebun Stroberi sebagai Destinasi Wisata Edukasi",
    date: "18 November 2024",
    author: "Admin BerryBedugul",
    content: [
      {
        type: "paragraph",
        text: `Kebun stroberi kini menjadi salah satu destinasi wisata yang banyak diminati,
        terutama bagi mereka yang ingin merasakan pengalaman berbeda dalam berlibur.
        Tidak hanya menawarkan pemandangan indah, kebun stroberi juga memberikan nilai edukasi,
        rekreasi, dan peluang ekonomi bagi para pengelolanya.`,
      },
      {
        type: "subheading",
        text: "Mengapa Stroberi?",
      },
      {
        type: "paragraph",
        text: `Stroberi merupakan buah yang digemari oleh berbagai kalangan karena rasanya yang manis
        dan asam segar serta kandungan nutrisinya yang kaya, seperti vitamin C, serat, dan antioksidan.
        Budidaya stroberi juga relatif fleksibel dan dapat dilakukan di berbagai ketinggian,
        meskipun hasil terbaik biasanya dicapai di daerah dataran tinggi dengan suhu sejuk.`,
      },
      {
        type: "listWithParagraphs",
        text: "Manfaat Stroberi",
        listWithParagraphs: [
          {
            title: "Edukasi tentang Pertanian",
            description: `Kebun stroberi bisa menjadi tempat belajar yang menarik, baik untuk anak-anak 
            maupun orang dewasa. Pengunjung dapat mempelajari teknik bercocok tanam, pengelolaan tanaman, 
            hingga panen stroberi secara langsung. Aktivitas ini sangat bermanfaat untuk meningkatkan 
            kesadaran masyarakat tentang pentingnya pertanian.`,
          },
          {
            title: "Rekreasi yang Menyenangkan",
            description: `Memetik stroberi langsung dari kebun menjadi daya tarik utama. Aktivitas ini 
            menawarkan pengalaman unik dan menyenangkan, terutama bagi keluarga dengan anak-anak. Selain 
            itu, keindahan kebun yang tertata rapi sering dijadikan lokasi favorit untuk berfoto.`,
          },
          {
            title: "Pemberdayaan Ekonomi Lokal",
            description: `Wisata kebun stroberi dapat membuka peluang usaha bagi masyarakat setempat, 
            seperti penjualan produk olahan stroberi (selai, jus, kue), penyediaan homestay, hingga pengembangan 
            kuliner lokal di sekitar kawasan wisata.`,
          },
        ],
      },
      {
        type: "subheading",
        text: "Kesimpulan",
        paragraphs: [
          `Wisata kebun stroberi tidak hanya memberikan hiburan bagi pengunjung tetapi juga mendukung
          pelestarian pertanian dan pemberdayaan ekonomi lokal. Dengan pengelolaan yang baik,
          kebun stroberi bisa menjadi destinasi wisata edukasi yang diminati banyak orang.`,
          `Apakah Anda tertarik untuk mengunjungi kebun stroberi atau bahkan membuka kebun stroberi sendiri? 
          Mari manfaatkan peluang ini untuk menciptakan pengalaman wisata yang menarik dan berkelanjutan!`,
        ],
      },
    ],
  },
  {
    id: 2,
    image: "/images/artikel2.jpg",
    title:
      "Keindahan dan Potensi Kebun Stroberi: Wisata Agro yang Edukatif dan Rekreatif",
    date: "27 November 2024",
    author: "Admin Berry Bedugul",
    content: [
      {
        type: "paragraph",
        text: `Kebun stroberi adalah destinasi wisata yang menawarkan pengalaman unik bagi pengunjung untuk menikmati 
        keindahan alam sekaligus belajar tentang budidaya tanaman stroberi. Di Indonesia, kebun stroberi tidak hanya 
        menjadi daya tarik bagi pecinta alam dan buah-buahan segar, tetapi juga menjadi peluang besar untuk 
        meningkatkan ekonomi lokal melalui wisata agro.  `,
      },
      {
        type: "subheading",
        text: "Keistimewaan Kebun Stroberi",
      },
      {
        type: "paragraph",
        text: `Stroberi dikenal sebagai buah yang segar, manis, dan sedikit asam, dengan warna merah cerah yang menggoda. 
        Selain rasanya yang lezat, stroberi kaya akan vitamin C, serat, dan antioksidan. Mengunjungi kebun stroberi 
        memberikan pengalaman istimewa, di mana pengunjung dapat memetik langsung buah segar dari pohonnya. Aktivitas ini 
        sangat digemari oleh keluarga, pasangan muda, dan anak-anak karena memberikan pengalaman yang menyenangkan 
        sekaligus edukatif.`,
      },
      {
        type: "listWithParagraphs",
        text: "Manfaat Wisata ke Kebun Stroberi",
        listWithParagraphs: [
          {
            title: "Rekreasi Keluarga",
            description: `Kebun stroberi sering kali menyediakan area rekreasi yang cocok untuk keluarga. 
            Suasana yang sejuk dan pemandangan hijau memberikan efek relaksasi yang menyenangkan.  `,
          },
          {
            title: "Rekreasi yang Menyenangkan",
            description: `Memetik stroberi langsung dari kebun menjadi daya tarik utama. Aktivitas ini 
            menawarkan pengalaman unik dan menyenangkan, terutama bagi keluarga dengan anak-anak. Selain 
            itu, keindahan kebun yang tertata rapi sering dijadikan lokasi favorit untuk berfoto.`,
          },
          {
            title: "Pemberdayaan Ekonomi Lokal",
            description: `Wisata kebun stroberi dapat membuka peluang usaha bagi masyarakat setempat, 
            seperti penjualan produk olahan stroberi (selai, jus, kue), penyediaan homestay, hingga pengembangan 
            kuliner lokal di sekitar kawasan wisata.`,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    image: "/images/artikel_petik_jpg",
    title:
      "Keindahan dan Potensi Kebun Stroberi: Wisata Agro yang Edukatif dan Rekreatif",
    date: "27 November 2024",
    author: "Admin Berry Bedugul",
    content: [
      {
        type: "paragraph",
        text: `Kebun stroberi adalah destinasi wisata yang menawarkan pengalaman unik bagi pengunjung untuk menikmati 
        keindahan alam sekaligus belajar tentang budidaya tanaman stroberi. Di Indonesia, kebun stroberi tidak hanya 
        menjadi daya tarik bagi pecinta alam dan buah-buahan segar, tetapi juga menjadi peluang besar untuk 
        meningkatkan ekonomi lokal melalui wisata agro.  `,
      },
      {
        type: "subheading",
        text: "Keistimewaan Kebun Stroberi",
      },
      {
        type: "paragraph",
        text: `Stroberi dikenal sebagai buah yang segar, manis, dan sedikit asam, dengan warna merah cerah yang menggoda. 
        Selain rasanya yang lezat, stroberi kaya akan vitamin C, serat, dan antioksidan. Mengunjungi kebun stroberi 
        memberikan pengalaman istimewa, di mana pengunjung dapat memetik langsung buah segar dari pohonnya. Aktivitas ini 
        sangat digemari oleh keluarga, pasangan muda, dan anak-anak karena memberikan pengalaman yang menyenangkan 
        sekaligus edukatif.`,
      },
      {
        type: "listWithParagraphs",
        text: "Manfaat Wisata ke Kebun Stroberi",
        listWithParagraphs: [
          {
            title: "Rekreasi Keluarga",
            description: `Kebun stroberi sering kali menyediakan area rekreasi yang cocok untuk keluarga. 
            Suasana yang sejuk dan pemandangan hijau memberikan efek relaksasi yang menyenangkan.  `,
          },
          {
            title: "Rekreasi yang Menyenangkan",
            description: `Memetik stroberi langsung dari kebun menjadi daya tarik utama. Aktivitas ini 
            menawarkan pengalaman unik dan menyenangkan, terutama bagi keluarga dengan anak-anak. Selain 
            itu, keindahan kebun yang tertata rapi sering dijadikan lokasi favorit untuk berfoto.`,
          },
          {
            title: "Pemberdayaan Ekonomi Lokal",
            description: `Wisata kebun stroberi dapat membuka peluang usaha bagi masyarakat setempat, 
            seperti penjualan produk olahan stroberi (selai, jus, kue), penyediaan homestay, hingga pengembangan 
            kuliner lokal di sekitar kawasan wisata.`,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    image: "/images/artikel_cara.png",
    title:
      "Keindahan dan Potensi Kebun Stroberi: Wisata Agro yang Edukatif dan Rekreatif",
    date: "27 November 2024",
    author: "Admin Berry Bedugul",
    content: [
      {
        type: "paragraph",
        text: `Kebun stroberi adalah destinasi wisata yang menawarkan pengalaman unik bagi pengunjung untuk menikmati 
        keindahan alam sekaligus belajar tentang budidaya tanaman stroberi. Di Indonesia, kebun stroberi tidak hanya 
        menjadi daya tarik bagi pecinta alam dan buah-buahan segar, tetapi juga menjadi peluang besar untuk 
        meningkatkan ekonomi lokal melalui wisata agro.  `,
      },
      {
        type: "subheading",
        text: "Keistimewaan Kebun Stroberi",
      },
      {
        type: "paragraph",
        text: `Stroberi dikenal sebagai buah yang segar, manis, dan sedikit asam, dengan warna merah cerah yang menggoda. 
        Selain rasanya yang lezat, stroberi kaya akan vitamin C, serat, dan antioksidan. Mengunjungi kebun stroberi 
        memberikan pengalaman istimewa, di mana pengunjung dapat memetik langsung buah segar dari pohonnya. Aktivitas ini 
        sangat digemari oleh keluarga, pasangan muda, dan anak-anak karena memberikan pengalaman yang menyenangkan 
        sekaligus edukatif.`,
      },
      {
        type: "listWithParagraphs",
        text: "Manfaat Wisata ke Kebun Stroberi",
        listWithParagraphs: [
          {
            title: "Rekreasi Keluarga",
            description: `Kebun stroberi sering kali menyediakan area rekreasi yang cocok untuk keluarga. 
            Suasana yang sejuk dan pemandangan hijau memberikan efek relaksasi yang menyenangkan.  `,
          },
          {
            title: "Rekreasi yang Menyenangkan",
            description: `Memetik stroberi langsung dari kebun menjadi daya tarik utama. Aktivitas ini 
            menawarkan pengalaman unik dan menyenangkan, terutama bagi keluarga dengan anak-anak. Selain 
            itu, keindahan kebun yang tertata rapi sering dijadikan lokasi favorit untuk berfoto.`,
          },
          {
            title: "Pemberdayaan Ekonomi Lokal",
            description: `Wisata kebun stroberi dapat membuka peluang usaha bagi masyarakat setempat, 
            seperti penjualan produk olahan stroberi (selai, jus, kue), penyediaan homestay, hingga pengembangan 
            kuliner lokal di sekitar kawasan wisata.`,
          },
        ],
      },
    ],
  },
  {
    id: 5,
    image: "/images/artikel_manfaat.png",
    title:
      "Keindahan dan Potensi Kebun Stroberi: Wisata Agro yang Edukatif dan Rekreatif",
    date: "27 November 2024",
    author: "Admin Berry Bedugul",
    content: [
      {
        type: "paragraph",
        text: `Kebun stroberi adalah destinasi wisata yang menawarkan pengalaman unik bagi pengunjung untuk menikmati 
        keindahan alam sekaligus belajar tentang budidaya tanaman stroberi. Di Indonesia, kebun stroberi tidak hanya 
        menjadi daya tarik bagi pecinta alam dan buah-buahan segar, tetapi juga menjadi peluang besar untuk 
        meningkatkan ekonomi lokal melalui wisata agro.  `,
      },
      {
        type: "subheading",
        text: "Keistimewaan Kebun Stroberi",
      },
      {
        type: "paragraph",
        text: `Stroberi dikenal sebagai buah yang segar, manis, dan sedikit asam, dengan warna merah cerah yang menggoda. 
        Selain rasanya yang lezat, stroberi kaya akan vitamin C, serat, dan antioksidan. Mengunjungi kebun stroberi 
        memberikan pengalaman istimewa, di mana pengunjung dapat memetik langsung buah segar dari pohonnya. Aktivitas ini 
        sangat digemari oleh keluarga, pasangan muda, dan anak-anak karena memberikan pengalaman yang menyenangkan 
        sekaligus edukatif.`,
      },
      {
        type: "listWithParagraphs",
        text: "Manfaat Wisata ke Kebun Stroberi",
        listWithParagraphs: [
          {
            title: "Rekreasi Keluarga",
            description: `Kebun stroberi sering kali menyediakan area rekreasi yang cocok untuk keluarga. 
            Suasana yang sejuk dan pemandangan hijau memberikan efek relaksasi yang menyenangkan.  `,
          },
          {
            title: "Rekreasi yang Menyenangkan",
            description: `Memetik stroberi langsung dari kebun menjadi daya tarik utama. Aktivitas ini 
            menawarkan pengalaman unik dan menyenangkan, terutama bagi keluarga dengan anak-anak. Selain 
            itu, keindahan kebun yang tertata rapi sering dijadikan lokasi favorit untuk berfoto.`,
          },
          {
            title: "Pemberdayaan Ekonomi Lokal",
            description: `Wisata kebun stroberi dapat membuka peluang usaha bagi masyarakat setempat, 
            seperti penjualan produk olahan stroberi (selai, jus, kue), penyediaan homestay, hingga pengembangan 
            kuliner lokal di sekitar kawasan wisata.`,
          },
        ],
      },
    ],
  },
  {
    id: 6,
    image: "/images/artikel6.jpg",
    title:
      "Keindahan dan Potensi Kebun Stroberi: Wisata Agro yang Edukatif dan Rekreatif",
    date: "27 November 2024",
    author: "Admin Berry Bedugul",
    content: [
      {
        type: "paragraph",
        text: `Kebun stroberi adalah destinasi wisata yang menawarkan pengalaman unik bagi pengunjung untuk menikmati 
        keindahan alam sekaligus belajar tentang budidaya tanaman stroberi. Di Indonesia, kebun stroberi tidak hanya 
        menjadi daya tarik bagi pecinta alam dan buah-buahan segar, tetapi juga menjadi peluang besar untuk 
        meningkatkan ekonomi lokal melalui wisata agro.  `,
      },
      {
        type: "subheading",
        text: "Keistimewaan Kebun Stroberi",
      },
      {
        type: "paragraph",
        text: `Stroberi dikenal sebagai buah yang segar, manis, dan sedikit asam, dengan warna merah cerah yang menggoda. 
        Selain rasanya yang lezat, stroberi kaya akan vitamin C, serat, dan antioksidan. Mengunjungi kebun stroberi 
        memberikan pengalaman istimewa, di mana pengunjung dapat memetik langsung buah segar dari pohonnya. Aktivitas ini 
        sangat digemari oleh keluarga, pasangan muda, dan anak-anak karena memberikan pengalaman yang menyenangkan 
        sekaligus edukatif.`,
      },
      {
        type: "listWithParagraphs",
        text: "Manfaat Wisata ke Kebun Stroberi",
        listWithParagraphs: [
          {
            title: "Rekreasi Keluarga",
            description: `Kebun stroberi sering kali menyediakan area rekreasi yang cocok untuk keluarga. 
            Suasana yang sejuk dan pemandangan hijau memberikan efek relaksasi yang menyenangkan.  `,
          },
          {
            title: "Rekreasi yang Menyenangkan",
            description: `Memetik stroberi langsung dari kebun menjadi daya tarik utama. Aktivitas ini 
            menawarkan pengalaman unik dan menyenangkan, terutama bagi keluarga dengan anak-anak. Selain 
            itu, keindahan kebun yang tertata rapi sering dijadikan lokasi favorit untuk berfoto.`,
          },
          {
            title: "Pemberdayaan Ekonomi Lokal",
            description: `Wisata kebun stroberi dapat membuka peluang usaha bagi masyarakat setempat, 
            seperti penjualan produk olahan stroberi (selai, jus, kue), penyediaan homestay, hingga pengembangan 
            kuliner lokal di sekitar kawasan wisata.`,
          },
        ],
      },
    ],
  },
  {
    id: 7,
    image: "/images/artikel7.jpg",
    title:
      "Keindahan dan Potensi Kebun Stroberi: Wisata Agro yang Edukatif dan Rekreatif",
    date: "27 November 2024",
    author: "Admin Berry Bedugul",
    content: [
      {
        type: "paragraph",
        text: `Kebun stroberi adalah destinasi wisata yang menawarkan pengalaman unik bagi pengunjung untuk menikmati 
        keindahan alam sekaligus belajar tentang budidaya tanaman stroberi. Di Indonesia, kebun stroberi tidak hanya 
        menjadi daya tarik bagi pecinta alam dan buah-buahan segar, tetapi juga menjadi peluang besar untuk 
        meningkatkan ekonomi lokal melalui wisata agro.  `,
      },
      {
        type: "subheading",
        text: "Keistimewaan Kebun Stroberi",
      },
      {
        type: "paragraph",
        text: `Stroberi dikenal sebagai buah yang segar, manis, dan sedikit asam, dengan warna merah cerah yang menggoda. 
        Selain rasanya yang lezat, stroberi kaya akan vitamin C, serat, dan antioksidan. Mengunjungi kebun stroberi 
        memberikan pengalaman istimewa, di mana pengunjung dapat memetik langsung buah segar dari pohonnya. Aktivitas ini 
        sangat digemari oleh keluarga, pasangan muda, dan anak-anak karena memberikan pengalaman yang menyenangkan 
        sekaligus edukatif.`,
      },
      {
        type: "listWithParagraphs",
        text: "Manfaat Wisata ke Kebun Stroberi",
        listWithParagraphs: [
          {
            title: "Rekreasi Keluarga",
            description: `Kebun stroberi sering kali menyediakan area rekreasi yang cocok untuk keluarga. 
            Suasana yang sejuk dan pemandangan hijau memberikan efek relaksasi yang menyenangkan.  `,
          },
          {
            title: "Rekreasi yang Menyenangkan",
            description: `Memetik stroberi langsung dari kebun menjadi daya tarik utama. Aktivitas ini 
            menawarkan pengalaman unik dan menyenangkan, terutama bagi keluarga dengan anak-anak. Selain 
            itu, keindahan kebun yang tertata rapi sering dijadikan lokasi favorit untuk berfoto.`,
          },
          {
            title: "Pemberdayaan Ekonomi Lokal",
            description: `Wisata kebun stroberi dapat membuka peluang usaha bagi masyarakat setempat, 
            seperti penjualan produk olahan stroberi (selai, jus, kue), penyediaan homestay, hingga pengembangan 
            kuliner lokal di sekitar kawasan wisata.`,
          },
        ],
      },
    ],
  },
  {
    id: 8,
    image: "/images/artikel8.jpg",
    title:
      "Keindahan dan Potensi Kebun Stroberi: Wisata Agro yang Edukatif dan Rekreatif",
    date: "27 November 2024",
    author: "Admin Berry Bedugul",
    content: [
      {
        type: "paragraph",
        text: `Kebun stroberi adalah destinasi wisata yang menawarkan pengalaman unik bagi pengunjung untuk menikmati 
        keindahan alam sekaligus belajar tentang budidaya tanaman stroberi. Di Indonesia, kebun stroberi tidak hanya 
        menjadi daya tarik bagi pecinta alam dan buah-buahan segar, tetapi juga menjadi peluang besar untuk 
        meningkatkan ekonomi lokal melalui wisata agro.  `,
      },
      {
        type: "subheading",
        text: "Keistimewaan Kebun Stroberi",
      },
      {
        type: "paragraph",
        text: `Stroberi dikenal sebagai buah yang segar, manis, dan sedikit asam, dengan warna merah cerah yang menggoda. 
        Selain rasanya yang lezat, stroberi kaya akan vitamin C, serat, dan antioksidan. Mengunjungi kebun stroberi 
        memberikan pengalaman istimewa, di mana pengunjung dapat memetik langsung buah segar dari pohonnya. Aktivitas ini 
        sangat digemari oleh keluarga, pasangan muda, dan anak-anak karena memberikan pengalaman yang menyenangkan 
        sekaligus edukatif.`,
      },
      {
        type: "listWithParagraphs",
        text: "Manfaat Wisata ke Kebun Stroberi",
        listWithParagraphs: [
          {
            title: "Rekreasi Keluarga",
            description: `Kebun stroberi sering kali menyediakan area rekreasi yang cocok untuk keluarga. 
            Suasana yang sejuk dan pemandangan hijau memberikan efek relaksasi yang menyenangkan.  `,
          },
          {
            title: "Rekreasi yang Menyenangkan",
            description: `Memetik stroberi langsung dari kebun menjadi daya tarik utama. Aktivitas ini 
            menawarkan pengalaman unik dan menyenangkan, terutama bagi keluarga dengan anak-anak. Selain 
            itu, keindahan kebun yang tertata rapi sering dijadikan lokasi favorit untuk berfoto.`,
          },
          {
            title: "Pemberdayaan Ekonomi Lokal",
            description: `Wisata kebun stroberi dapat membuka peluang usaha bagi masyarakat setempat, 
            seperti penjualan produk olahan stroberi (selai, jus, kue), penyediaan homestay, hingga pengembangan 
            kuliner lokal di sekitar kawasan wisata.`,
          },
        ],
      },
    ],
  },
  {
    id: 9,
    image: "/images/artikel9.jpg",
    title:
      "Keindahan dan Potensi Kebun Stroberi: Wisata Agro yang Edukatif dan Rekreatif",
    date: "27 November 2024",
    author: "Admin Berry Bedugul",
    content: [
      {
        type: "paragraph",
        text: `Kebun stroberi adalah destinasi wisata yang menawarkan pengalaman unik bagi pengunjung untuk menikmati 
        keindahan alam sekaligus belajar tentang budidaya tanaman stroberi. Di Indonesia, kebun stroberi tidak hanya 
        menjadi daya tarik bagi pecinta alam dan buah-buahan segar, tetapi juga menjadi peluang besar untuk 
        meningkatkan ekonomi lokal melalui wisata agro.  `,
      },
      {
        type: "subheading",
        text: "Keistimewaan Kebun Stroberi",
      },
      {
        type: "paragraph",
        text: `Stroberi dikenal sebagai buah yang segar, manis, dan sedikit asam, dengan warna merah cerah yang menggoda. 
        Selain rasanya yang lezat, stroberi kaya akan vitamin C, serat, dan antioksidan. Mengunjungi kebun stroberi 
        memberikan pengalaman istimewa, di mana pengunjung dapat memetik langsung buah segar dari pohonnya. Aktivitas ini 
        sangat digemari oleh keluarga, pasangan muda, dan anak-anak karena memberikan pengalaman yang menyenangkan 
        sekaligus edukatif.`,
      },
      {
        type: "listWithParagraphs",
        text: "Manfaat Wisata ke Kebun Stroberi",
        listWithParagraphs: [
          {
            title: "Rekreasi Keluarga",
            description: `Kebun stroberi sering kali menyediakan area rekreasi yang cocok untuk keluarga. 
            Suasana yang sejuk dan pemandangan hijau memberikan efek relaksasi yang menyenangkan.  `,
          },
          {
            title: "Rekreasi yang Menyenangkan",
            description: `Memetik stroberi langsung dari kebun menjadi daya tarik utama. Aktivitas ini 
            menawarkan pengalaman unik dan menyenangkan, terutama bagi keluarga dengan anak-anak. Selain 
            itu, keindahan kebun yang tertata rapi sering dijadikan lokasi favorit untuk berfoto.`,
          },
          {
            title: "Pemberdayaan Ekonomi Lokal",
            description: `Wisata kebun stroberi dapat membuka peluang usaha bagi masyarakat setempat, 
            seperti penjualan produk olahan stroberi (selai, jus, kue), penyediaan homestay, hingga pengembangan 
            kuliner lokal di sekitar kawasan wisata.`,
          },
        ],
      },
    ],
  },
];

const ArticleDetail = () => {
  const { id } = useParams();
  const article = articles.find((item) => item.id === parseInt(id));

  if (!article) {
    return (
      <p className="text-center text-red-600 mt-10">Artikel tidak ditemukan.</p>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="w-full lg:w-4/5 mx-auto ">
        {/* Gambar Artikel */}
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-[500px] object-cover rounded-lg mb-6"
        />

        {/* Judul Artikel */}
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>

        {/* Detail Artikel */}
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <span>{article.date}</span>
          <span className="mx-2">•</span>
          <span>{article.author}</span>
        </div>

        {/* Konten Artikel */}
        <div className="prose max-w-none text-gray-800">
          {article.content.map((section, index) => {
            // Paragraf biasa
            if (section.type === "paragraph") {
              return (
                <p key={index} className="text-lg leading-relaxed mb-4">
                  {section.text}
                </p>
              );
            }

            // Subjudul dengan paragraf
            if (section.type === "subheading" && !section.listWithParagraphs) {
              return (
                <div key={index} className="mb-6">
                  <h2 className="text-2xl font-semibold mt-6 mb-4">
                    {section.text}
                  </h2>
                  {section.paragraphs &&
                    section.paragraphs.map((paragraph, idx) => (
                      <p key={idx} className="text-lg leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    ))}
                </div>
              );
            }

            // Subjudul dengan daftar bernomor dan paragraf
            if (section.type === "listWithParagraphs") {
              return (
                <div key={index} className="mb-6">
                  <h2 className="text-2xl font-semibold mt-6 mb-4">
                    {section.text}
                  </h2>
                  {section.listWithParagraphs.map((item, idx) => (
                    <div key={idx} className="mb-4">
                      <h3 className="text-lg ">
                        {idx + 1}. {item.title}
                      </h3>
                      <p className="text-lg leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              );
            }

            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
