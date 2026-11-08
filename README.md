# ☕ Maayaa The Cafe

Official website for **Maayaa The Cafe** — a cafe in Hyderabad serving Irani chai, specialty coffee, Maggi, shakes, pastas & more.

**🔗 Live site:** [https://maayaa-the-cafe.vercel.app](https://maayaa-the-cafe.vercel.app)

---

## ✨ Features

- **Home, Menu, Gallery, About & Contact** pages with file-based routing (TanStack Router)
- **Full digital menu** — Tea Ritual, Baristas Corner, Signature Specials, Maggi Magic, Thick Shakes, Pastas & more
- **Contact page** with embedded Google Maps, one-tap calling, and directions link
- **Instagram band** linking to the cafe's profile
- Fully **responsive** design with a mobile-first layout
- Built with **React 19**, **TanStack Start**, **Tailwind CSS 4**, and **shadcn/ui** components

## 🛠 Tech Stack

| Layer     | Technology                                  |
| --------- | ------------------------------------------- |
| Framework | TanStack Start (React 19, SSR)              |
| Routing   | TanStack Router (file-based routes)         |
| Styling   | Tailwind CSS 4 + tw-animate-css             |
| UI        | shadcn/ui (Radix UI primitives), Lucide icons |
| Forms     | React Hook Form + Zod                       |
| Testing   | Vitest + React Testing Library              |
| Tooling   | Vite 8, TypeScript, ESLint + Prettier       |

## 🚀 Getting Started

You need **Node.js 18+** and npm.

```sh
# Clone the repository
git clone https://github.com/kishorejavvadi15/Maaya-The-cafe.git
cd Maaya-The-cafe/screenshot-exact-match-main

# Install dependencies
npm i

# Start the dev server
npm run dev
```

The site runs locally at `http://localhost:8080`.

## 📜 Available Scripts

| Command          | Description                  |
| ---------------- | ---------------------------- |
| `npm run dev`    | Start the dev server         |
| `npm run build`  | Build for production         |
| `npm run preview`| Preview the production build |
| `npm run lint`   | Lint with ESLint             |
| `npm run format` | Format code with Prettier    |
| `npm test`       | Run tests with Vitest        |

## 📁 Project Structure

```
src/
├── components/        # SiteHeader, SiteFooter, MapEmbed, InstagramBand, ui/ (shadcn)
├── lib/
│   ├── site.ts        # Cafe info (phone, address, hours, links) + full menu data
│   └── utils.ts
├── routes/            # File-based routes: index, menu, gallery, about, contact
├── router.tsx
└── styles.css
```

## 📍 Cafe Info

- **Address:** Gandimaismma, Medak Highway Road, beside Ujwala Grand, Hyderabad, Telangana – 500045
- **Phone:** [+91 91107 47029](tel:+919110747029)
- **Hours:** 10:00 AM – 11:00 PM
- **Instagram:** [@maayaa.thecafe](https://www.instagram.com/maayaa.thecafe)

## 🛠 Built With

This project was built with [Lovable](https://lovable.dev). Continue developing it in the [Lovable editor](https://lovable.dev/projects/23f5141c-5dcb-43e4-833a-df8e3ef0f02f).
