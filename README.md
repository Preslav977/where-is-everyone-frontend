# where-is-everyone-frontend

> React SPA for a photo-tagging game — find all characters as fast as possible to earn a place on the leaderboard.

[![GitHub stars](https://img.shields.io/github/stars/Preslav977/where-is-everyone-frontend?style=social)](https://github.com/Preslav977/where-is-everyone-frontend)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

[![Star History Chart](https://api.star-history.com/svg?repos=Preslav977/where-is-everyone-frontend&type=Date)](https://star-history.com/#Preslav977/where-is-everyone-frontend&Date)

[Live Site](https://where-is-everyone-frontend.vercel.app/) · [Backend Repo](https://github.com/Preslav977/where-is-everyone-backend)

![App preview](https://github.com/user-attachments/assets/e169f37e-339d-4fe2-b9c4-d741fafac768)

---

## ✨ Features

| Feature                  | Description                                                                                                                           |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| ⏱️ Synced Timer          | Frontend timer built with `useRef` and `clearInterval`; final time validated server-side to prevent cheating                          |
| 🎯 Coordinate Validation | Click position calculated with `getBoundingClientRect` + `clientX/Y` into normalized coordinates — consistent across all screen sizes |
| 🔽 Character Dropdown    | Dropdown appears on click; closes on outside click via `useRef` + `useEffect` cleanup                                                 |
| 🏆 Leaderboard           | Displays ranked completion times fetched via a React Router Loader before the component mounts                                        |
| 🧪 Tests                 | Component tests with Vitest                                                                                                           |
| 🎨 CSS Modules           | Scoped per-component stylesheets — no class name collisions                                                                           |

---

## 🚀 Quick Start

### Install

```bash
git clone https://github.com/Preslav977/where-is-everyone-frontend.git
cd where-is-everyone-frontend
npm install
```

### Configure

Create a `.env` file in the root:

```env
VITE_API_URL=
```

### Run

```bash
npm run dev
```

> App runs on [http://localhost:5173](http://localhost:5173)

---

## 🏗️ Architecture

```
src/
  components/   # Game board, Dropdown, Leaderboard, Timer
  pages/        # Route-level components
  router/       # React Router definitions with Loaders for pre-fetch
  styles/       # CSS Modules — one file per component
```

On each click, `getBoundingClientRect` converts the raw `clientX/Y` mouse event into normalized coordinates relative to the image. These are sent to the backend for validation — keeping character positions server-side means they can't be read from the client. React Router Loaders fetch the leaderboard data before the route renders, avoiding a loading flash on mount.

---

## 🤝 Contributing

1. Reach out to me first
2. Fork → Branch → PR
3. Run `npm test` before submitting

---

## 📄 License

MIT © [Preslav977](https://github.com/Preslav977)
