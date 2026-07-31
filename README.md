# Abdalla Zaid — Personal Portfolio

A modern, bilingual (**Arabic / English**) personal portfolio and resume website built with **React + Vite + Tailwind CSS**. Features a sleek dark tech design, featured projects with live demos, skills, experience, education, and contact sections.

> Live site: [portfolio-abdalla-zaid.vercel.app](https://portfolio-abdalla-zaid.vercel.app)

---

## ✨ Features

- **Bilingual Content** — full Arabic (RTL) and English support
- **Featured Projects** — live demos and source links for every project
- **Skills & Expertise** — categorized skill levels, programming languages, and operating systems
- **Experience & Education** — timeline of roles and studies (Technion — CS & Software Engineering)
- **Terminal-Inspired Hero** — animated terminal window accent
- **GitHub Stats** — live contribution stats
- **Theme Toggle** — light / dark mode
- **Fully Responsive** — optimized for desktop, tablet, and mobile

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+
- **npm** (or yarn / pnpm)

### Installation

```bash
# Clone the repository
git clone https://github.com/AbdullahZaid-ggg/portfolio_abdalla_zaid.git
cd portfolio_abdalla_zaid

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open **http://localhost:5173** in your browser.

### Build for Production

```bash
npm run build    # Outputs to dist/
npm run preview  # Preview the production build
```

### Lint

```bash
npm run lint     # Runs oxlint
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | UI components and routing (`react-router-dom` v7) |
| **Vite 8** | Build tool and dev server |
| **Tailwind CSS** | Utility-first styling |
| **oxlint** | Linting |

---

## 📂 Project Structure

```text
portfolio_abdalla_zaid/
├── public/                    # Static assets (avatar, resume PDF, icons)
├── src/
│   ├── components/            # Reusable UI components
│   │   ├── Navbar.jsx         # Navigation bar
│   │   ├── Hero.jsx           # Hero section with terminal window
│   │   ├── Projects.jsx       # Featured projects grid
│   │   ├── Skills.jsx         # Skills & expertise section
│   │   ├── GitHubStats.jsx    # GitHub statistics
│   │   ├── TerminalWindow.jsx # Animated terminal accent
│   │   └── ...                # About, Blog, Contact, Experience, etc.
│   ├── pages/                 # Route pages (Home, About, Projects, Skills, ...)
│   ├── data/
│   │   └── portfolioData.js   # All portfolio content (bilingual)
│   ├── App.jsx                # Main app with routes
│   └── main.jsx               # Entry point
├── index.html
└── package.json
```

---

## ✍️ Customizing Content

All personal data (name, bio, skills, projects, experience) lives in one file:

```
src/data/portfolioData.js
```

Edit that file to update your information in both Arabic and English. Styling is handled with Tailwind classes and `src/index.css`.

---

## 🌐 Deployment

The site is deployed to **Vercel**. Any push to the default branch triggers an automatic build and deployment.

---

## 📄 License

This project is open-source and free to use, modify, and extend.
