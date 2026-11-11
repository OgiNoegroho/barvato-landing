export interface FeatureItem {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
    caption: string;
  };
  secondaryImage?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export interface WorkflowStep {
  step: string;
  title: string;
  description: string;
  detail: string;
}

export interface ShowcaseView {
  id: string;
  label: string;
  frameTitle: string;
  caption: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export interface ShowcaseTab {
  id: string;
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  desktopImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
    caption?: string;
  };
  secondaryViews?: ShowcaseView[];
  mobileImage?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BookingServiceOption {
  id: string;
  name: string;
  durationMinutes: number;
  priceIdr: number;
  priceFormatted: string;
  description: string;
}

export interface BookingBarberOption {
  id: string;
  name: string;
  role: string;
  specialty: string;
  availabilityTag: string;
}

export interface BookingDateOption {
  id: string;
  label: string;
  sublabel: string;
}

export interface BookingTimeSlotOption {
  id: string;
  time: string;
  period: string;
  available: boolean;
}

export interface BookingSimulatorContent {
  eyebrow: string;
  headline: string;
  subheadline: string;
  demoNoticeEn: string;
  demoNoticeId: string;
  illustrativeDisclaimer: string;
  steps: {
    number: number;
    label: string;
  }[];
  services: BookingServiceOption[];
  barbers: BookingBarberOption[];
  dates: BookingDateOption[];
  timeSlots: BookingTimeSlotOption[];
}

export interface LandingContent {
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    pillars: { label: string; detail: string }[];
    heroImage: {
      src: string;
      alt: string;
      width: number;
      height: number;
      caption: string;
    };
    heroMobileImage: {
      src: string;
      alt: string;
      width: number;
      height: number;
      caption: string;
    };
  };
  productOverview: {
    eyebrow: string;
    headline: string;
    description: string;
    highlights: {
      icon: "grid" | "calendar" | "scissors" | "wallet";
      title: string;
      description: string;
    }[];
    image: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
    mobileImage: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
  };
  featuresSection: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    items: FeatureItem[];
  };
  howItWorks: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    steps: WorkflowStep[];
  };
  showcase: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    tabs: ShowcaseTab[];
  };
  bookingSimulator: BookingSimulatorContent;
  pricing: {
    eyebrow: string;
    headline: string;
    description: string;
    statusBadge: string;
    cardTitle: string;
    cardSubtitle: string;
    includedHeading: string;
    includedFeatures: string[];
    note: string;
  };
  faq: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    items: FaqItem[];
  };
  finalCta: {
    eyebrow: string;
    headline: string;
    description: string;
    primaryCta: string;
    loginPrompt: string;
    loginLinkText: string;
  };
  footer: {
    description: string;
    navigationHeading: string;
    capabilitiesHeading: string;
    capabilitiesList: string[];
    contactHeading: string;
    contactDescription: string;
    rightsText: string;
  };
}

