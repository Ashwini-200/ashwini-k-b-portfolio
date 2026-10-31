# Ashwini K B — Portfolio

A high-performance, single-page developer portfolio showcasing full-stack engineering and data-driven applications.

**Live site:** [https://myportfolio-cyan-pi-26.vercel.app/](https://myportfolio-cyan-pi-26.vercel.app/)

Built during the placement training program at [TAP Academy](https://thetapacademy.com/) (full-stack development, AI and augmented reality training).

---

## Tech Stack

- **Framework & Tooling:** React 19, Vite
- **Styling:** Tailwind CSS 4
- **Animations & Interactivity:** Framer Motion, AOS (Animate On Scroll), WebGL (Fluid Splash Cursor)
- **Services:** EmailJS Browser SDK

---

## Run Locally

Clone the repository and install the dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run ESLint check:

```bash
npm run lint
```

---

## Environment Variables

To enable the direct contact form via EmailJS, create a `.env.local` file in the project root containing:

```env
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```
