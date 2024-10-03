// /src
// ├── /app                     // Ilovaning asosiy qismi
// │   ├── /core                // Core modul - bir marta ishlatiladigan singleton xizmatlar
// │   │   ├── authentication/   // Autentifikatsiya bilan bog'liq kodlar (login, register)
// │   │   ├── guards/           // Router guard'lar (masalan, auth guard)
// │   │   ├── interceptors/     // HTTP interceptors (masalan, token interceptors)
// │   │   ├── services/         // Umumiy xizmatlar (masalan, LoggerService)
// │   │   │   ├── theme.service.ts   // ThemeService fayli shu yerda
// │   │   └── core.module.ts    // Core modul fayli - barcha xizmatlarni shu modulda taqdim etasiz
// │   ├── /shared               // Shared modul - qayta ishlatiladigan umumiy komponentlar va direktivlar
// │   │   ├── components/       // Qayta ishlatiladigan komponentlar (masalan, umumiy button)
// │   │   ├── directives/       // Qayta ishlatiladigan direktivlar (masalan, hover effekt)
// │   │   ├── pipes/            // Qayta ishlatiladigan pipes (masalan, sana formatlash uchun pipe)
// │   │   └── shared.module.ts  // Shared modul fayli - barcha qayta foydalaniladigan komponentlar va xizmatlar shu yerda
// │   ├── /features             // Har bir funksional bo'lim (feature) uchun modullar
// │   │   ├── /feature1         // Feature 1 - masalan, mahsulotlar moduli
// │   │   │   ├── components/    // Feature 1 ga tegishli barcha komponentlar
// │   │   │   ├── services/      // Feature 1 xizmatlari (masalan, ProductService)
// │   │   │   ├── models/        // Feature 1 uchun TypeScript interfeyslari va modellari
// │   │   │   ├── feature1-routing.module.ts  // Feature 1 ga tegishli routing fayli
// │   │   │   └── feature1.module.ts          // Feature 1 moduli
// │   │   ├── /feature2         // Feature 2 - masalan, foydalanuvchi profili moduli
// │   │   │   ├── components/    // Feature 2 komponentlari
// │   │   │   ├── services/      // Feature 2 xizmatlari (masalan, UserProfileService)
// │   │   │   ├── models/        // Feature 2 modellari va interfeyslari
// │   │   │   ├── feature2-routing.module.ts  // Feature 2 routing
// │   │   │   └── feature2.module.ts          // Feature 2 moduli
// │   ├── /layout               // Ilovaning umumiy layout elementlari (header, footer, navbar)
// │   │   ├── header/           // Header komponenti (masalan, navigatsiya menyusi)
// │   │   ├── footer/           // Footer komponenti (masalan, copywrite qismi)
// │   │   └── layout.module.ts  // Layout moduli
// │   ├── /assets               // Statik fayllar (rasmlar, shriflar, CSS va boshqalar)
// │   ├── /environments         // Muxitlar uchun konfiguratsiyalar
// │   │   ├── environment.ts     // Ishlab chiqish muhiti konfiguratsiyasi
// │   │   └── environment.prod.ts// Ishlab chiqarish muhiti konfiguratsiyasi
// │   ├── app.component.ts      // Ilovaning asosiy komponenti
// │   ├── app.module.ts         // Ilovaning asosiy moduli - boshqa barcha modullar shu yerda birlashtiriladi
// │   ├── app-routing.module.ts // Ilovaning asosiy routing fayli
// └── main.ts                   // Angular ilovasini yuklaydigan va ishlatadigan asosiy fayl