export const contentId: LandingContent = {
  hero: {
    eyebrow: "SEMUA URUSAN BARBERSHOP, SATU TEMPAT",
    headline: "Urus barbershop nggak harus ribet.",
    subheadline:
      "Kelola booking, antrean, transaksi, dan tim barbershop dari satu tempat. Jadi kamu bisa lebih fokus mengembangkan bisnismu.",
    primaryCta: "Coba Gratis 14 Hari",
    secondaryCta: "Lihat Cara Kerjanya",
    pillars: [
      {
        label: "Booking & Antrean Walk-in",
        detail: "Jadwal booking dan antrean pelanggan yang datang langsung tampil rapi di satu layar.",
      },
      {
        label: "Atur Tim & Komisi Staff",
        detail: "Jadwal shift kapster, status kursi aktif, sampai hitungan komisi tercatat otomatis.",
      },
      {
        label: "Kasir POS & Analytics Harian",
        detail: "Terima pembayaran Tunai atau QRIS, cek pemasukan, dan tutup kasir tanpa pusing selisih.",
      },
    ],
    heroImage: {
      src: "/images/operations-dashboard-hidpi.png",
      alt: "Tampilan Dashboard Barvato di laptop yang menampilkan pemasukan harian, status kursi kapster, dan antrean pelanggan.",
      width: 2560,
      height: 1600,
      caption:
        "Dashboard Barvato di komputer kasir dan tampilan antrean di HP — pantau operasional toko dari mana saja.",
    },
    heroMobileImage: {
      src: "/images/calendar-queue-mobile-hidpi.png",
      alt: "Tampilan aplikasi Barvato di layar HP yang menampilkan daftar antrean walk-in dan pelanggan yang sedang dilayani.",
      width: 1170,
      height: 2532,
      caption:
        "Tampilan HP — cek urutan antrean walk-in, status kursi aktif, dan selesaikan pembayaran langsung dari genggaman.",
    },
  },

  productOverview: {
    eyebrow: "BIAR KERJAAN NGGAK BERANTAKAN",
    headline: "Barbershop Makin Gampang Diatur Setiap Hari.",
    description:
      "Nggak perlu lagi bolak-balik cek buku catatan, chat grup, dan hitung komisi pakai kalkulator. Dari pelanggan baru datang, check-in booking, sampai tutup kasir malam hari—semuanya langsung nyambung di satu dashboard yang gampang dipakai.",
    highlights: [
      {
        icon: "grid",
        title: "Pantau Kursi Secara Live",
        description:
          "Langsung kelihatan kapster mana yang lagi mencukur, kursi mana yang kosong, dan berapa pelanggan yang masih nunggu giliran.",
      },
      {
        icon: "calendar",
        title: "Booking Nggak Pakai Bentrok",
        description:
          "Kalender jadwal otomatis menyesuaikan durasi layanan dan jam shift staff, jadi kasir nggak bingung saat membagi kursi.",
      },
      {
        icon: "scissors",
        title: "Hitungan Komisi Transparan",
        description:
          "Setiap kali pembayaran selesai di kasir POS, komisi kapster langsung terhitung otomatis sesuai aturan tokomu.",
      },
      {
        icon: "wallet",
        title: "Kasir POS & Kas Harian Rapi",
        description:
          "Pencatatan pembayaran Tunai dan QRIS langsung terhubung ke fitur tutup kasir harian biar uang di laci selalu cocok.",
      },
    ],
    image: {
      src: "/images/calendar-queue-hidpi.png",
      alt: "Layar Operasional Barvato menampilkan kalender booking per kapster di kiri dan panel antrean walk-in di kanan.",
      width: 2560,
      height: 1600,
    },
    mobileImage: {
      src: "/images/operations-dashboard-mobile-hidpi.png",
      alt: "Tampilan dashboard Barvato di layar HP lengkap dengan ringkasan harian dan menu navigasi bawah.",
      width: 1170,
      height: 2532,
    },
  },

  featuresSection: {
    eyebrow: "FITUR ANDALAN BARVATO",
    headline: "Bikin Operasional Lebih Praktis dari Buka Sampai Tutup.",
    subheadline:
      "Semua menu di Barvato saling terhubung otomatis. Begitu layanan di kursi selesai dan dibayar di POS, laporan transaksi dan komisi staff kamu langsung ter-update.",
    items: [
      {
        id: "kalender-appointment",
        number: "01",
        eyebrow: "BOOKING & JADWAL",
        title: "Atur Jadwal Booking Tanpa Takut Bentrok.",
        description:
          "Kelola semua jadwal booking pelanggan lewat kalender visual yang gampang dibaca. Kamu dan kasir bisa langsung cek jam kosong tiap kapster untuk hari ini, minggu ini, atau bulan depan.",
        bullets: [
          "Tampilan timeline per kapster biar gampang lihat jam kosong dan jadwal yang sudah terisi.",
          "Panel detail booking praktis buat check-in pelanggan, pindah jadwal, atau selesaikan layanan.",
          "Otomatis cegah jadwal ganda karena sistem membaca durasi layanan, jam buka toko, dan shift kapster.",
        ],
        image: {
          src: "/images/appointment-details-hidpi.png",
          alt: "Layar Kalender Barvato dengan panel detail booking pelanggan, info layanan, kapster, harga, dan tombol check-in.",
          width: 2560,
          height: 1600,
          caption: "Panel detail booking memudahkan kasir saat proses check-in dan cek status layanan pelanggan.",
        },
        secondaryImage: {
          src: "/images/appointments-list-hidpi.png",
          alt: "Halaman Daftar Booking Barvato yang menampilkan tabel jadwal harian pelanggan beserta statusnya.",
          width: 2560,
          height: 1600,
        },
      },
      {
        id: "walkin-antrean",
        number: "02",
        eyebrow: "ANTREAN & WALK-IN",
        title: "Catat Pelanggan Walk-in Cuma Butuh Beberapa Detik.",
        description:
          "Pelanggan yang datang langsung tetap terlayani dengan tertib. Masukkan nama dan layanan yang dipilih, arahkan ke kapster yang tersedia, lalu pantau urutan tunggu dari panel antrean live.",
        bullets: [
          "Form input walk-in cepat lengkap dengan indikator kapster mana yang lagi siap atau sibuk.",
          "Urutan antrean jelas beserta jam datang, waktu tunggu, pilihan layanan, dan harga.",
          "Satu klik buat mulai layanan di kursi sampai lanjut ke pembayaran POS saat selesai cukur.",
        ],
        image: {
          src: "/images/walk-in-modal-hidpi.png",
          alt: "Form tambah pelanggan walk-in di atas layar operasional Barvato.",
          width: 2560,
          height: 1600,
          caption: "Input pelanggan walk-in dengan cepat sambil langsung melihat ketersediaan kursi kapster.",
        },
        secondaryImage: {
          src: "/images/walk-in-management-hidpi.png",
          alt: "Panel Antrean Barvato yang menampilkan daftar tunggu, pelanggan yang sedang dilayani, dan riwayat selesai hari ini.",
          width: 2560,
          height: 1600,
        },
      },
      {
        id: "manajemen-tim",
        number: "03",
        eyebrow: "ATUR TIM & STAFF",
        title: "Kelola Jadwal Shift dan Komisi Kapster Lebih Gampang.",
        description:
          "Atur data kapster dan staff operasional tokomu di satu tempat. Mulai dari jam kerja rutin mingguan, catatan izin libur, sampai aturan bagi hasil komisi per kapster—semuanya jelas dan rapi.",
        bullets: [
          "Daftar kapster dan staff lengkap dengan peran, status aktif, dan ringkasan jam shift harian.",
          "Fleksibel atur jadwal kerja tiap hari dalam seminggu, termasuk catat izin atau libur tanggal tertentu.",
          "Aturan komisi kapster langsung terhubung otomatis dengan setiap transaksi yang selesai di kasir POS.",
        ],
        image: {
          src: "/images/barbers-hidpi.png",
          alt: "Halaman Tim Barvato yang menampilkan daftar kapster, persentase komisi, status aktif, dan pengaturan jadwal shift.",
          width: 2560,
          height: 1600,
          caption: "Halaman Tim buat atur profil staff, persentase komisi, dan jadwal kerja mingguan.",
        },
      },
      {
        id: "manajemen-keuangan",
        number: "04",
        eyebrow: "POS, TRANSAKSI & ANALYTICS",
        title: "Cek Perkembangan Bisnismu dan Komisi Tim Tanpa Pusing.",
        description:
          "Setiap pembayaran layanan lewat kasir POS—baik Tunai maupun QRIS—otomatis tercatat di laporan keuangan. Kamu bisa pantau omzet harian, rincian transaksi, sampai akumulasi komisi kapster tanpa hitung manual.",
        bullets: [
          "Dashboard analytics pendapatan bersih, jumlah layanan selesai, rata-rata transaksi, serta pisahan Tunai dan QRIS.",
          "Hitung otomatis bagian komisi kapster dan bagian bersih toko untuk setiap transaksi layanan.",
          "Catatan pencairan komisi biar kamu bisa melacak komisi yang sudah dibayar maupun sisa saldo kapster.",
        ],
        image: {
          src: "/images/financial-dashboard-hidpi.png",
          alt: "Dashboard Keuangan Barvato yang menampilkan ringkasan omzet, rincian Tunai dan QRIS, serta daftar transaksi POS.",
          width: 2560,
          height: 1600,
          caption: "Laporan transaksi POS dan analytics keuangan yang memisahkan pembayaran Tunai serta QRIS.",
        },
        secondaryImage: {
          src: "/images/commissions-hidpi.png",
          alt: "Tab Komisi di halaman Keuangan Barvato yang menampilkan rincian komisi per kapster.",
          width: 2560,
          height: 1600,
        },
      },
      {
        id: "tutup-kasir-harian",
        number: "05",
        eyebrow: "TUTUP KASIR & KATALOG LAYANAN",
        title: "Tutup Kasir Harian Lebih Tenang, Uang Laci Selalu Cocok.",
        description:
          "Nggak ada lagi cerita bingung uang kas kurang atau lebih pas toko mau tutup. Fitur Tutup Kasir Harian bantu kamu mencocokkan modal kas awal dan pemasukan tunai dengan uang fisik di laci, didukung pengaturan harga layanan yang praktis.",
        bullets: [
          "Catat modal kas awal saat buka toko dan jumlah uang tunai fisik saat tutup kasir.",
          "Hitung otomatis jumlah uang tunai yang seharusnya ada di laci lengkap dengan info kalau ada selisih.",
          "Atur profil barbershop, jam buka-tutup toko, serta daftar harga dan durasi layanan dari satu menu.",
        ],
        image: {
          src: "/images/services-hidpi.png",
          alt: "Halaman Katalog Layanan Barvato yang menampilkan daftar paket potong rambut, durasi menit, dan harga Rupiah.",
          width: 2560,
          height: 1600,
          caption: "Atur katalog layanan, durasi cukur, dan harga yang langsung terhubung ke jadwal booking serta kasir POS.",
        },
        secondaryImage: {
          src: "/images/payouts-hidpi.png",
          alt: "Halaman Pencairan Komisi yang menampilkan riwayat pembayaran komisi kapster.",
          width: 2560,
          height: 1600,
        },
      },
    ],
  },

  howItWorks: {
    eyebrow: "CARA KERJA SINGKAT",
    headline: "Empat Langkah Praktis Mulai Pakai Barvato.",
    subheadline:
      "Dirancang simpel biar kamu, kasir, maupun tim kapster bisa langsung lancar pakai sejak hari pertama tanpa perlu pelatihan rumit.",
    steps: [
      {
        step: "01",
        title: "Siapkan Profil & Jam Buka Toko",
        description:
          "Isi nama barbershop kamu, alamat, zona waktu, lalu atur jam buka dan tutup toko untuk setiap hari.",
        detail: "Pengaturan Toko",
      },
      {
        step: "02",
        title: "Masukkan Layanan & Tim Kapster",
        description:
          "Buat daftar layanan lengkap dengan harga dan durasinya, lalu tambahkan profil kapster beserta jadwal shift dan komisinya.",
        detail: "Layanan & Staff",
      },
      {
        step: "03",
        title: "Kelola Booking & Antrean Walk-in",
        description:
          "Terima jadwal booking maupun pelanggan yang datang langsung, arahkan ke kursi kapster yang kosong, dan pantau statusnya.",
        detail: "Booking & Antrean",
      },
      {
        step: "04",
        title: "Terima Pembayaran POS & Tutup Kasir",
        description:
          "Selesaikan pembayaran via Tunai atau QRIS di POS, cek komisi kapster yang terhitung otomatis, dan tutup kasir di akhir hari.",
        detail: "POS & Analytics",
      },
    ],
  },

  showcase: {
    eyebrow: "LIHAT TAMPILAN APLIKASI",
    headline: "Intip Langsung Tampilan Kerja di Dalam Barvato.",
    subheadline:
      "Pilih menu di bawah ini buat melihat gimana setiap layar dirancang untuk memudahkan kerjaan meja kasir, kapster, dan pemantauan bisnismu.",
    tabs: [
      {
        id: "tab-overview",
        label: "Dashboard Harian",
        eyebrow: "MENU 01 — DASHBOARD",
        title: "Cek Kondisi Toko Hari Ini dalam Sekali Lihat",
        description:
          "Pantau situasi barbershop kamu dari jam buka sampai tutup. Dashboard utama merangkum pemasukan hari ini, kursi kapster mana yang lagi terisi, dan siapa saja pelanggan yang sedang menunggu.",
        bullets: [
          "Ringkasan pemasukan harian, jumlah booking & walk-in, serta rata-rata nilai transaksi.",
          "Pantauan live setiap kursi kapster (siap melayani atau sedang mencukur lengkap dengan estimasi sisa waktu).",
          "Akses cepat ke daftar antrean walk-in serta pengaturan jam operasional toko.",
        ],
        desktopImage: {
          src: "/images/operations-dashboard-hidpi.png",
          alt: "Tampilan penuh Dashboard Harian Barvato di desktop.",
          width: 2560,
          height: 1600,
          caption: "Dashboard Harian — cek pemasukan hari ini, status kursi kapster, dan antrean pelanggan dalam satu layar.",
        },
        secondaryViews: [
          {
            id: "view-overview-main",
            label: "Dashboard Harian",
            frameTitle: "BARVATO — DASHBOARD OPERASIONAL HARIAN",
            caption: "Dashboard Harian — cek pemasukan hari ini, status kursi kapster, dan antrean pelanggan dalam satu layar.",
            image: {
              src: "/images/operations-dashboard-hidpi.png",
              alt: "Tampilan penuh Dashboard Harian Barvato di desktop.",
              width: 2560,
              height: 1600,
            },
          },
          {
            id: "view-overview-settings",
            label: "Pengaturan Toko",
            frameTitle: "BARVATO — PROFIL & JAM BUKA TOKO",
            caption: "Pengaturan Toko — atur identitas barbershop, zona waktu, dan jam operasional harian.",
            image: {
              src: "/images/shop-settings-hidpi.png",
              alt: "Halaman Pengaturan Toko Barvato menampilkan konfigurasi profil barbershop dan jam operasional.",
              width: 2560,
              height: 1600,
            },
          },
        ],
        mobileImage: {
          src: "/images/operations-dashboard-mobile-hidpi.png",
          alt: "Tampilan Dashboard Harian Barvato di layar HP.",
          width: 1170,
          height: 2532,
        },
      },
      {
        id: "tab-scheduling",
        label: "Jadwal Booking",
        eyebrow: "MENU 02 — BOOKING",
        title: "Atur Jadwal Booking Multi-Kapster Tanpa Bentrok",
        description:
          "Kelola jadwal booking pelanggan lewat kalender timeline per kapster atau tabel daftar booking. Kasir bisa langsung tahu slot jam yang kosong dan proses check-in pelanggan yang baru datang.",
        bullets: [
          "Kalender visual per kolom kapster serta daftar booking lengkap dengan filter status.",
          "Panel detail booking buat check-in pelanggan, ubah jadwal, selesaikan layanan, atau batalkan jadwal.",
          "Otomatis menyesuaikan durasi layanan, jam buka toko, dan jadwal shift kapster.",
        ],
        desktopImage: {
          src: "/images/appointment-details-hidpi.png",
          alt: "Layar Kalender Barvato dengan panel detail booking pelanggan di sisi kanan.",
          width: 2560,
          height: 1600,
          caption: "Detail Booking — lihat info layanan, kapster, jam kedatangan, dan tombol tindakan cepat.",
        },
        secondaryViews: [
          {
            id: "view-sched-details",
            label: "Detail Booking",
            frameTitle: "BARVATO — DETAIL BOOKING & CHECK-IN",
            caption: "Detail Booking — lihat info layanan, kapster, jam kedatangan, dan tombol tindakan cepat.",
            image: {
              src: "/images/appointment-details-hidpi.png",
              alt: "Layar Kalender Barvato dengan panel detail booking pelanggan di sisi kanan.",
              width: 2560,
              height: 1600,
            },
          },
          {
            id: "view-sched-list",
            label: "Daftar Booking",
            frameTitle: "BARVATO — DAFTAR BOOKING HARIAN",
            caption: "Daftar Booking — tabel lengkap semua jadwal booking harian beserta filter kapster dan status.",
            image: {
              src: "/images/appointments-list-hidpi.png",
              alt: "Halaman Daftar Booking Barvato menampilkan tabel jadwal pelanggan, layanan, kapster, waktu, dan status.",
              width: 2560,
              height: 1600,
            },
          },
          {
            id: "view-sched-timeline",
            label: "Kalender Timeline",
            frameTitle: "BARVATO — KALENDER TIMELINE MULTI-KAPSTER",
            caption: "Kalender Timeline — lihat jadwal semua kapster berdampingan biar nggak ada jam yang bentrok.",
            image: {
              src: "/images/calendar-queue-hidpi.png",
              alt: "Tampilan penuh Kalender Timeline Multi-Kapster dan panel antrean Barvato di desktop.",
              width: 2560,
              height: 1600,
            },
          },
        ],
      },
      {
        id: "tab-queue",
        label: "Antrean Live",
        eyebrow: "MENU 03 — ANTREAN",
        title: "Kalender Booking & Antrean Walk-in di Satu Layar",
        description:
          "Gabungkan pantauan jadwal booking dan daftar tunggu pelanggan walk-in di layar yang sama, jadi pembagian kursi kapster tetap rapi walau toko lagi ramai.",
        bullets: [
          "Panel antrean live di sebelah kalender yang menampilkan urutan tunggu pelanggan dengan jelas.",
          "Info jam datang, berapa lama sudah menunggu, layanan yang dipilih, hingga daftar yang sudah selesai hari ini.",
          "Pindahkan status pelanggan dengan cepat dari daftar tunggu ke kursi cukur sampai bayar di POS.",
        ],
        desktopImage: {
          src: "/images/walk-in-management-hidpi.png",
          alt: "Tampilan penuh Kalender Operasional dan Panel Antrean Live di desktop.",
          width: 2560,
          height: 1600,
          caption: "Antrean Live — pantau pelanggan yang lagi nunggu, sedang dicukur di kursi, dan yang sudah selesai hari ini.",
        },
        secondaryViews: [
          {
            id: "view-queue-board",
            label: "Panel Antrean Lengkap",
            frameTitle: "BARVATO — PANEL ANTREAN LIVE & RIWAYAT SELESAI",
            caption: "Antrean Live — pantau pelanggan yang lagi nunggu, sedang dicukur di kursi, dan yang sudah selesai hari ini.",
            image: {
              src: "/images/walk-in-management-hidpi.png",
              alt: "Panel Antrean Barvato dengan daftar tunggu, pelanggan di kursi, dan layanan selesai hari ini.",
              width: 2560,
              height: 1600,
            },
          },
          {
            id: "view-queue-calendar",
            label: "Kalender & Antrean",
            frameTitle: "BARVATO — KALENDER BOOKING & ANTREAN LIVE",
            caption: "Kalender & Antrean — tampilan kerja harian yang memadukan jadwal booking dan antrean walk-in.",
            image: {
              src: "/images/calendar-queue-hidpi.png",
              alt: "Tampilan Kalender Timeline dan Antrean Langsung Barvato di desktop.",
              width: 2560,
              height: 1600,
            },
          },
        ],
        mobileImage: {
          src: "/images/calendar-queue-mobile-hidpi.png",
          alt: "Tampilan Antrean Live Barvato di layar HP.",
          width: 1170,
          height: 2532,
        },
      },
      {
        id: "tab-walkin",
        label: "Input Walk-in",
        eyebrow: "MENU 04 — WALK-IN",
        title: "Catat Pelanggan Datang Langsung Nggak Sampai Semenit",
        description:
          "Tambahkan pelanggan walk-in ke dalam antrean cuma lewat beberapa klik tanpa perlu pindah halaman dari layar kerja utama.",
        bullets: [
          "Ketik nama pelanggan dan pilih paket layanan lengkap dengan info durasi serta harga Rupiah.",
          "Langsung kelihatan indikator kapster mana yang lagi Tersedia atau Sibuk buat memudahkan bagi kursi.",
          "Otomatis masuk ke daftar antrean aktif dan siap dilanjutkan ke kasir POS begitu selesai cukur.",
        ],
        desktopImage: {
          src: "/images/walk-in-modal-hidpi.png",
          alt: "Jendela input pelanggan walk-in di atas layar operasional Barvato.",
          width: 2560,
          height: 1600,
          caption: "Input Walk-in — form ringkas dengan pilihan layanan dan status ketersediaan kapster.",
        },
        secondaryViews: [
          {
            id: "view-walkin-modal",
            label: "Form Input Walk-in",
            frameTitle: "BARVATO — INPUT PELANGGAN WALK-IN",
            caption: "Input Walk-in — form ringkas dengan pilihan layanan dan status ketersediaan kapster.",
            image: {
              src: "/images/walk-in-modal-hidpi.png",
              alt: "Jendela input pelanggan walk-in di atas layar operasional Barvato.",
              width: 2560,
              height: 1600,
            },
          },
          {
            id: "view-walkin-queue",
            label: "Daftar Tunggu Aktif",
            frameTitle: "BARVATO — ANTREAN WALK-IN AKTIF",
            caption: "Daftar Tunggu Aktif — urutan pelanggan walk-in lengkap dengan jam datang dan tombol mulai layanan.",
            image: {
              src: "/images/walk-in-management-hidpi.png",
              alt: "Panel Antrean Walk-in Barvato menampilkan pelanggan yang sedang menunggu dan sedang dilayani.",
              width: 2560,
              height: 1600,
            },
          },
        ],
      },
      {
        id: "tab-team",
        label: "Tim & Layanan",
        eyebrow: "MENU 05 — STAFF & LAYANAN",
        title: "Atur Tim Barbershop, Jadwal Shift, & Daftar Harga",
        description:
          "Kelola tim kapster dan daftar layanan tokomu dengan rapi—mulai dari profil staff, jam kerja harian, catatan izin libur, sampai harga dan durasi tiap layanan.",
        bullets: [
          "Daftar kapster dan staff lengkap dengan peran, status aktif, dan aturan komisi masing-masing.",
          "Pengaturan jadwal kerja mingguan serta catatan izin atau perubahan jam kerja di tanggal tertentu.",
          "Katalog layanan dengan harga Rupiah dan durasi menit yang otomatis terhubung ke booking dan POS.",
        ],
        desktopImage: {
          src: "/images/barbers-hidpi.png",
          alt: "Halaman Tim Barvato menampilkan daftar kapster, persentase komisi, status aktif, dan jadwal kerja.",
          width: 2560,
          height: 1600,
          caption: "Atur Tim & Staff — kelola profil kapster, persentase komisi, dan jadwal shift mingguan.",
        },
        secondaryViews: [
          {
            id: "view-team-barbers",
            label: "Daftar Kapster",
            frameTitle: "BARVATO — ATUR TIM & JADWAL KAPSTER",
            caption: "Atur Tim & Staff — kelola profil kapster, persentase komisi, dan jadwal shift mingguan.",
            image: {
              src: "/images/barbers-hidpi.png",
              alt: "Halaman Tim Barvato menampilkan daftar kapster, persentase komisi, status aktif, dan jadwal kerja.",
              width: 2560,
              height: 1600,
            },
          },
          {
            id: "view-team-services",
            label: "Katalog Layanan",
            frameTitle: "BARVATO — KATALOG LAYANAN & HARGA",
            caption: "Katalog Layanan — atur paket potong rambut, durasi pengerjaan, dan harga Rupiah.",
            image: {
              src: "/images/services-hidpi.png",
              alt: "Halaman Katalog Layanan dan Harga Barvato menampilkan daftar layanan potong rambut, durasi menit, dan harga Rupiah.",
              width: 2560,
              height: 1600,
            },
          },
        ],
      },
      {
        id: "tab-finance",
        label: "POS & Keuangan",
        eyebrow: "MENU 06 — POS & ANALYTICS",
        title: "Laporan Transaksi POS, Komisi Staff, & Tutup Kasir",
        description:
          "Catat setiap pembayaran Tunai maupun QRIS, biarkan sistem menghitung komisi kapster secara otomatis, dan pantau riwayat pencairan komisi serta tutup kasir harian.",
        bullets: [
          "Catatan transaksi POS lengkap dengan pisahan pembayaran Tunai dan QRIS serta fitur tutup kasir.",
          "Hitungan otomatis jatah komisi tiap kapster dan bagian bersih toko dari setiap layanan yang selesai.",
          "Riwayat pencairan komisi biar pembayaran bagi hasil ke tim kapster selalu jelas dan tercatat.",
        ],
        desktopImage: {
          src: "/images/financial-dashboard-hidpi.png",
          alt: "Tampilan penuh halaman Keuangan dan Transaksi POS Barvato di desktop.",
          width: 2560,
          height: 1600,
          caption: "POS & Analytics Keuangan — cek pemasukan bersih, rincian Tunai/QRIS, dan riwayat transaksi harian.",
        },
        secondaryViews: [
          {
            id: "view-finance-ledger",
            label: "Transaksi & Kas",
            frameTitle: "BARVATO — TRANSAKSI POS & TUTUP KASIR",
            caption: "POS & Analytics Keuangan — cek pemasukan bersih, rincian Tunai/QRIS, dan riwayat transaksi harian.",
            image: {
              src: "/images/financial-dashboard-hidpi.png",
              alt: "Tampilan penuh halaman Keuangan dan Transaksi POS Barvato di desktop.",
              width: 2560,
              height: 1600,
            },
          },
          {
            id: "view-finance-commissions",
            label: "Komisi Kapster",
            frameTitle: "BARVATO — REKAP KOMISI PER KAPSTER",
            caption: "Komisi Kapster — rincian jumlah layanan selesai, total komisi, dan sisa saldo yang belum dicairkan.",
            image: {
              src: "/images/commissions-hidpi.png",
              alt: "Tampilan penuh tab Komisi Kapster pada halaman Keuangan Barvato.",
              width: 2560,
              height: 1600,
            },
          },
          {
            id: "view-finance-payouts",
            label: "Pencairan Komisi",
            frameTitle: "BARVATO — RIWAYAT PENCAIRAN KOMISI STAFF",
            caption: "Pencairan Komisi — catatan pembayaran komisi ke kapster lengkap dengan tanggal dan nomor referensi.",
            image: {
              src: "/images/payouts-hidpi.png",
              alt: "Halaman Pencairan Komisi menampilkan riwayat pembayaran komisi kapster.",
              width: 2560,
              height: 1600,
            },
          },
        ],
      },
    ],
  },

  bookingSimulator: {
    eyebrow: "COBA SIMULASI BOOKING",
    headline: "Cobain Sendiri Gampangnya Catat Booking di Barvato.",
    subheadline:
      "Klik pilihan layanan, kapster, hari, dan jam di bawah ini buat merasakan gimana cepatnya mengatur jadwal booking pelanggan.",
    demoNoticeEn: "Simulasi Interaktif — Hanya contoh tampilan di halaman ini, bukan booking sungguhan.",
    demoNoticeId: "Silakan klik langkah 1 sampai 5 di bawah buat mencoba alurnya.",
    illustrativeDisclaimer:
      "Semua daftar layanan, harga Rupiah, nama kapster, hari, dan jam kosong di bawah ini hanya contoh ilustrasi.",
    steps: [
      { number: 1, label: "Pilih Layanan" },
      { number: 2, label: "Pilih Kapster" },
      { number: 3, label: "Pilih Hari" },
      { number: 4, label: "Pilih Jam" },
      { number: 5, label: "Ringkasan Booking" },
    ],
    services: [
      {
        id: "svc-regular",
        name: "Potong Rambut Reguler",
        durationMinutes: 30,
        priceIdr: 35000,
        priceFormatted: "Rp 35.000",
        description: "Potong rambut rapi dengan konsultasi gaya dasar dan perapian garis leher.",
      },
      {
        id: "svc-skinfade",
        name: "Skin Fade",
        durationMinutes: 45,
        priceIdr: 45000,
        priceFormatted: "Rp 45.000",
        description: "Gradasi presisi dari tipis bersih di sisi samping sampai bagian atas.",
      },
      {
        id: "svc-wash",
        name: "Haircut + Keramas",
        durationMinutes: 45,
        priceIdr: 50000,
        priceFormatted: "Rp 50.000",
        description: "Potong rambut lengkap lanjut cuci rambut, pijat kepala ringan, dan hair tonic.",
      },
      {
        id: "svc-styling",
        name: "Haircut + Styling",
        durationMinutes: 45,
        priceIdr: 55000,
        priceFormatted: "Rp 55.000",
        description: "Potong rambut plus styling akhir pakai pomade atau clay sesuai tekstur rambut.",
      },
      {
        id: "svc-beard",
        name: "Cukur Jenggot",
        durationMinutes: 20,
        priceIdr: 25000,
        priceFormatted: "Rp 25.000",
        description: "Perapian kumis dan jenggot dengan handuk hangat biar tampil makin bersih.",
      },
      {
        id: "svc-combo",
        name: "Haircut + Beard Trim",
        durationMinutes: 60,
        priceIdr: 65000,
        priceFormatted: "Rp 65.000",
        description: "Paket lengkap potong rambut dan perapian jenggot dalam satu sesi booking.",
      },
    ],
    barbers: [
      {
        id: "brb-rizky",
        name: "Rizky Pratama",
        role: "Senior Kapster (Contoh)",
        specialty: "Classic Cut & Scissor Work",
        availabilityTag: "Tersedia Hari Ini (Contoh)",
      },
      {
        id: "brb-ahmad",
        name: "Ahmad Fauzan",
        role: "Senior Kapster (Contoh)",
        specialty: "Skin Fade & Taper",
        availabilityTag: "Tersedia Hari Ini (Contoh)",
      },
      {
        id: "brb-dimas",
        name: "Dimas Saputra",
        role: "Kapster (Contoh)",
        specialty: "Textured Crop & Styling",
        availabilityTag: "Slot Sore Tersedia (Contoh)",
      },
      {
        id: "brb-fajar",
        name: "Fajar Ramadhan",
        role: "Kapster (Contoh)",
        specialty: "Regular Cut & Beard Trim",
        availabilityTag: "Tersedia Hari Ini (Contoh)",
      },
    ],
    dates: [
      {
        id: "date-today",
        label: "Hari Ini",
        sublabel: "Jadwal Hari Ini (Contoh)",
      },
      {
        id: "date-tomorrow",
        label: "Besok",
        sublabel: "Jadwal H+1 (Contoh)",
      },
      {
        id: "date-dayafter",
        label: "Lusa",
        sublabel: "Jadwal H+2 (Contoh)",
      },
      {
        id: "date-weekend",
        label: "Akhir Pekan",
        sublabel: "Sabtu / Minggu (Contoh)",
      },
    ],
    timeSlots: [
      { id: "slot-0930", time: "09:30", period: "Pagi", available: true },
      { id: "slot-1030", time: "10:30", period: "Pagi", available: true },
      { id: "slot-1130", time: "11:30", period: "Siang", available: false },
      { id: "slot-1330", time: "13:30", period: "Siang", available: true },
      { id: "slot-1500", time: "15:00", period: "Sore", available: true },
      { id: "slot-1630", time: "16:30", period: "Sore", available: false },
      { id: "slot-1900", time: "19:00", period: "Malam", available: true },
      { id: "slot-2000", time: "20:00", period: "Malam", available: true },
    ],
  },

  pricing: {
    eyebrow: "INFO PAKET & COBA GRATIS",
    headline: "Harga Transparan yang Pas Buat Barbershop Kamu.",
    description:
      "Kami sedang menyiapkan paket langganan resmi yang terjangkau untuk barbershop independen di Indonesia. Sambil menunggu, kamu bisa coba gratis 14 hari untuk merasakan langsung semua fiturnya.",
    statusBadge: "Coba Gratis 14 Hari",
    cardTitle: "Akses Awal & Coba Gratis 14 Hari",
    cardSubtitle:
      "Detail harga langganan resmi akan segera kami umumkan. Hubungi tim kami buat klaim akses coba gratis 14 hari atau ngobrol santai soal kebutuhan barbershop kamu.",
    includedHeading: "Semua Fitur Ini Langsung Bisa Kamu Pakai:",
    includedFeatures: [
      "Dashboard harian & pantauan status kursi kapster secara live",
      "Kalender booking multi-kapster (tampilan Harian, Mingguan, Bulanan)",
      "Input pelanggan walk-in cepat & manajemen antrean langsung",
      "Atur profil staff, jadwal shift mingguan, & catatan izin libur",
      "Kasir POS praktis dengan pencatatan pembayaran Tunai & QRIS",
      "Hitungan komisi kapster otomatis & catatan pencairan komisi",
      "Fitur Tutup Kasir Harian (kas awal, uang fisik di laci, & cek selisih)",
      "Pengaturan profil barbershop, jam buka, & katalog harga layanan",
    ],
    note: "Nggak ada biaya tersembunyi. Info harga langganan resmi bakal langsung kami tampilkan di halaman ini.",
  },

  faq: {
    eyebrow: "TANYA JAWAB (FAQ)",
    headline: "Hal yang Sering Ditanyakan Pemilik Barbershop.",
    subheadline:
      "Jawaban singkat dan jelas soal fitur, perangkat yang didukung, dan cara pakai Barvato sehari-hari.",
    items: [
      {
        question: "Apa itu Barvato?",
        answer:
          "Barvato adalah aplikasi manajemen barbershop berbasis web yang bantu kamu mengatur jadwal booking, antrean walk-in, jadwal shift kapster, daftar harga layanan, sampai kasir POS, hitungan komisi staff, dan tutup kasir harian di satu tempat.",
      },
      {
        question: "Barvato cocok dipakai siapa saja?",
        answer:
          "Cocok banget buat pemilik barbershop independen, kasir meja depan, dan tim kapster yang pengen urusan jadwal, antrean, dan keuangan harian jadi rapi tanpa harus rekap manual di buku atau kertas.",
      },
      {
        question: "Bisa atur pelanggan booking sekaligus yang datang langsung (walk-in)?",
        answer:
          "Bisa banget. Di layar Operasional Barvato, kalender booking dan panel antrean walk-in tampil berdampingan. Jadi kasir gampang mengatur pembagian kursi kapster biar pelanggan booking dan walk-in sama-sama terlayani tepat waktu.",
      },
      {
        question: "Gimana cara Barvato menghitung komisi kapster?",
        answer:
          "Kamu tinggal atur skema komisi di awal—bisa pakai aturan komisi standar toko atau atur beda-beda untuk tiap kapster (persentase maupun nominal Rupiah). Begitu transaksi selesai dibayar di kasir POS, komisi kapster dan bagian bersih toko langsung terhitung otomatis.",
      },
      {
        question: "Apakah kasir POS Barvato mendukung pembayaran QRIS?",
        answer:
          "Ya. Saat proses pembayaran di kasir POS, kamu bisa pilih metode Tunai atau QRIS. Pembayaran QRIS otomatis dicatat terpisah dari uang tunai di laci, jadi hitungan uang fisik waktu Tutup Kasir Harian nggak bakal rancu.",
      },
      {
        question: "Bisa dibuka dari HP atau tablet nggak?",
        answer:
          "Bisa! Tampilan Barvato otomatis menyesuaikan ukuran layar dan punya menu bawah khusus buat HP. Kamu bisa buka lewat komputer kasir, tablet di meja depan, atau pantau langsung dari smartphone kamu kapan saja.",
      },
      {
        question: "Gimana cara mulai coba gratis 14 hari?",
        answer:
          "Saat ini pembukaan akun baru kami bantu langsung biar barbershop kamu bisa cepat jalan. Kamu tinggal klik tombol 'Coba Gratis 14 Hari' atau 'Hubungi Kami' di halaman ini untuk mulai, atau klik 'Masuk' kalau tokomu sudah punya akun aktif.",
      },
    ],
  },

  finalCta: {
    eyebrow: "SIAP BIKIN BARBERSHOP LEBIH RAPI?",
    headline: "Yuk, Urus Barbershop Lebih Gampang Mulai Hari Ini.",
    description:
      "Satukan jadwal booking, antrean walk-in, komisi staff, dan kasir POS di satu tempat yang praktis. Kamu tinggal fokus kasih potongan terbaik buat pelanggan.",
    primaryCta: "Coba Gratis 14 Hari",
    loginPrompt: "Sudah punya akun Barvato yang aktif?",
    loginLinkText: "Masuk ke Dashboard",
  },

  footer: {
    description:
      "Aplikasi manajemen barbershop praktis buat atur jadwal booking, antrean walk-in, jadwal & komisi staff, kasir POS, sampai laporan harian.",
    navigationHeading: "Menu Halaman",
    capabilitiesHeading: "Fitur Utama",
    capabilitiesList: [
      "Dashboard & Status Kursi",
      "Kalender Booking",
      "Antrean Walk-in Live",
      "Jadwal & Komisi Staff",
      "Kasir POS & Analytics",
    ],
    contactHeading: "Mulai Pakai",
    contactDescription:
      "Hubungi kami buat coba gratis 14 hari atau tanya-tanya santai soal kebutuhan barbershop kamu.",
    rightsText: "Semua hak cipta dilindungi.",
  },
};
