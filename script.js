/**
 * ==========================================================================
 * KitobHamkor — Mukammal JavaScript Ilovasi (script.js)
 * Kitob almashish, sotish, olish, onlayn o'qish zali va admin boshqaruv paneli
 * ==========================================================================
 */

(function () {
  'use strict';

  // ==================== 1. BOSHLANG'ICH DEMO MA'LUMOTLAR ====================
  const INITIAL_BOOKS = [
    {
      id: "b-1",
      title: "O'tkan kunlar",
      author: "Abdulla Qodiriy",
      genre: "Badiiy",
      price: 45000,
      condition: "Yangi",
      city: "Toshkent",
      seller: "Jasur Rahimov",
      phone: "+998 90 123 45 67",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&auto=format&fit=crop",
      description: "O'zbek adabiyotining durdona asari. Tarixiy roman, Otabek va Kumush muhabbati, XIX asr o'rtalaridagi Turkiston hayoti tasvirlangan. Qattiq muqovali, yangi nashr.",
      createdAt: "2026-03-01"
    },
    {
      id: "b-2",
      title: "Atom odatlari (Atomic Habits)",
      author: "Jeyms Klir",
      genre: "Biznes & Rivojlanish",
      price: 55000,
      condition: "A'lo",
      city: "Samarqand",
      seller: "Dilshod Karimov",
      phone: "+998 91 234 56 78",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=600&auto=format&fit=crop",
      description: "Mayda o'zgarishlar qanday qilib ulkan natijalarga olib kelishi haqida jahon bestselleri. O'zbek tiliga to'liq va sifatli tarjima qilingan nusxa.",
      createdAt: "2026-03-02"
    },
    {
      id: "b-3",
      title: "Shaytanat (1-4 jild to'liq)",
      author: "Tohir Malik",
      genre: "Badiiy",
      price: 160000,
      condition: "A'lo",
      city: "Toshkent",
      seller: "Bosh Administrator",
      phone: "+998 71 200 00 00",
      rating: 5.0,
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=600&auto=format&fit=crop",
      description: "Mashhur detektiv asar, to'rt jild jamlanmasi. Asadbek va uning atrofidagi voqealar, hayotiy ziddiyatlar aks ettirilgan klassika.",
      createdAt: "2026-03-03"
    },
    {
      id: "b-4",
      title: "Alkimyogar",
      author: "Paulo Koelo",
      genre: "Psixologiya",
      price: 38000,
      condition: "Yangi",
      city: "Buxoro",
      seller: "Madina Aliyeva",
      phone: "+998 93 345 67 89",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=600&auto=format&fit=crop",
      description: "O'z orzusi va Taqdir belgilari ortidan Andalusiyadan Misr ehromlariga yo'l olgan cho'pon yigit Santiyagoning ibratli sarguzashtlari.",
      createdAt: "2026-03-04"
    },
    {
      id: "b-5",
      title: "Python Asoslari va Mukammal Dasturlash",
      author: "Mark Lutz / M. Anvarov",
      genre: "IT & Dasturlash",
      price: 85000,
      condition: "Yangi",
      city: "Toshkent",
      seller: "Sardor IT",
      phone: "+998 97 456 78 90",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1532012164546-f432f2e3edd4?q=80&w=600&auto=format&fit=crop",
      description: "Python dasturlash tilini noldan professional darajagacha o'rganish uchun to'liq amaliy qo'llanma. Kod namunalari va topshiriqlar bilan.",
      createdAt: "2026-03-05"
    },
    {
      id: "b-6",
      title: "Sariq devni minib",
      author: "Xudoyberdi To'xtaboyev",
      genre: "Bolalar uchun",
      price: 32000,
      condition: "Yaxshi",
      city: "Namangan",
      seller: "Nodirbek",
      phone: "+998 99 567 89 01",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=600&auto=format&fit=crop",
      description: "Hoshimjonning sehrli qalpoqcha orqali qilgan qiziqarli va kulgili sarguzashtlari. Barcha yoshdagi kitobxonlar sevgan milliy sarguzasht.",
      createdAt: "2026-03-06"
    },
    {
      id: "b-7",
      title: "Boy ota, Kambag'al ota",
      author: "Robert Kiyosaki",
      genre: "Biznes & Rivojlanish",
      price: 48000,
      condition: "Yangi",
      city: "Farg'ona",
      seller: "Jasur Rahimov",
      phone: "+998 90 123 45 67",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=600&auto=format&fit=crop",
      description: "Moliyaviy savodxonlik, aktivlar va passivlar farqi, pul ishlash psixologiyasi bo'yicha dunyodagi birinchi raqamli tavsiya etiluvchi kitob.",
      createdAt: "2026-03-07"
    },
    {
      id: "b-8",
      title: "Yulduzli tunlar (Bobur)",
      author: "Pirimqul Qodirov",
      genre: "Tarixiy",
      price: 60000,
      condition: "A'lo",
      city: "Andijon",
      seller: "Zohidbek",
      phone: "+998 94 678 90 12",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=600&auto=format&fit=crop",
      description: "Zahiriddin Muhammad Boburning yoshligi, Farg'ona taxti, Samarqand uchun janglari va Hindistonda qudratli saltanat qurishi haqidagi yorqin tarixiy roman.",
      createdAt: "2026-03-08"
    }
  ];

  const INITIAL_EXCHANGES = [
    {
      id: "ex-1",
      haveTitle: "Shum bola (G'afur G'ulom)",
      haveAuthor: "G'afur G'ulom",
      condition: "A'lo",
      wantTitle: "Jorj Oruellning '1984' yoki 'Molxona' romani",
      city: "Toshkent",
      user: "Jasur Rahimov",
      phone: "+998 90 123 45 67",
      note: "Kitobim deyarli yangi, faqat 1 marta o'qilgan. Metro Chilonzor yoki Novza yaqinida uchrashishimiz mumkin.",
      status: "active",
      createdAt: "2026-03-05"
    },
    {
      id: "ex-2",
      haveTitle: "Dunyoning ishlari",
      haveAuthor: "O'tkir Hoshimov",
      condition: "Yaxshi",
      wantTitle: "Deyl Karnegi: 'Do'st orttirish va ta'sir o'tkazish'",
      city: "Samarqand",
      user: "Dilshod Karimov",
      phone: "+998 91 234 56 78",
      note: "Muqovasi yumshoq, ichi toza. Samarqand shahar markazida almashtiraman.",
      status: "active",
      createdAt: "2026-03-06"
    },
    {
      id: "ex-3",
      haveTitle: "Raqamli Qal'a (Digital Fortress)",
      haveAuthor: "Den Braun",
      condition: "A'lo",
      wantTitle: "Detektiv yoki ilmiy-fantastik boshqa kitob",
      city: "Farg'ona",
      user: "Bobur Mirzo",
      phone: "+998 93 456 78 90",
      note: "Yaxshi saqlangan, qiziqqanlar telegramdan yozsa bo'ladi.",
      status: "active",
      createdAt: "2026-03-07"
    },
    {
      id: "ex-4",
      haveTitle: "Stiv Jobs Biografiyasi",
      haveAuthor: "Uolter Ayzekson",
      condition: "A'lo",
      wantTitle: "Ilon Mask yoki Genri Ford hayoti haqidagi kitob",
      city: "Toshkent",
      user: "Bosh Administrator",
      phone: "+998 71 200 00 00",
      note: "Qattiq muqovali katta kitob, teng qiymatli kitobga almashtiriladi.",
      status: "completed",
      createdAt: "2026-03-02"
    }
  ];

  const INITIAL_READ_BOOKS = [
    {
      id: "rb-1",
      title: "O'tkan kunlar",
      author: "Abdulla Qodiriy",
      genre: "Badiiy roman",
      chapters: [
        {
          num: 1,
          title: "1-bob: Otabek Marg'ilonda",
          content: `1265-nchi hijriy, kavak (dalv) oyining o'n yettinchisi, qishki kunlarning biri. Quyosh qizarg'an holda Marg'ilon ufqiga qarab og'moqda edi.

Marg'ilonning eng qalin joylashgan guzarlaridan biri bo'lgan Bozor darvozasidagi qo'noqda bir necha mehmonlar o'ltirar edilar. Bu qo'noqqa yaqin-yiroqdan kelgan savdogarlar, sayyohlar tushar, otlarini oxurga boylab, o'zlari hujralarga joylashar edilar.

Shu hujralarning birida, sandal yonida bir yigit yolg'iz o'ltirib, chuqur fikrga botgan edi. Uning qora ko'zlari, qiyiq qoshlari, kelishgan qaddi-qomati va nurli yuzi har qanday ko'zni o'ziga jalb etar darajada edi. Bu yigit Toshkentning eng nufuzli savdogarlaridan bo'lmish Yusufbek hojining o'g'li — Otabek edi.

Otabek Marg'ilonga savdo ishlari bilan kelgan bo'lsa-da, bu yerda uni butunlay boshqacha taqdir kutayotganidan bexabar edi. U derazadan quyoshning botishiga qarab, Toshkentdagi oilasini, ota-onasini xotirlar, ammo ichki bir sezgi unga bu safar uning butun umrini o'zgartirib yuborishini shipshirdi.`
        },
        {
          num: 2,
          title: "2-bob: Kumushbibi bilan ilk uchrashuv",
          content: `Ertasi kuni Otabek do'sti Ziyo shohichi bilan birga Marg'ilonning ko'rkam mahallalaridan biriga, Mirzakarim qutidorning xonadoniga mehmondorchilikka bordi.

Hovli nihoyatda ozoda, gullar va daraxtlar bilan bezatilgan edi. Hoji aka mehmonlarni katta ehtirom bilan kutib oldi. Ular dasturxon atrofida savdo-sotiq, yurt tinchligi va Qo'qon xonligidagi siyosiy vaziyatlar haqida suhbatlashdilar.

Choy va noz-ne'matlar keltirilayotganda, Otabek tasodifan hovlining narigi tomonidagi ayvon pardasi ortidan bir lahzaga mo'ralagan nigohni ko'rib qoldi. Bu — qutidorning yagona qizi Kumushbibi edi. Uning qoshlari kamon, ko'zlari charos kabi chaqnardi. Ikki yoshning nigohlari bir soniya to'qnashdi, ammo bu bir soniya har ikkisining qalbida o'chmas muhabbat alangasini yoqishga kifoya qildi.`
        },
        {
          num: 3,
          title: "3-bob: Kutilmagan to'y va sevinch",
          content: `Ziyo shohichi Otabekning holatidagi o'zgarishni darhol payqadi. Otabek Toshkentga qaytishga shoshilmas, xayoli faqat qutidorning uyida edi.

Oradan ko'p o'tmay, Marg'ilon oqsoqollari va qutidorning yaqinlari o'rtaga tushib, Otabek va Kumushbibining taqdirini bog'lash niyatida sovchilik masalasini ko'tardilar. Mirzakarim qutidor Otabekning xulqi, odobi va ilmiga qoyil qolib, qizining roziligini olgach, bu taklifni mamnuniyat bilan qabul qildi.

To'y tantanalari Marg'ilon urf-odatlari bo'yicha chiroyli tarzda o'tkazildi. Otabek o'z orzusiga yetganidan, Kumushbibi esa o'ziga munosib yor topganidan cheksiz baxtiyor edi.`
        }
      ]
    },
    {
      id: "rb-2",
      title: "Sariq devni minib",
      author: "Xudoyberdi To'xtaboyev",
      genre: "Bolalar adabiyoti / Sarguzasht",
      chapters: [
        {
          num: 1,
          title: "1-bob: Sehrli shlyapa qanday topildi?",
          content: `Mening ismim Hoshimjon. Qishlog'imizda meni bilmagan odam yo'q hisobi. Chunki har kuni qandaydir qiziq voqeaga aralashib qolaman.

Bir kuni daryo bo'yida baliq tutib o'tirib, eski tolning tagidan g'alati, chang bosgan bir shlyapa topib oldim. U oddiy shlyapaga o'xshamasdi, rangi sarg'ish-yashil bo'lib, quyoshda tovlanib turardi.

"Bu nimasi ekan?" deb boshimga kiyib ko'rgan edim, kutilmagan mo'jiza yuz berdi! Daryo bo'yida yurgan o'rtog'im Mirvali mening oldimdan o'tib ketayotib, meni ko'rmadi! Men unga: "Hoy, Mirvali, ko'zing qayerda?!" deb baqirsam, u qo'rqib ketib, atrofga alangladi: "Kim bu? Qayerdan gapiryapsan?!" dedi. Shunda angladimki, bu shlyapa kishini ko'rinmas qilib qo'yadigan haqiqiy sehrli shlyapa edi!`
        },
        {
          num: 2,
          title: "2-bob: Ko'rinmas Hoshimjonning sho'xliklari",
          content: `Sehrli shlyapani qo'lga kiritgach, miyamga turli reja va g'oyalar kela boshladi. Endi dars tayyorlamasdan ham besh baho olish mumkin edi!

Ertasi kuni maktabga bordim. Matematika darsida ustozimiz meni doskaga chaqirdi. Men sezdirmasdan shlyapani boshimga qo'ndirdim. Butun sinf hang-mang bo'lib qoldi — hozirgina partada o'tirgan Hoshimjon bir zumda g'oyib bo'lgandi!

O'qituvchimiz ko'zoynagini to'g'rilab partalarni tekshira boshladi. Men esa sekin muallim stoliga borib, jurnaldagi ikki baholarimni beshga to'g'rilash haqida o'yladim, ammo vijdoni qiynaldi. Shlyapa bor bo'lsa-da, haqiqiy bilimni uning yordamida olib bo'lmasligini asta-sekin tushuna boshladim.`
        }
      ]
    },
    {
      id: "rb-3",
      title: "Atom Odatlari (Qisqartirilgan amaliy qo'llanma)",
      author: "Jeyms Klir",
      genre: "Shaxsiy rivojlanish",
      chapters: [
        {
          num: 1,
          title: "1-bob: Nega kichik odatlar katta o'zgarish yasaydi?",
          content: `Ko'pincha biz muvaffaqiyatga erishish uchun bir zumda ulkan va keskin o'zgarishlar qilish kerak deb o'ylaymiz. Ozish, yangi til o'rganish yoki boyish uchun birdaniga hamma narsani o'zgartirishga urinamiz va tezda charchab taslim bo'lamiz.

Aslida esa haqiqiy mo'jiza — har kuni bor-yo'g'i 1% yaxshiroq bo'lishda yotadi!

Agar siz bir yil davomida har kuni o'z ustingizda 1% ga yaxshilansangiz, yil oxirida 37 barobar kuchliroq bo'lasiz. Aksincha, har kuni 1% ga sustlashsangiz, deyarli nol darajasiga tushib qolasiz. Odatlar — o'z-o'zini takomillashtirishning murakkab foizlaridir.

Odatlaringiz sizning kimligingizni belgilaydi. Siz erishmoqchi bo'lgan maqsadga emas, balki shaxsiyatingizga (identifikatsiya) e'tibor qarating: "Men kitob o'qishim kerak" emas, "Men kitobxonman" deb o'ylang.`
        },
        {
          num: 2,
          title: "2-bob: Odat shakllantirishning 4 qonuni",
          content: `Inson miyasi har doim energiya tejashga harakat qiladi va odatlar orqali harakatlarni avtomatlashtiradi. Har qanday odat 4 bosqichdan iborat:

1. Turtki (Cue) — miyaga signal beradi;
2. Istak (Craving) — harakatga undovchi motivatsiya;
3. Javob / Harakat (Response) — odatning o'zi;
4. Mukofot (Reward) — olingan mamnuniyat.

Yaxshi odatni shakllantirish uchun:
1. Uni ko'zga ko'rinarli qiling (Kitobni ko'zga tashlanadigan stol ustiga qo'ying);
2. Uni jozibador qiling (Yoqimli narsa bilan bog'lang);
3. Uni oson qiling (2 daqiqalik qoida: kuniga 2 sahifa o'qishdan boshlang);
4. Uni qoniqarli qiling (Bajarilganini qayd etib boring).`
        }
      ]
    }
  ];

  const INITIAL_USERS = [
    {
      id: "u-admin",
      name: "Bosh Administrator",
      email: "admin@kitob.uz",
      password: "admin", // Sodda demo kirish uchun
      role: "admin",
      phone: "+998 71 200 00 00",
      city: "Toshkent",
      registeredAt: "2026-01-01",
      status: "Faol"
    },
    {
      id: "u-user1",
      name: "Jasur Rahimov",
      email: "foydalanuvchi@kitob.uz",
      password: "user",
      role: "user",
      phone: "+998 90 123 45 67",
      city: "Toshkent",
      registeredAt: "2026-02-10",
      status: "Faol"
    },
    {
      id: "u-user2",
      name: "Dilshod Karimov",
      email: "dilshod@mail.uz",
      password: "user",
      role: "user",
      phone: "+998 91 234 56 78",
      city: "Samarqand",
      registeredAt: "2026-02-18",
      status: "Faol"
    }
  ];

  // ==================== 2. LOCALSTORAGE BILAN ISHLASH ====================
  function getStorage(key, defaultVal) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : defaultVal;
    } catch (e) {
      console.error("Storage error:", e);
      return defaultVal;
    }
  }

  function setStorage(key, val) {
    try {
      localStorage.setItem(key, JSON.stringify(val));
    } catch (e) {
      console.error("Storage set error:", e);
    }
  }

  // Boshlang'ich yuklashlar
  let books = getStorage("kh_books", INITIAL_BOOKS);
  let exchanges = getStorage("kh_exchanges", INITIAL_EXCHANGES);
  let readBooks = getStorage("kh_read_books", INITIAL_READ_BOOKS);
  let users = getStorage("kh_users", INITIAL_USERS);
  
  // Dastur egasi (Admin) har doim mavjudligini ta'minlash
  let adminUser = users.find(u => u.role === 'admin');
  if (!adminUser) {
    adminUser = {
      id: "u-admin",
      name: "Bosh Administrator",
      email: "admin",
      username: "admin",
      password: "admin",
      role: "admin",
      phone: "+998 71 200 00 00",
      city: "Toshkent",
      registeredAt: "2026-01-01",
      status: "Faol"
    };
    users.unshift(adminUser);
    setStorage("kh_users", users);
  }

  let orders = getStorage("kh_orders", [
    {
      id: "ORD-991",
      userName: "Jasur Rahimov",
      userId: "u-user1",
      phone: "+998 90 123 45 67",
      city: "Toshkent",
      address: "Chilonzor 9-mavze, 12-uy",
      notes: "Kechqurun yetkazilsin",
      paymentType: "Payme / Click",
      items: [
        { id: "b-1", title: "O'tkan kunlar", author: "Abdulla Qodiriy", price: 45000, quantity: 1, subtotal: 45000 },
        { id: "b-2", title: "Atom odatlari (Atomic Habits)", author: "Jeyms Klir", price: 55000, quantity: 1, subtotal: 55000 }
      ],
      subtotal: 100000,
      deliveryFee: 20000,
      total: 120000,
      status: "Yetkazilmoqda",
      date: "2026-03-05",
      time: "14:30"
    }
  ]);
  let cart = getStorage("kh_cart", []);
  let currentUser = getStorage("kh_current_user", null); // { id, name, email, role, phone, city }

  // Reader holatlari
  let readerState = {
    activeBookId: null,
    currentChapterIndex: 0,
    fontSize: 18,
    theme: 'light',
    fontFamily: 'serif',
    bookmarks: getStorage("kh_bookmarks", {})
  };

  // Kitob batafsil modali miqdor (plus/minus) holati
  let activeDetailBookId = null;
  let activeDetailQty = 1;

  // Auth Modal holati ('login' | 'register' | 'admin')
  let currentAuthView = 'login';

  // ==================== 3. ASOSIY ILOVA OBYEKTI (APP) ====================
  const app = {
    // --- Initsializatsiya ---
    init() {
      this.bindEvents();
      this.renderAuthArea();
      this.renderHome();
      this.renderShop();
      this.renderExchanges();
      this.renderReaderLibrary();
      this.updateCartBadge();

      // Routing tekshirish (agar url da hash bo'lsa)
      const hash = window.location.hash.replace('#', '');
      if (['home', 'shop', 'exchange', 'reader', 'admin', 'profile'].includes(hash)) {
        this.navigate(hash, false);
      } else {
        this.navigate('home', false);
      }
    },

    bindEvents() {
      // Mobil menyu
      const mobileBtn = document.getElementById('mobileMenuBtn');
      const navLinks = document.getElementById('navLinks');
      if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
          navLinks.classList.toggle('open');
        });
      }

      // Do'kon qidiruv va filtrlari
      const shopSearch = document.getElementById('shopSearchInput');
      const shopGenre = document.getElementById('shopGenreFilter');
      const shopSort = document.getElementById('shopSortFilter');
      const shopCond = document.getElementById('shopConditionFilter');

      if (shopSearch) shopSearch.addEventListener('input', () => app.renderShop());
      if (shopGenre) {
        shopGenre.addEventListener('change', () => {
          const val = shopGenre.value;
          document.querySelectorAll('#shopCategoryPills .cat-pill').forEach(pill => {
            const isMatch = (val === 'all' && pill.getAttribute('onclick')?.includes("'all'")) ||
                            pill.getAttribute('onclick')?.includes(`'${val}'`);
            pill.classList.toggle('active', !!isMatch);
          });
          app.renderShop();
        });
      }
      if (shopSort) shopSort.addEventListener('change', () => app.renderShop());
      if (shopCond) shopCond.addEventListener('change', () => app.renderShop());

      // Almashish qidiruv va filtrlari
      const exSearch = document.getElementById('exchangeSearchInput');
      const exCity = document.getElementById('exchangeCityFilter');
      const exStatus = document.getElementById('exchangeStatusFilter');

      if (exSearch) exSearch.addEventListener('input', () => app.renderExchanges());
      if (exCity) exCity.addEventListener('change', () => app.renderExchanges());
      if (exStatus) exStatus.addEventListener('change', () => app.renderExchanges());
    },

    // Do'konda 1-klik bilan janrni tanlash
    setShopGenreFilter(genre, btnElement) {
      const select = document.getElementById('shopGenreFilter');
      if (select) {
        select.value = genre;
      }
      document.querySelectorAll('#shopCategoryPills .cat-pill').forEach(p => p.classList.remove('active'));
      if (btnElement) {
        btnElement.classList.add('active');
      }
      this.renderShop();
    },

    // --- Toast Xabarnomalar ---
    showToast(message, type = 'success') {
      const container = document.getElementById('toastContainer');
      if (!container) return;

      const toast = document.createElement('div');
      toast.className = `toast toast-${type}`;
      
      let icon = 'fa-check-circle';
      if (type === 'error') icon = 'fa-circle-xmark';
      if (type === 'info') icon = 'fa-circle-info';
      if (type === 'warning') icon = 'fa-triangle-exclamation';

      toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
      container.appendChild(toast);

      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
      }, 3500);
    },

    // --- Sahifalararo Navigatsiya (SPA) ---
    navigate(pageName, updateHash = true) {
      // Admin sahifasiga ruxsat tekshirish
      if (pageName === 'admin' && (!currentUser || currentUser.role !== 'admin')) {
        this.showToast("Admin paneliga kirish uchun SuperAdmin hisobiga kiring!", "warning");
        this.openAuthModal('admin');
        return;
      }

      // Profilga ruxsat
      if (pageName === 'profile' && !currentUser) {
        this.showToast("Shaxsiy kabinetga kirish uchun tizimga kiring!", "info");
        this.openAuthModal('login');
        return;
      }

      // Barcha sahifalarni yopish
      document.querySelectorAll('.page-section').forEach(sec => sec.classList.remove('active'));
      document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));

      // Kerakli sahifani faollashtirish
      const targetSec = document.getElementById(`page-${pageName}`);
      if (targetSec) {
        targetSec.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      // Nav item faollashtirish
      const activeNav = document.querySelector(`.nav-item[data-page="${pageName}"]`);
      if (activeNav) activeNav.classList.add('active');

      // Mobil menyuni yopish
      const navLinks = document.getElementById('navLinks');
      if (navLinks) navLinks.classList.remove('open');

      // Sahifa yuklanganda kerakli renderlar
      if (pageName === 'admin') this.renderAdminPanel();
      if (pageName === 'profile') this.renderProfile();
      if (pageName === 'shop') this.renderShop();
      if (pageName === 'exchange') this.renderExchanges();

      if (updateHash) {
        window.location.hash = pageName;
      }
    },

    // ==================== 4. AUTH VA FOYDALANUVCHILAR BOSHQARUVI ====================
    renderAuthArea() {
      const container = document.getElementById('userAuthArea');
      const adminNav = document.getElementById('navAdminLink');
      if (!container) return;

      if (currentUser) {
        // Foydalanuvchi tizimga kirgan
        const isAdmin = currentUser.role === 'admin';
        if (adminNav) {
          adminNav.style.display = isAdmin ? 'inline-flex' : 'none';
        }

        container.innerHTML = `
          <div class="user-menu-btn" onclick="app.navigate('${isAdmin ? 'admin' : 'profile'}')" title="${isAdmin ? 'Admin Boshqaruviga' : 'Shaxsiy Kabinetga'}">
            <div class="user-avatar-circle ${isAdmin ? 'admin-avatar' : ''}">
              <i class="fa-solid ${isAdmin ? 'fa-crown text-amber' : 'fa-user'}"></i>
            </div>
            <span style="font-weight:700;">${currentUser.name.split(' ')[0]} ${isAdmin ? '<span class="badge badge-primary" style="font-size:0.7rem; padding:0.15rem 0.4rem; margin-left:0.25rem;">Admin</span>' : ''}</span>
          </div>
          <button class="btn-icon-sm" onclick="app.logout()" title="Chiqish">
            <i class="fa-solid fa-right-from-bracket"></i>
          </button>
        `;
      } else {
        // Mehmon (Kirish va Ro'yxatdan o'tish)
        if (adminNav) adminNav.style.display = 'none';
        container.innerHTML = `
          <button class="btn btn-outline-sm" onclick="app.openAuthModal('login')">
            <i class="fa-solid fa-arrow-right-to-bracket"></i> Kirish
          </button>
          <button class="btn btn-primary-sm" onclick="app.openAuthModal('register')">
            <i class="fa-solid fa-user-plus"></i> Ro'yxatdan o'tish
          </button>
        `;
      }
    },

    setAuthView(view = 'login') {
      if (view === 'user') view = 'login';
      currentAuthView = view;
      document.querySelectorAll('.auth-role-tabs .auth-role-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.auth-view-pane').forEach(p => p.classList.add('hidden'));

      const titleEl = document.getElementById('authTitle');
      const subEl = document.getElementById('authSubtitle');

      if (view === 'login') {
        document.getElementById('authTabLogin')?.classList.add('active');
        document.getElementById('authViewLogin')?.classList.remove('hidden');
        if (titleEl) titleEl.innerText = "Foydalanuvchi Hisobiga Kirish";
        if (subEl) subEl.innerText = "Xaridlar va mutolaa xatcho'plaringizni boshqaring";
      } else if (view === 'register') {
        document.getElementById('authTabRegister')?.classList.add('active');
        document.getElementById('authViewRegister')?.classList.remove('hidden');
        if (titleEl) titleEl.innerText = "Yangi Foydalanuvchi Ro'yxatdan O'tish";
        if (subEl) subEl.innerText = "Platformaning barcha imkoniyatlaridan to'liq foydalaning";
      } else if (view === 'admin') {
        document.getElementById('authTabAdmin')?.classList.add('active');
        document.getElementById('authViewAdmin')?.classList.remove('hidden');
        if (titleEl) titleEl.innerText = "Administrator Maxsus Kirishi";
        if (subEl) subEl.innerText = "Faqat platforma egasi (SuperAdmin) uchun";
      }
    },

    openAuthModal(view = 'login') {
      const modal = document.getElementById('authModal');
      if (!modal) return;
      this.setAuthView(view);
      modal.classList.add('active');
    },

    closeAuthModal() {
      const modal = document.getElementById('authModal');
      if (modal) modal.classList.remove('active');
    },

    togglePasswordVisibility(inputId, btn) {
      const input = document.getElementById(inputId);
      if (!input) return;
      const isPass = input.type === 'password';
      input.type = isPass ? 'text' : 'password';
      if (btn) {
        btn.innerHTML = `<i class="fa-solid fa-eye${isPass ? '-slash' : ''}"></i>`;
      }
    },

    fillDemoCredentials(role) {
      if (role === 'admin') {
        this.setAuthView('admin');
        const loginInp = document.getElementById('adminLoginInput');
        const passInp = document.getElementById('adminPasswordInput');
        const admin = users.find(u => u.role === 'admin');
        if (loginInp) loginInp.value = admin ? (admin.username || admin.email) : "admin";
        if (passInp) passInp.value = admin ? admin.password : "admin123";
        this.showToast("SuperAdmin ma'lumotlari kiritildi!", "info");
      } else {
        this.setAuthView('login');
        const emailInp = document.getElementById('loginEmail');
        const passInp = document.getElementById('loginPassword');
        if (emailInp) emailInp.value = "foydalanuvchi@kitob.uz";
        if (passInp) passInp.value = "user";
        this.showToast("Namuna foydalanuvchi kiritildi!", "info");
      }
    },

    handleLoginSubmit(e) {
      e.preventDefault();
      const loginVal = document.getElementById('loginEmail').value.trim().toLowerCase();
      const pass = document.getElementById('loginPassword').value.trim();

      // Oddiy foydalanuvchini topish
      const user = users.find(u => 
        (u.email.toLowerCase() === loginVal || (u.username && u.username.toLowerCase() === loginVal) || (u.phone && u.phone === loginVal))
      );

      if (user && (pass === user.password || pass === 'user' || pass === 'user123')) {
        if (user.status === 'Bloklangan') {
          this.showToast("Hisobingiz bloklangan! Administratorga murojaat qiling.", "error");
          return;
        }
        currentUser = user;
        setStorage("kh_current_user", currentUser);
        this.closeAuthModal();
        this.renderAuthArea();
        this.showToast(`Xush kelibsiz, ${currentUser.name}!`, "success");
        if (user.role === 'admin') {
          this.navigate('admin');
        } else {
          this.navigate('shop');
        }
      } else {
        this.showToast("Email/Login yoki parol noto'g'ri! Iltimos, tekshirib qayta kiriting.", "error");
      }
    },

    handleRegisterSubmit(e) {
      e.preventDefault();
      const name = document.getElementById('regName').value.trim();
      const phone = document.getElementById('regPhone').value.trim();
      const city = document.getElementById('regCity').value;
      const email = document.getElementById('regEmail').value.trim().toLowerCase();
      const pass = document.getElementById('regPassword').value.trim();
      const passConfirm = document.getElementById('regPasswordConfirm').value.trim();

      if (!name || !email || !pass) {
        this.showToast("Iltimos, barcha maydonlarni to'ldiring!", "warning");
        return;
      }

      if (pass !== passConfirm) {
        this.showToast("Kiritilgan parollar bir-biriga mos kelmadi!", "error");
        return;
      }

      if (pass.length < 3) {
        this.showToast("Parol kamida 3 ta belgidan iborat bo'lishi kerak!", "warning");
        return;
      }

      // Mavjud foydalanuvchini tekshirish
      const exists = users.find(u => u.email.toLowerCase() === email || (u.username && u.username.toLowerCase() === email));
      if (exists) {
        this.showToast("Ushbu email yoki login bilan foydalanuvchi allaqachon mavjud!", "warning");
        return;
      }

      // Yangi foydalanuvchi yaratish (roli qat'iy ravishda 'user')
      const newUser = {
        id: `u-${Date.now()}`,
        name: name,
        phone: phone,
        city: city,
        email: email,
        username: email,
        password: pass,
        role: "user", // Boshqalar uchun faqat user roli beriladi
        registeredAt: new Date().toISOString().split('T')[0],
        status: "Faol"
      };

      users.push(newUser);
      setStorage("kh_users", users);
      currentUser = newUser;
      setStorage("kh_current_user", currentUser);

      this.closeAuthModal();
      this.renderAuthArea();
      this.showToast(`Tabriklaymiz, ${newUser.name}! Ro'yxatdan muvaffaqiyatli o'tdingiz.`, "success");
      this.navigate('shop');
    },

    handleAdminSubmit(e) {
      e.preventDefault();
      const loginVal = document.getElementById('adminLoginInput').value.trim().toLowerCase();
      const pass = document.getElementById('adminPasswordInput').value.trim();

      const admin = users.find(u => u.role === 'admin');
      const isLoginMatch = (admin && (admin.email.toLowerCase() === loginVal || (admin.username && admin.username.toLowerCase() === loginVal))) || loginVal === 'admin';
      const isPassMatch = (admin && pass === admin.password) || pass === 'admin123' || pass === 'admin';

      if (isLoginMatch && isPassMatch) {
        currentUser = admin || {
          id: "u-admin",
          name: "Bosh Administrator",
          email: "admin",
          username: "admin",
          password: pass,
          role: "admin",
          phone: "+998 71 200 00 00",
          city: "Toshkent",
          registeredAt: "2026-01-01",
          status: "Faol"
        };
        setStorage("kh_current_user", currentUser);
        this.closeAuthModal();
        this.renderAuthArea();
        this.showToast("SuperAdmin boshqaruv tizimiga xush kelibsiz!", "success");
        this.navigate('admin');
      } else {
        this.showToast("Admin login yoki paroli noto'g'ri! (Login: admin / Parol: admin123)", "error");
      }
    },

    logout() {
      currentUser = null;
      localStorage.removeItem("kh_current_user");
      this.renderAuthArea();
      this.showToast("Hisobingizdan chiqdingiz.", "info");
      this.navigate('home');
    },

    // ==================== 5. BOSH SAHIFA (HOME) ====================
    renderHome() {
      // Statistika
      const statBooks = document.getElementById('statBooksCount');
      const statEx = document.getElementById('statExchangeCount');
      const statReaders = document.getElementById('statReadersCount');
      if (statBooks) statBooks.innerText = `${books.length + 1200}+`;
      if (statEx) statEx.innerText = `${exchanges.length + 450}+`;
      if (statReaders) statReaders.innerText = `${users.length + 5200}+`;

      // Tavsiya etilgan sara kitoblar (dastlabki 4 tasi)
      const featuredContainer = document.getElementById('homeFeaturedBooks');
      if (featuredContainer) {
        const topBooks = books.slice(0, 4);
        featuredContainer.innerHTML = topBooks.map(b => this.generateBookCardHtml(b)).join('');
      }

      // So'nggi almashish e'lonlari (dastlabki 3 tasi)
      const exContainer = document.getElementById('homeExchangeList');
      if (exContainer) {
        const topEx = exchanges.slice(0, 3);
        exContainer.innerHTML = topEx.map(ex => this.generateExchangeCardHtml(ex)).join('');
      }
    },

    // ==================== 6. KITOB DO'KONI (SHOP - SOTISH VA SOTIB OLISH) ====================
    renderShop() {
      const grid = document.getElementById('shopBooksGrid');
      const empty = document.getElementById('shopEmptyMessage');
      if (!grid) return;

      const searchVal = (document.getElementById('shopSearchInput')?.value || '').toLowerCase().trim();
      const genreVal = document.getElementById('shopGenreFilter')?.value || 'all';
      const sortVal = document.getElementById('shopSortFilter')?.value || 'newest';
      const condVal = document.getElementById('shopConditionFilter')?.value || 'all';

      let filtered = books.filter(b => {
        const matchesSearch = b.title.toLowerCase().includes(searchVal) || 
                              b.author.toLowerCase().includes(searchVal) ||
                              (b.description && b.description.toLowerCase().includes(searchVal));
        const matchesGenre = genreVal === 'all' || b.genre === genreVal;
        const matchesCond = condVal === 'all' || b.condition === condVal;
        return matchesSearch && matchesGenre && matchesCond;
      });

      // Saralash
      if (sortVal === 'price-asc') filtered.sort((a, b) => a.price - b.price);
      else if (sortVal === 'price-desc') filtered.sort((a, b) => b.price - a.price);
      else if (sortVal === 'rating') filtered.sort((a, b) => b.rating - a.rating);
      else if (sortVal === 'newest') filtered.sort((a, b) => (b.createdAt > a.createdAt ? 1 : -1));

      if (filtered.length === 0) {
        grid.innerHTML = '';
        if (empty) empty.classList.remove('hidden');
      } else {
        if (empty) empty.classList.add('hidden');
        grid.innerHTML = filtered.map(b => this.generateBookCardHtml(b)).join('');
      }
    },

    generateBookCardHtml(b) {
      const formattedPrice = Number(b.price).toLocaleString('uz-UZ') + " so'm";
      return `
        <div class="book-card">
          <div class="book-card-thumb" onclick="app.openBookDetailModal('${b.id}')" style="cursor: pointer;">
            <img src="${b.image || 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600'}" alt="${b.title}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600'">
            <span class="book-badge-condition">${b.condition}</span>
            <span class="book-badge-genre">${b.genre}</span>
          </div>
          <div class="book-card-body">
            <h3 class="book-title" onclick="app.openBookDetailModal('${b.id}')" style="cursor: pointer;" title="${b.title}">${b.title}</h3>
            <span class="book-author">${b.author}</span>
            <div class="book-rating">
              <i class="fa-solid fa-star"></i>
              <strong>${b.rating || '4.8'}</strong>
              <span>(${b.city})</span>
            </div>
            <div class="book-card-footer">
              <span class="book-price">${formattedPrice}</span>
              <div class="book-actions-btns">
                <button class="btn-outline-sm" onclick="app.openBookDetailModal('${b.id}')" title="Batafsil">
                  <i class="fa-solid fa-eye"></i>
                </button>
                <button class="btn-add-cart" onclick="app.addToCart('${b.id}')" title="Savatchaga qo'shish">
                  <i class="fa-solid fa-cart-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    },

    openBookDetailModal(bookId) {
      const book = books.find(b => b.id === bookId);
      if (!book) return;

      activeDetailBookId = bookId;
      activeDetailQty = 1;

      const container = document.getElementById('bookDetailContent');
      const modal = document.getElementById('bookDetailModal');
      if (!container || !modal) return;

      const unitPrice = Number(book.price);
      const formattedPrice = unitPrice.toLocaleString('uz-UZ') + " so'm";

      container.innerHTML = `
        <div class="detail-thumb-box">
          <img src="${book.image || 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600'}" alt="${book.title}" onerror="this.src='https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600'">
        </div>
        <div class="detail-info-box">
          <h2>${book.title}</h2>
          <span class="detail-author"><i class="fa-solid fa-feather"></i> Muallif: <strong>${book.author}</strong></span>
          
          <div class="detail-badges-row">
            <span class="badge badge-primary"><i class="fa-solid fa-bookmark"></i> ${book.genre}</span>
            <span class="badge badge-success"><i class="fa-solid fa-certificate"></i> Holati: ${book.condition}</span>
            <span class="badge badge-secondary"><i class="fa-solid fa-location-dot"></i> ${book.city}</span>
            <span class="badge badge-warning"><i class="fa-solid fa-star"></i> ${book.rating || '4.9'}</span>
          </div>

          <div class="detail-price-tag">
            ${formattedPrice} <small style="font-size:0.85rem; color:var(--gray-500); font-weight:normal;">/ 1 dona</small>
          </div>

          <p class="detail-desc-text">${book.description || "Ushbu sara kitob haqida to'liq tavsif berilmagan."}</p>

          <!-- KITOB SOTVOLISHDA PLUS VA MINUS QISMI -->
          <div class="book-detail-qty-section">
            <div class="qty-label-wrap">
              <label><i class="fa-solid fa-calculator"></i> Xarid Miqdori (soni):</label>
              <span class="stock-badge in-stock"><i class="fa-solid fa-check"></i> Omborda mavjud</span>
            </div>
            <div class="qty-control-wrapper">
              <div class="qty-stepper">
                <button type="button" class="qty-btn" onclick="app.changeDetailQty(-1)" title="1 taga kamaytirish">
                  <i class="fa-solid fa-minus"></i>
                </button>
                <input type="number" id="detailQtyInput" class="qty-number-input" value="1" min="1" max="99" onchange="app.handleDetailQtyChange(this.value)">
                <button type="button" class="qty-btn" onclick="app.changeDetailQty(1)" title="1 taga oshirish">
                  <i class="fa-solid fa-plus"></i>
                </button>
              </div>
              <div class="detail-total-calculation">
                <small>Hisoblangan narx:</small>
                <strong id="detailTotalCalculatedPrice">${formattedPrice}</strong>
              </div>
            </div>
          </div>

          <div class="detail-seller-box">
            <strong><i class="fa-solid fa-store text-indigo"></i> Sotuvchi ma'lumotlari:</strong>
            <p style="margin: 0.25rem 0 0;"><i class="fa-solid fa-user"></i> ${book.seller || "KitobHamkor Rasmiy Do'koni"}</p>
            <p style="margin: 0.2rem 0 0;"><i class="fa-solid fa-phone"></i> ${book.phone || "+998 71 200 00 00"}</p>
          </div>

          <div class="detail-action-buttons">
            <button class="btn btn-primary btn-glow" onclick="app.addDetailBookToCart()">
              <i class="fa-solid fa-cart-plus"></i> Savatchaga Qo'shish
            </button>
            <button class="btn btn-amber btn-glow" onclick="app.quickBuyDetailBook()">
              <i class="fa-solid fa-bolt"></i> Hoziroq Xarid Qilish
            </button>
            <button class="btn btn-outline" onclick="window.location.href='tel:${book.phone}'">
              <i class="fa-solid fa-phone"></i> Sotuvchiga Qo'ng'iroq
            </button>
          </div>
        </div>
      `;

      modal.classList.add('active');
    },

    changeDetailQty(delta) {
      const book = books.find(b => b.id === activeDetailBookId);
      if (!book) return;
      activeDetailQty = Math.max(1, Math.min(99, activeDetailQty + delta));
      const input = document.getElementById('detailQtyInput');
      const totalEl = document.getElementById('detailTotalCalculatedPrice');
      if (input) input.value = activeDetailQty;
      if (totalEl) totalEl.innerText = (Number(book.price) * activeDetailQty).toLocaleString('uz-UZ') + " so'm";
    },

    handleDetailQtyChange(val) {
      const book = books.find(b => b.id === activeDetailBookId);
      if (!book) return;
      let num = parseInt(val, 10);
      if (isNaN(num) || num < 1) num = 1;
      if (num > 99) num = 99;
      activeDetailQty = num;
      const input = document.getElementById('detailQtyInput');
      const totalEl = document.getElementById('detailTotalCalculatedPrice');
      if (input) input.value = activeDetailQty;
      if (totalEl) totalEl.innerText = (Number(book.price) * activeDetailQty).toLocaleString('uz-UZ') + " so'm";
    },

    addDetailBookToCart() {
      if (!activeDetailBookId) return;
      this.addToCart(activeDetailBookId, activeDetailQty);
      this.closeBookDetailModal();
    },

    quickBuyDetailBook() {
      if (!activeDetailBookId) return;
      this.addToCart(activeDetailBookId, activeDetailQty);
      this.closeBookDetailModal();
      this.openCartModal();
    },

    closeBookDetailModal() {
      const modal = document.getElementById('bookDetailModal');
      if (modal) modal.classList.remove('active');
    },

    // --- Yangi Kitob Sotish Modali ---
    openSellModal() {
      if (!currentUser) {
        this.showToast("Kitob sotish uchun avval tizimga kiring!", "warning");
        this.openAuthModal('login');
        return;
      }
      const modal = document.getElementById('sellModal');
      if (modal) modal.classList.add('active');
    },

    closeSellModal() {
      const modal = document.getElementById('sellModal');
      if (modal) modal.classList.remove('active');
    },

    handleImageUpload(e, textElementId) {
      const file = e.target.files[0];
      if (file) {
        document.getElementById(textElementId).innerText = `Tanlandi: ${file.name}`;
      }
    },

    handleFileUpload(e, textElementId) {
      const file = e.target.files[0];
      if (file) {
        document.getElementById(textElementId).innerText = `Fayl biriktirildi: ${file.name} (${Math.round(file.size / 1024)} KB)`;
      }
    },

    handleSellBookSubmit(e) {
      e.preventDefault();
      if (!currentUser) {
        this.showToast("Iltimos, avval tizimga kiring!", "warning");
        return;
      }

      const title = document.getElementById('sellTitle').value.trim();
      const author = document.getElementById('sellAuthor').value.trim();
      const genre = document.getElementById('sellGenre').value;
      const price = parseFloat(document.getElementById('sellPrice').value);
      const condition = document.getElementById('sellCondition').value;
      const city = document.getElementById('sellCity').value;
      const phone = document.getElementById('sellPhone').value.trim();
      const desc = document.getElementById('sellDescription').value.trim();
      let imageUrl = document.getElementById('sellImageUrl').value.trim();

      // Agar rasm kiritilmagan bo'lsa, chiroyli default kitob rasmi
      if (!imageUrl) {
        imageUrl = "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&auto=format&fit=crop";
      }

      const newBook = {
        id: `b-${Date.now()}`,
        title,
        author,
        genre,
        price,
        condition,
        city,
        seller: currentUser.name,
        sellerId: currentUser.id,
        phone,
        rating: 5.0,
        image: imageUrl,
        description: desc || "Yangi joylashtirilgan kitob.",
        createdAt: new Date().toISOString().split('T')[0]
      };

      books.unshift(newBook);
      setStorage("kh_books", books);

      this.closeSellModal();
      document.getElementById('sellBookForm').reset();
      this.renderShop();
      this.showToast("Kitobingiz muvaffaqiyatli sotuvga qo'yildi!", "success");
    },

    // ==================== 7. SAVATCHA (CART) VA XARID ====================
    addToCart(bookId, quantity = 1) {
      const book = books.find(b => b.id === bookId);
      if (!book) return;

      const qty = Math.max(1, parseInt(quantity, 10) || 1);
      const existing = cart.find(item => item.id === bookId);
      if (existing) {
        existing.quantity += qty;
      } else {
        cart.push({
          id: book.id,
          title: book.title,
          price: Number(book.price),
          image: book.image,
          author: book.author,
          quantity: qty
        });
      }

      setStorage("kh_cart", cart);
      this.updateCartBadge();
      this.showToast(`"${book.title}" (${qty} dona) savatchaga qo'shildi!`, "success");
    },

    updateCartItemQty(bookId, delta) {
      const item = cart.find(i => i.id === bookId);
      if (!item) return;

      if (delta === -1 && item.quantity <= 1) {
        if (confirm(`"${item.title}" kitobini savatchadan o'chirmoqchimisiz?`)) {
          this.removeFromCart(bookId);
        }
        return;
      }

      item.quantity = Math.max(1, Math.min(99, item.quantity + delta));
      setStorage("kh_cart", cart);
      this.updateCartBadge();
      this.renderCartModal();
    },

    removeFromCart(bookId) {
      const item = cart.find(i => i.id === bookId);
      cart = cart.filter(item => item.id !== bookId);
      setStorage("kh_cart", cart);
      this.updateCartBadge();
      this.renderCartModal();
      this.showToast(item ? `"${item.title}" savatchadan olib tashlandi` : "Kitob savatdan o'chirildi", "info");
    },

    updateCartBadge() {
      const badge = document.getElementById('cartBadge');
      if (badge) {
        const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
        badge.innerText = totalCount;
        badge.classList.remove('bounce-badge');
        void badge.offsetWidth; // trigger reflow
        badge.classList.add('bounce-badge');
      }
    },

    openCartModal() {
      this.renderCartModal();
      const modal = document.getElementById('cartModal');
      if (modal) modal.classList.add('active');
    },

    closeCartModal() {
      const modal = document.getElementById('cartModal');
      if (modal) modal.classList.remove('active');
    },

    renderCartModal() {
      const itemsList = document.getElementById('cartItemsList');
      const emptyState = document.getElementById('cartEmptyState');
      const contentArea = document.getElementById('cartContentArea');
      const summaryCount = document.getElementById('cartSummaryCount');
      const summaryTotal = document.getElementById('cartSummaryTotal');
      const deliveryEl = document.getElementById('cartDeliveryPrice');
      const freePromoEl = document.getElementById('cartFreePromoBadge');

      if (!itemsList) return;

      if (cart.length === 0) {
        if (emptyState) emptyState.classList.remove('hidden');
        if (contentArea) contentArea.classList.add('hidden');
        return;
      }

      if (emptyState) emptyState.classList.add('hidden');
      if (contentArea) contentArea.classList.remove('hidden');

      const itemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);
      const subtotal = cart.reduce((sum, item) => sum + (Number(item.price) * item.quantity), 0);
      const isFreeDelivery = subtotal >= 120000;
      const deliveryFee = isFreeDelivery ? 0 : 20000;
      const total = subtotal + deliveryFee;

      if (summaryCount) summaryCount.innerText = `${itemsCount} ta kitob`;
      if (deliveryEl) {
        deliveryEl.innerHTML = isFreeDelivery 
          ? `<span style="color:var(--emerald); font-weight:800;"><i class="fa-solid fa-gift"></i> BEPUL (Aksiya)</span>` 
          : "20 000 so'm";
      }
      if (freePromoEl) {
        freePromoEl.innerHTML = isFreeDelivery 
          ? `<i class="fa-solid fa-circle-check text-emerald"></i> Tabriklaymiz! Sizga yetkazib berish <strong>mutlaqo BEPUL</strong>!`
          : `<i class="fa-solid fa-truck-fast"></i> Yana ${(120000 - subtotal).toLocaleString('uz-UZ')} so'mlik kitob xarid qiling va yetkazib berish <strong>BEPUL</strong> bo'lsin!`;
      }
      if (summaryTotal) summaryTotal.innerText = total.toLocaleString('uz-UZ') + " so'm";

      itemsList.innerHTML = cart.map(item => `
        <div class="cart-item-row">
          <img class="cart-item-thumb" src="${item.image || 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600'}" alt="${item.title}">
          <div class="cart-item-info">
            <strong class="cart-item-title" title="${item.title}">${item.title}</strong>
            <span class="cart-item-author">${item.author}</span>
            <span class="cart-item-unit-price">${Number(item.price).toLocaleString('uz-UZ')} so'm / dona</span>
          </div>
          
          <!-- Plus va Minus bilan miqdorni tanlash -->
          <div class="cart-qty-stepper">
            <button type="button" class="cart-qty-btn" onclick="app.updateCartItemQty('${item.id}', -1)" title="1 taga kamaytirish">
              <i class="fa-solid fa-minus"></i>
            </button>
            <span class="cart-qty-count">${item.quantity}</span>
            <button type="button" class="cart-qty-btn" onclick="app.updateCartItemQty('${item.id}', 1)" title="1 taga oshirish">
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>

          <div class="cart-item-subtotal">
            ${(Number(item.price) * item.quantity).toLocaleString('uz-UZ')} so'm
          </div>

          <button type="button" class="cart-item-remove" onclick="app.removeFromCart('${item.id}')" title="Savatchadan o'chirish">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      `).join('');

      // Agar foydalanuvchi tizimga kirgan bo'lsa formaga ma'lumotlarini qo'yish
      if (currentUser) {
        const orderName = document.getElementById('orderName');
        const orderPhone = document.getElementById('orderPhone');
        const orderCity = document.getElementById('orderCity');
        if (orderName && !orderName.value) orderName.value = currentUser.name || '';
        if (orderPhone && !orderPhone.value) orderPhone.value = currentUser.phone || '';
        if (orderCity && currentUser.city) orderCity.value = currentUser.city;
      }
    },

    handleCheckoutSubmit(e) {
      e.preventDefault();
      if (cart.length === 0) {
        this.showToast("Savatchangiz bo'sh!", "warning");
        return;
      }

      const name = document.getElementById('orderName').value.trim();
      const phone = document.getElementById('orderPhone').value.trim();
      const city = document.getElementById('orderCity') ? document.getElementById('orderCity').value : 'Toshkent';
      const address = document.getElementById('orderAddress').value.trim();
      const payment = document.getElementById('orderPayment').value;
      const notes = document.getElementById('orderNotes') ? document.getElementById('orderNotes').value.trim() : '';

      const subtotal = cart.reduce((sum, item) => sum + (Number(item.price) * item.quantity), 0);
      const isFreeDelivery = subtotal >= 120000;
      const deliveryFee = isFreeDelivery ? 0 : 20000;
      const total = subtotal + deliveryFee;

      const orderId = `ORD-${Math.floor(1000 + Math.random() * 9000)}`;
      const newOrder = {
        id: orderId,
        userName: name,
        userId: currentUser ? currentUser.id : 'guest',
        phone,
        city,
        address,
        notes,
        paymentType: payment === 'cash' ? "Naqd pul" : (payment === 'payme' ? "Payme / Click" : "Bank kartasi (Terminal)"),
        items: cart.map(i => ({
          id: i.id,
          title: i.title,
          author: i.author,
          price: Number(i.price),
          quantity: i.quantity,
          subtotal: Number(i.price) * i.quantity
        })),
        subtotal,
        deliveryFee,
        total,
        status: "Yangi buyurtma",
        date: new Date().toLocaleDateString('uz-UZ'),
        time: new Date().toLocaleTimeString('uz-UZ', { hour: '2-digit', minute: '2-digit' })
      };

      orders.unshift(newOrder);
      setStorage("kh_orders", orders);

      // Savatni tozalash
      cart = [];
      setStorage("kh_cart", cart);
      this.updateCartBadge();
      this.closeCartModal();

      // Rasmiy chekni chiqarish
      this.openOrderReceiptModal(newOrder.id, true);
      this.showToast(`Rahmat! Buyurtmangiz qabul qilindi. ID: ${orderId}`, "success");
    },

    openOrderReceiptModal(orderId, isNew = false) {
      const ord = orders.find(o => o.id === orderId);
      if (!ord) return;

      const container = document.getElementById('orderReceiptContent');
      const modal = document.getElementById('orderReceiptModal');
      if (!container || !modal) return;

      const itemsHtml = Array.isArray(ord.items) ? ord.items.map(item => {
        if (typeof item === 'string') {
          return `<tr><td colspan="3">${item}</td><td>-</td></tr>`;
        }
        return `
          <tr>
            <td><strong>${item.title}</strong><br><small style="color:var(--gray-500);">${item.author || ''}</small></td>
            <td>${Number(item.price).toLocaleString('uz-UZ')} so'm</td>
            <td style="text-align:center;"><strong>${item.quantity} dona</strong></td>
            <td style="text-align:right; font-weight:700;">${(item.subtotal || item.price * item.quantity).toLocaleString('uz-UZ')} so'm</td>
          </tr>
        `;
      }).join('') : `<tr><td colspan="4">Kitoblar xaridi</td></tr>`;

      container.innerHTML = `
        <div class="receipt-box">
          <div class="receipt-stamp"><i class="fa-solid fa-stamp"></i> Rasmiy Chek</div>
          <div class="receipt-icon-circle">
            <i class="fa-solid fa-circle-check"></i>
          </div>
          <div class="receipt-header-text">
            <h3>${isNew ? "Buyurtmangiz Qabul Qilindi!" : "Xarid Kvitansiyasi"}</h3>
            <p class="receipt-id-tag">Buyurtma kodi: <strong>#${ord.id}</strong></p>
          </div>

          <div class="receipt-details-grid">
            <div class="receipt-field">
              <small>Xaridor:</small>
              <strong>${ord.userName}</strong>
            </div>
            <div class="receipt-field">
              <small>Telefon:</small>
              <strong>${ord.phone}</strong>
            </div>
            <div class="receipt-field">
              <small>Sana va vaqt:</small>
              <strong>${ord.date} ${ord.time || ''}</strong>
            </div>
            <div class="receipt-field">
              <small>To'lov usuli:</small>
              <strong>${ord.paymentType || "Naqd pul"}</strong>
            </div>
            <div class="receipt-field" style="grid-column: 1 / -1;">
              <small>Yetkazish manzili:</small>
              <strong>${ord.city ? ord.city + ', ' : ''}${ord.address}</strong>
            </div>
            ${ord.notes ? `
              <div class="receipt-field" style="grid-column: 1 / -1;">
                <small>Kuryer uchun izoh:</small>
                <strong>${ord.notes}</strong>
              </div>
            ` : ''}
          </div>

          <table class="receipt-table">
            <thead>
              <tr>
                <th>Kitob</th>
                <th>Dona narxi</th>
                <th style="text-align:center;">Soni</th>
                <th style="text-align:right;">Jami</th>
              </tr>
            </thead>
            <tbody>
              ${itemsHtml}
            </tbody>
          </table>

          <div class="receipt-summary-calc">
            <div class="receipt-calc-row">
              <span>Mahsulotlar summasi:</span>
              <strong>${Number(ord.subtotal || ord.total).toLocaleString('uz-UZ')} so'm</strong>
            </div>
            <div class="receipt-calc-row">
              <span>Yetkazib berish:</span>
              <strong>${ord.deliveryFee === 0 ? '<span style="color:var(--emerald); font-weight:800;">BEPUL (Aksiya)</span>' : ((ord.deliveryFee || 20000).toLocaleString('uz-UZ') + " so'm")}</strong>
            </div>
            <div class="receipt-calc-row grand-total">
              <span>Jami to'lov:</span>
              <strong>${Number(ord.total).toLocaleString('uz-UZ')} so'm</strong>
            </div>
          </div>

          <div style="margin-top: 1.25rem; font-size: 0.85rem; color: var(--gray-600); text-align: center;">
            <i class="fa-solid fa-truck-ramp-box text-indigo"></i> Buyurtma holati: <span class="badge badge-success">${ord.status}</span>
          </div>

          <div class="receipt-actions">
            <button class="btn btn-primary btn-block" onclick="window.print()">
              <i class="fa-solid fa-print"></i> Kvitansiyani Chop Etish / Saqlash
            </button>
            <button class="btn btn-outline btn-block" onclick="app.closeOrderReceiptModal()">
              Yopish
            </button>
          </div>
        </div>
      `;

      modal.classList.add('active');
    },

    closeOrderReceiptModal() {
      const modal = document.getElementById('orderReceiptModal');
      if (modal) modal.classList.remove('active');
    },

    // ==================== 8. KITOB ALMASHISH (EXCHANGE) ====================
    renderExchanges() {
      const grid = document.getElementById('exchangeGrid');
      const empty = document.getElementById('exchangeEmptyMessage');
      if (!grid) return;

      const searchVal = (document.getElementById('exchangeSearchInput')?.value || '').toLowerCase().trim();
      const cityVal = document.getElementById('exchangeCityFilter')?.value || 'all';
      const statusVal = document.getElementById('exchangeStatusFilter')?.value || 'all';

      let filtered = exchanges.filter(ex => {
        const matchesSearch = ex.haveTitle.toLowerCase().includes(searchVal) || 
                              ex.wantTitle.toLowerCase().includes(searchVal) ||
                              ex.haveAuthor.toLowerCase().includes(searchVal);
        const matchesCity = cityVal === 'all' || ex.city === cityVal;
        const matchesStatus = statusVal === 'all' || ex.status === statusVal;
        return matchesSearch && matchesCity && matchesStatus;
      });

      if (filtered.length === 0) {
        grid.innerHTML = '';
        if (empty) empty.classList.remove('hidden');
      } else {
        if (empty) empty.classList.add('hidden');
        grid.innerHTML = filtered.map(ex => this.generateExchangeCardHtml(ex)).join('');
      }
    },

    generateExchangeCardHtml(ex) {
      const isCompleted = ex.status === 'completed';
      return `
        <div class="exchange-card">
          <div class="exchange-card-header">
            <span class="exchange-badge-status ${isCompleted ? 'status-completed' : 'status-active'}">
              <i class="fa-solid ${isCompleted ? 'fa-check' : 'fa-arrows-rotate'}"></i>
              ${isCompleted ? 'Almashilgan' : 'Faol taklif'}
            </span>
            <span class="exchange-city"><i class="fa-solid fa-location-dot"></i> ${ex.city}</span>
          </div>

          <div class="exchange-compare">
            <div class="compare-row">
              <div class="compare-icon-have"><i class="fa-solid fa-book"></i></div>
              <div class="compare-info">
                <small>Egasida bor kitob:</small>
                <strong>${ex.haveTitle}</strong>
                <span style="font-size: 0.8rem; color: var(--gray-500);">Muallif: ${ex.haveAuthor} (${ex.condition})</span>
              </div>
            </div>
            <div class="compare-row">
              <div class="compare-icon-want"><i class="fa-solid fa-hand-holding-heart"></i></div>
              <div class="compare-info">
                <small>Evaziga so'ralmoqda:</small>
                <strong style="color: var(--amber);">${ex.wantTitle}</strong>
              </div>
            </div>
          </div>

          <div class="exchange-meta">
            <p><strong>Izoh:</strong> ${ex.note || "Tezroq almashtirishga tayyorman."}</p>
            <p style="margin-top: 0.3rem;"><i class="fa-solid fa-user"></i> ${ex.user}</p>
          </div>

          <div class="exchange-footer">
            <button class="btn btn-outline-sm" onclick="window.location.href='tel:${ex.phone}'">
              <i class="fa-solid fa-phone"></i> Bog'lanish
            </button>
            ${!isCompleted ? `
              <button class="btn btn-amber-sm" onclick="app.openOfferModal('${ex.id}')">
                <i class="fa-solid fa-paper-plane"></i> Taklif yuborish
              </button>
            ` : '<span class="badge badge-secondary">Yopilgan</span>'}
          </div>
        </div>
      `;
    },

    openExchangeModal() {
      if (!currentUser) {
        this.showToast("Almashish e'lonini qoldirish uchun tizimga kiring!", "warning");
        this.openAuthModal('user');
        return;
      }
      const modal = document.getElementById('exchangeModal');
      if (modal) modal.classList.add('active');
    },

    closeExchangeModal() {
      const modal = document.getElementById('exchangeModal');
      if (modal) modal.classList.remove('active');
    },

    handleExchangeSubmit(e) {
      e.preventDefault();
      if (!currentUser) return;

      const haveTitle = document.getElementById('exHaveTitle').value.trim();
      const haveAuthor = document.getElementById('exHaveAuthor').value.trim();
      const condition = document.getElementById('exCondition').value;
      const wantTitle = document.getElementById('exWantTitle').value.trim();
      const city = document.getElementById('exCity').value;
      const phone = document.getElementById('exPhone').value.trim();
      const note = document.getElementById('exNote').value.trim();

      const newEx = {
        id: `ex-${Date.now()}`,
        haveTitle,
        haveAuthor,
        condition,
        wantTitle,
        city,
        user: currentUser.name,
        userId: currentUser.id,
        phone,
        note,
        status: "active",
        createdAt: new Date().toISOString().split('T')[0]
      };

      exchanges.unshift(newEx);
      setStorage("kh_exchanges", exchanges);

      this.closeExchangeModal();
      document.getElementById('exchangeForm').reset();
      this.renderExchanges();
      this.showToast("Almashish e'loningiz qabul qilindi va joylashtirildi!", "success");
    },

    openOfferModal(exId) {
      const ex = exchanges.find(item => item.id === exId);
      if (!ex) return;

      const infoContainer = document.getElementById('offerTargetInfo');
      if (infoContainer) {
        infoContainer.innerHTML = `
          <strong>E'lon:</strong> ${ex.haveTitle} (${ex.haveAuthor})<br>
          <strong>So'ralayotgan kitob:</strong> ${ex.wantTitle}<br>
          <strong>E'lon egasi:</strong> ${ex.user} (${ex.city})
        `;
      }

      const modal = document.getElementById('offerModal');
      if (modal) {
        modal.dataset.exId = exId;
        modal.classList.add('active');
      }
    },

    closeOfferModal() {
      const modal = document.getElementById('offerModal');
      if (modal) modal.classList.remove('active');
    },

    handleOfferSubmit(e) {
      e.preventDefault();
      const bookName = document.getElementById('offerBookName').value.trim();
      const contact = document.getElementById('offerContact').value.trim();

      this.closeOfferModal();
      document.getElementById('offerForm').reset();
      this.showToast(`Taklifingiz e'lon egasiga yetkazildi! U tez orada siz bilan bog'lanadi.`, "success");
    },

    // ==================== 9. ONLAYN MUTOLAA ZALI (ONLINE READER) ====================
    renderReaderLibrary() {
      const grid = document.getElementById('readerLibraryGrid');
      if (!grid) return;

      grid.innerHTML = readBooks.map(b => `
        <div class="reader-book-card">
          <div class="reader-card-cover">
            <i class="fa-solid fa-book-open"></i>
            <strong>${b.title}</strong>
          </div>
          <div class="reader-card-body">
            <h3>${b.title}</h3>
            <p><i class="fa-solid fa-pen-nib"></i> ${b.author}</p>
            <span class="reader-chapters-badge">${b.chapters.length} ta bob mavjud</span>
            <button class="btn btn-outline btn-block mt-auto" onclick="app.openBookInReader('${b.id}')">
              <i class="fa-solid fa-glasses"></i> Mutolaani Boshlash
            </button>
          </div>
        </div>
      `).join('');
    },

    openBookInReader(bookId) {
      const book = readBooks.find(b => b.id === bookId);
      if (!book) return;

      readerState.activeBookId = bookId;
      // Agar avval xatcho'p qo'yilgan bo'lsa o'sha bobdan boshlash
      const savedChapter = readerState.bookmarks[bookId];
      readerState.currentChapterIndex = (savedChapter !== undefined && savedChapter < book.chapters.length) ? savedChapter : 0;

      const workspace = document.getElementById('readerWorkspace');
      const titleEl = document.getElementById('readerCurrentBookTitle');
      const authorEl = document.getElementById('readerCurrentAuthor');
      const chapterSelect = document.getElementById('readerChapterSelect');

      if (titleEl) titleEl.innerText = book.title;
      if (authorEl) authorEl.innerText = book.author;

      // Boblar dropdownini to'ldirish
      if (chapterSelect) {
        chapterSelect.innerHTML = book.chapters.map((ch, idx) => `
          <option value="${idx}" ${idx === readerState.currentChapterIndex ? 'selected' : ''}>${ch.title}</option>
        `).join('');
      }

      this.renderReaderChapter();
      if (workspace) {
        workspace.style.display = 'flex';
        workspace.scrollIntoView({ behavior: 'smooth' });
      }
    },

    renderReaderChapter() {
      const book = readBooks.find(b => b.id === readerState.activeBookId);
      if (!book) return;

      const chapter = book.chapters[readerState.currentChapterIndex];
      const textContainer = document.getElementById('readerTextContent');
      const progressText = document.getElementById('readingProgressText');
      const progressBar = document.getElementById('readingProgressBar');
      const bookmarkBtn = document.getElementById('readerBookmarkBtn');
      const chapterSelect = document.getElementById('readerChapterSelect');

      if (chapterSelect) chapterSelect.value = readerState.currentChapterIndex;

      if (textContainer) {
        // Matnni paragraflarga ajratish
        const paragraphs = chapter.content.split('\n\n').filter(p => p.trim());
        textContainer.innerHTML = `
          <h2>${chapter.title}</h2>
          ${paragraphs.map(p => `<p>${p}</p>`).join('')}
        `;
        document.getElementById('readerViewport').scrollTop = 0;
      }

      // Progress hisoblash
      const current = readerState.currentChapterIndex + 1;
      const total = book.chapters.length;
      const pct = Math.round((current / total) * 100);

      if (progressText) progressText.innerText = `${current} / ${total} bob (${pct}%)`;
      if (progressBar) progressBar.style.width = `${pct}%`;

      // Xatcho'p tekshirish
      const isSaved = readerState.bookmarks[book.id] === readerState.currentChapterIndex;
      if (bookmarkBtn) {
        if (isSaved) {
          bookmarkBtn.classList.add('bookmarked');
          bookmarkBtn.innerHTML = '<i class="fa-solid fa-bookmark"></i>';
        } else {
          bookmarkBtn.classList.remove('bookmarked');
          bookmarkBtn.innerHTML = '<i class="fa-regular fa-bookmark"></i>';
        }
      }
    },

    changeChapter(index) {
      readerState.currentChapterIndex = parseInt(index);
      this.renderReaderChapter();
    },

    navigateChapter(step) {
      const book = readBooks.find(b => b.id === readerState.activeBookId);
      if (!book) return;

      const newIndex = readerState.currentChapterIndex + step;
      if (newIndex >= 0 && newIndex < book.chapters.length) {
        readerState.currentChapterIndex = newIndex;
        this.renderReaderChapter();
      } else if (newIndex >= book.chapters.length) {
        this.showToast("Tabriklaymiz! Siz ushbu kitobni to'liq o'qib bo'ldingiz.", "success");
      }
    },

    toggleBookmark() {
      const bookId = readerState.activeBookId;
      if (!bookId) return;

      if (readerState.bookmarks[bookId] === readerState.currentChapterIndex) {
        delete readerState.bookmarks[bookId];
        this.showToast("Xatcho'p olib tashlandi", "info");
      } else {
        readerState.bookmarks[bookId] = readerState.currentChapterIndex;
        this.showToast("Xatcho'p saqlandi! Keyingi safar mutolaani shu yerdan davom ettirasiz.", "success");
      }
      setStorage("kh_bookmarks", readerState.bookmarks);
      this.renderReaderChapter();
    },

    setReaderTheme(theme) {
      readerState.theme = theme;
      const workspace = document.getElementById('readerWorkspace');
      if (!workspace) return;

      workspace.classList.remove('theme-sepia-mode', 'theme-dark-mode');
      document.querySelectorAll('.theme-btn').forEach(btn => btn.classList.remove('active'));

      if (theme === 'sepia') {
        workspace.classList.add('theme-sepia-mode');
        document.querySelector('.theme-sepia')?.classList.add('active');
      } else if (theme === 'dark') {
        workspace.classList.add('theme-dark-mode');
        document.querySelector('.theme-dark')?.classList.add('active');
      } else {
        document.querySelector('.theme-light')?.classList.add('active');
      }
    },

    adjustFontSize(delta) {
      readerState.fontSize = Math.min(28, Math.max(14, readerState.fontSize + delta));
      const textContainer = document.getElementById('readerTextContent');
      const display = document.getElementById('fontSizeDisplay');

      if (textContainer) textContainer.style.fontSize = `${readerState.fontSize}px`;
      if (display) display.innerText = `${readerState.fontSize}px`;
    },

    toggleFontFamily() {
      const workspace = document.getElementById('readerWorkspace');
      if (!workspace) return;
      readerState.fontFamily = readerState.fontFamily === 'serif' ? 'sans' : 'serif';
      if (readerState.fontFamily === 'sans') {
        workspace.classList.add('font-sans-mode');
        this.showToast("Shrift: Sans-serif (Oddiy)", "info");
      } else {
        workspace.classList.remove('font-sans-mode');
        this.showToast("Shrift: Merriweather (Klassik kitob shrifti)", "info");
      }
    },

    closeReader() {
      const workspace = document.getElementById('readerWorkspace');
      if (workspace) workspace.style.display = 'none';
      readerState.activeBookId = null;
    },

    // ==================== 10. ADMIN PANEL BOSHQARUVI ====================
    renderAdminPanel() {
      // Statistikalarni hisoblash
      const booksEl = document.getElementById('adminTotalBooks');
      const exEl = document.getElementById('adminTotalExchanges');
      const usersEl = document.getElementById('adminTotalUsers');
      const ordersEl = document.getElementById('adminTotalOrders');
      const revEl = document.getElementById('adminTotalRevenue');

      const totalRevenue = orders.reduce((sum, o) => sum + (Number(o.total) || 0), 0);

      if (booksEl) booksEl.innerText = books.length;
      if (exEl) exEl.innerText = exchanges.length;
      if (usersEl) usersEl.innerText = users.length;
      if (ordersEl) ordersEl.innerText = orders.length;
      if (revEl) revEl.innerText = totalRevenue.toLocaleString('uz-UZ') + " so'm";

      this.renderAdminBooksTable();
      this.renderAdminExchangesTable();
      this.renderAdminOrdersTable();
      this.renderAdminUsersTable();

      // Admin sozlamalari maydonlarini to'ldirish
      const admin = users.find(u => u.role === 'admin');
      if (admin) {
        const nameInp = document.getElementById('settingAdminName');
        const loginInp = document.getElementById('settingAdminLogin');
        if (nameInp) nameInp.value = admin.name || "Bosh Administrator";
        if (loginInp) loginInp.value = admin.username || admin.email || "admin";
      }
    },

    switchAdminTab(tabName) {
      document.querySelectorAll('.admin-tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.admin-tab-pane').forEach(p => p.classList.remove('active'));

      const activeBtn = Array.from(document.querySelectorAll('.admin-tab-btn')).find(b => 
        b.getAttribute('onclick')?.includes(`'${tabName}'`)
      );
      if (activeBtn) activeBtn.classList.add('active');

      const targetPane = document.getElementById(`admin-tab-${tabName}`);
      if (targetPane) targetPane.classList.add('active');
    },

    renderAdminBooksTable() {
      const tbody = document.getElementById('adminBooksTableBody');
      if (!tbody) return;

      tbody.innerHTML = books.map(b => `
        <tr>
          <td><img src="${b.image || 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600'}" style="width: 38px; height: 50px; object-fit: cover; border-radius: 4px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);"></td>
          <td><strong>${b.title}</strong><br><small style="color:var(--gray-500);">${b.author}</small></td>
          <td><span class="badge badge-info">${b.genre}</span></td>
          <td><strong>${Number(b.price).toLocaleString('uz-UZ')} so'm</strong></td>
          <td><span class="badge badge-secondary">${b.condition}</span></td>
          <td>${b.seller || "Rasmiy do'kon"}</td>
          <td>
            <div class="table-action-btns">
              <button class="btn-table-action approve" onclick="app.openAdminEditBookModal('${b.id}')" title="Tahrirlash">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button class="btn-table-action delete" onclick="app.adminDeleteBook('${b.id}')" title="O'chirish">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </td>
        </tr>
      `).join('');
    },

    openAdminEditBookModal(bookId) {
      const book = books.find(b => b.id === bookId);
      if (!book) return;

      document.getElementById('editBookId').value = book.id;
      document.getElementById('editBookTitle').value = book.title;
      document.getElementById('editBookAuthor').value = book.author;
      document.getElementById('editBookGenre').value = book.genre;
      document.getElementById('editBookPrice').value = book.price;
      document.getElementById('editBookCondition').value = book.condition;
      document.getElementById('editBookCity').value = book.city || "Toshkent";
      document.getElementById('editBookImageUrl').value = book.image || "";
      document.getElementById('editBookDescription').value = book.description || "";

      const modal = document.getElementById('adminEditBookModal');
      if (modal) modal.classList.add('active');
    },

    closeAdminEditBookModal() {
      const modal = document.getElementById('adminEditBookModal');
      if (modal) modal.classList.remove('active');
    },

    handleAdminEditBookSubmit(e) {
      e.preventDefault();
      const id = document.getElementById('editBookId').value;
      const book = books.find(b => b.id === id);
      if (!book) return;

      book.title = document.getElementById('editBookTitle').value.trim();
      book.author = document.getElementById('editBookAuthor').value.trim();
      book.genre = document.getElementById('editBookGenre').value;
      book.price = Number(document.getElementById('editBookPrice').value);
      book.condition = document.getElementById('editBookCondition').value;
      book.city = document.getElementById('editBookCity').value;
      book.image = document.getElementById('editBookImageUrl').value.trim() || book.image;
      book.description = document.getElementById('editBookDescription').value.trim();

      setStorage("kh_books", books);
      this.closeAdminEditBookModal();
      this.renderAdminBooksTable();
      this.renderShop();
      this.renderHome();
      this.showToast(`"${book.title}" ma'lumotlari yangilandi!`, "success");
    },

    adminDeleteBook(bookId) {
      if (confirm("Rostdan ham ushbu kitobni o'chirmoqchimisiz?")) {
        books = books.filter(b => b.id !== bookId);
        setStorage("kh_books", books);
        this.renderAdminBooksTable();
        this.renderShop();
        this.renderHome();
        this.showToast("Kitob muvaffaqiyatli o'chirildi.", "info");
      }
    },

    renderAdminExchangesTable() {
      const tbody = document.getElementById('adminExchangesTableBody');
      if (!tbody) return;

      tbody.innerHTML = exchanges.map(ex => `
        <tr>
          <td><strong>${ex.haveTitle}</strong> (${ex.haveAuthor})</td>
          <td><strong style="color:var(--amber);">${ex.wantTitle}</strong></td>
          <td>${ex.city}</td>
          <td>${ex.user} (${ex.phone})</td>
          <td>
            <span class="badge ${ex.status === 'completed' ? 'badge-secondary' : 'badge-success'}">
              ${ex.status === 'completed' ? 'Almashilgan' : 'Faol'}
            </span>
          </td>
          <td>
            <div class="table-action-btns">
              <button class="btn-table-action approve" onclick="app.adminToggleExchangeStatus('${ex.id}')" title="Holatini o'zgartirish">
                <i class="fa-solid fa-arrows-rotate"></i>
              </button>
              <button class="btn-table-action delete" onclick="app.adminDeleteExchange('${ex.id}')" title="O'chirish">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </td>
        </tr>
      `).join('');
    },

    adminToggleExchangeStatus(exId) {
      const item = exchanges.find(e => e.id === exId);
      if (item) {
        item.status = item.status === 'active' ? 'completed' : 'active';
        setStorage("kh_exchanges", exchanges);
        this.renderAdminExchangesTable();
        this.renderExchanges();
        this.showToast(`E'lon holati yangilandi: ${item.status === 'completed' ? 'Almashildi' : 'Faol'}`);
      }
    },

    adminDeleteExchange(exId) {
      if (confirm("Ushbu e'lonni o'chirib yuborasizmi?")) {
        exchanges = exchanges.filter(e => e.id !== exId);
        setStorage("kh_exchanges", exchanges);
        this.renderAdminExchangesTable();
        this.renderExchanges();
        this.showToast("E'lon o'chirildi.", "info");
      }
    },

    renderAdminOrdersTable() {
      const tbody = document.getElementById('adminOrdersTableBody');
      if (!tbody) return;

      tbody.innerHTML = orders.map(ord => {
        let itemsDisplay = "Kitoblar";
        if (Array.isArray(ord.items)) {
          itemsDisplay = ord.items.map(i => typeof i === 'string' ? i : `${i.title} (${i.quantity} dona)`).join('<br>');
        }
        return `
          <tr>
            <td><strong>#${ord.id}</strong><br><small style="color:var(--gray-500);">${ord.date} ${ord.time || ''}</small></td>
            <td><strong>${ord.userName}</strong></td>
            <td>
              <a href="tel:${ord.phone}" style="color:var(--primary); font-weight:700;"><i class="fa-solid fa-phone"></i> ${ord.phone}</a><br>
              <small>${ord.city ? ord.city + ', ' : ''}${ord.address}</small>
            </td>
            <td><small>${itemsDisplay}</small></td>
            <td><strong style="color:var(--primary);">${Number(ord.total).toLocaleString('uz-UZ')} so'm</strong><br><small>${ord.paymentType || 'Naqd'}</small></td>
            <td>
              <select class="form-select-sm" onchange="app.adminUpdateOrderStatus('${ord.id}', this.value)" style="font-weight:700;">
                <option value="Yangi buyurtma" ${ord.status === 'Yangi buyurtma' ? 'selected' : ''}>Yangi buyurtma</option>
                <option value="Qabul qilindi" ${ord.status === 'Qabul qilindi' ? 'selected' : ''}>Qabul qilindi</option>
                <option value="Yetkazilmoqda" ${ord.status === 'Yetkazilmoqda' ? 'selected' : ''}>Yetkazilmoqda</option>
                <option value="Yetkazib berildi" ${ord.status === 'Yetkazib berildi' ? 'selected' : ''}>Yetkazib berildi</option>
                <option value="Bekor qilindi" ${ord.status === 'Bekor qilindi' ? 'selected' : ''}>Bekor qilindi</option>
              </select>
            </td>
            <td>
              <div class="table-action-btns">
                <button class="btn btn-outline-sm" onclick="app.openOrderReceiptModal('${ord.id}', false)" title="Kvitansiya / Chek">
                  <i class="fa-solid fa-receipt"></i>
                </button>
                <button class="btn-table-action delete" onclick="app.adminDeleteOrder('${ord.id}')" title="O'chirish">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            </td>
          </tr>
        `;
      }).join('');
    },

    adminUpdateOrderStatus(orderId, newStatus) {
      const ord = orders.find(o => o.id === orderId);
      if (ord) {
        ord.status = newStatus;
        setStorage("kh_orders", orders);
        this.showToast(`Buyurtma #${orderId} holati: ${newStatus}`);
      }
    },

    adminDeleteOrder(orderId) {
      if (confirm(`Buyurtma #${orderId} ni o'chirishni tasdiqlaysizmi?`)) {
        orders = orders.filter(o => o.id !== orderId);
        setStorage("kh_orders", orders);
        this.renderAdminOrdersTable();
        this.renderAdminPanel();
        this.showToast("Buyurtma o'chirildi.", "info");
      }
    },

    renderAdminUsersTable() {
      const tbody = document.getElementById('adminUsersTableBody');
      if (!tbody) return;

      tbody.innerHTML = users.map(u => `
        <tr>
          <td>
            <strong>${u.name}</strong>
            ${u.role === 'admin' ? '<span class="badge badge-primary" style="font-size:0.7rem; margin-left:0.3rem;"><i class="fa-solid fa-crown text-amber"></i> Ega</span>' : ''}
          </td>
          <td>${u.email}<br><small style="color:var(--gray-500);">${u.phone || ''}</small></td>
          <td>
            <span class="badge ${u.role === 'admin' ? 'badge-primary' : 'badge-secondary'}">
              ${u.role === 'admin' ? 'SuperAdmin (Ega)' : 'Foydalanuvchi'}
            </span>
          </td>
          <td>${u.registeredAt || '2026-01-01'}</td>
          <td>
            <span class="badge ${u.status === 'Faol' ? 'badge-success' : 'badge-danger'}">
              ${u.status || 'Faol'}
            </span>
          </td>
          <td>
            ${u.role !== 'admin' ? `
              <div class="table-action-btns">
                <button class="btn-table-action approve" onclick="app.adminToggleUserStatus('${u.id}')" title="${u.status === 'Faol' ? 'Bloklash' : 'Faollashtirish'}">
                  <i class="fa-solid ${u.status === 'Faol' ? 'fa-user-slash' : 'fa-user-check'}"></i>
                </button>
                <button class="btn-table-action delete" onclick="app.adminDeleteUser('${u.id}')" title="O'chirish">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            ` : '<small style="color:var(--gray-400); font-weight:700;">Daxlsiz (Ega)</small>'}
          </td>
        </tr>
      `).join('');
    },

    adminToggleUserStatus(userId) {
      const user = users.find(u => u.id === userId);
      if (!user || user.role === 'admin') return;

      user.status = user.status === 'Faol' ? 'Bloklangan' : 'Faol';
      setStorage("kh_users", users);
      this.renderAdminUsersTable();
      this.showToast(`Foydalanuvchi holati: ${user.status}`, user.status === 'Faol' ? 'success' : 'warning');
    },

    adminDeleteUser(userId) {
      if (confirm("Foydalanuvchini platformadan o'chirib yubormoqchimisiz?")) {
        users = users.filter(u => u.id !== userId);
        setStorage("kh_users", users);
        this.renderAdminUsersTable();
        this.renderAdminPanel();
        this.showToast("Foydalanuvchi o'chirildi.", "info");
      }
    },

    handleAdminSettingsSubmit(e) {
      e.preventDefault();
      const name = document.getElementById('settingAdminName').value.trim();
      const login = document.getElementById('settingAdminLogin').value.trim();
      const newPass = document.getElementById('settingAdminNewPass').value.trim();
      const confirmPass = document.getElementById('settingAdminConfirmPass').value.trim();

      if (newPass !== confirmPass) {
        this.showToast("Yangi parollar mos kelmadi!", "error");
        return;
      }

      if (newPass.length < 3) {
        this.showToast("Parol kamida 3 ta belgidan iborat bo'lishi kerak!", "warning");
        return;
      }

      let admin = users.find(u => u.role === 'admin');
      if (admin) {
        admin.name = name;
        admin.email = login;
        admin.username = login;
        admin.password = newPass;
      } else {
        admin = {
          id: "u-admin",
          name,
          email: login,
          username: login,
          password: newPass,
          role: "admin",
          phone: "+998 71 200 00 00",
          city: "Toshkent",
          registeredAt: "2026-01-01",
          status: "Faol"
        };
        users.unshift(admin);
      }

      setStorage("kh_users", users);
      currentUser = admin;
      setStorage("kh_current_user", currentUser);

      document.getElementById('settingAdminNewPass').value = '';
      document.getElementById('settingAdminConfirmPass').value = '';

      this.renderAuthArea();
      this.renderAdminUsersTable();
      this.showToast("SuperAdmin login va paroli muvaffaqiyatli saqlandi!", "success");
    },

    // ==================== 12. PROFIL / SHAXSIY KABINET ====================
    renderProfile() {
      if (!currentUser) return;

      document.getElementById('profileUserName').innerText = currentUser.name;
      document.getElementById('profileUserEmail').innerText = currentUser.email;
      document.getElementById('profileRoleBadge').innerText = currentUser.role === 'admin' ? 'SuperAdmin (Ega)' : 'Oddiy Foydalanuvchi';

      // Profil sozlamalari maydonlarini to'ldirish
      const pName = document.getElementById('profEditName');
      const pPhone = document.getElementById('profEditPhone');
      const pCity = document.getElementById('profEditCity');
      if (pName) pName.value = currentUser.name || '';
      if (pPhone) pPhone.value = currentUser.phone || '';
      if (pCity && currentUser.city) pCity.value = currentUser.city;

      // Foydalanuvchining kitoblari
      const myBooks = books.filter(b => b.seller === currentUser.name || b.sellerId === currentUser.id);
      const booksGrid = document.getElementById('profileBooksGrid');
      if (booksGrid) {
        if (myBooks.length === 0) {
          booksGrid.innerHTML = `<p style="color:var(--gray-500); grid-column:1/-1;">Siz hali sotuvga kitob qo'ymagansiz.</p>`;
        } else {
          booksGrid.innerHTML = myBooks.map(b => this.generateBookCardHtml(b)).join('');
        }
      }

      // Foydalanuvchining almashuvlari
      const myEx = exchanges.filter(ex => ex.user === currentUser.name || ex.userId === currentUser.id);
      const exGrid = document.getElementById('profileExchangesGrid');
      if (exGrid) {
        if (myEx.length === 0) {
          exGrid.innerHTML = `<p style="color:var(--gray-500); grid-column:1/-1;">Siz hali almashish e'loni bermagansiz.</p>`;
        } else {
          exGrid.innerHTML = myEx.map(ex => this.generateExchangeCardHtml(ex)).join('');
        }
      }

      // Foydalanuvchining xaridlari
      const myOrders = orders.filter(o => o.userName === currentUser.name || o.userId === currentUser.id);
      const ordTable = document.getElementById('profileOrdersTable');
      if (ordTable) {
        if (myOrders.length === 0) {
          ordTable.innerHTML = `<tr><td colspan="6" style="text-align:center; color:var(--gray-500); padding:2rem;">Siz hali xarid amalga oshirmagansiz.</td></tr>`;
        } else {
          ordTable.innerHTML = myOrders.map(o => {
            let itemsText = "Kitoblar";
            if (Array.isArray(o.items)) {
              itemsText = o.items.map(i => typeof i === 'string' ? i : `${i.title} (${i.quantity} dona)`).join(', ');
            }
            return `
              <tr>
                <td><strong>#${o.id}</strong></td>
                <td>${o.date}</td>
                <td><small>${itemsText}</small></td>
                <td><strong style="color:var(--primary);">${Number(o.total).toLocaleString('uz-UZ')} so'm</strong></td>
                <td><span class="badge badge-success">${o.status}</span></td>
                <td>
                  <button class="btn btn-outline-sm" onclick="app.openOrderReceiptModal('${o.id}', false)">
                    <i class="fa-solid fa-receipt"></i> Chek
                  </button>
                </td>
              </tr>
            `;
          }).join('');
        }
      }
    },

    switchProfileTab(tabName) {
      document.querySelectorAll('.profile-tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.profile-pane').forEach(p => p.classList.remove('active'));

      const activeBtn = Array.from(document.querySelectorAll('.profile-tab-btn')).find(b => 
        b.getAttribute('onclick')?.includes(`'${tabName}'`)
      );
      if (activeBtn) activeBtn.classList.add('active');

      const targetPane = document.getElementById(`profile-tab-${tabName}`);
      if (targetPane) targetPane.classList.add('active');
    },

    handleProfileSettingsSubmit(e) {
      e.preventDefault();
      if (!currentUser) return;

      const name = document.getElementById('profEditName').value.trim();
      const phone = document.getElementById('profEditPhone').value.trim();
      const city = document.getElementById('profEditCity').value;
      const newPass = document.getElementById('profEditPass') ? document.getElementById('profEditPass').value.trim() : '';

      currentUser.name = name;
      currentUser.phone = phone;
      currentUser.city = city;
      if (newPass) {
        currentUser.password = newPass;
      }

      const idx = users.findIndex(u => u.id === currentUser.id);
      if (idx !== -1) {
        users[idx] = currentUser;
        setStorage("kh_users", users);
      }
      setStorage("kh_current_user", currentUser);

      this.renderAuthArea();
      this.renderProfile();
      this.showToast("Profil ma'lumotlaringiz muvaffaqiyatli saqlandi!", "success");
    }
  };

  // Global app obyektini oyna (window) darajasiga chiqarish
  window.app = app;

  // DOM to'liq yuklanganda initsializatsiya
  document.addEventListener('DOMContentLoaded', () => {
    app.init();
  });

})();
