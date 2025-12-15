<div align="center">
  <img src="./images/Driv.png" alt="Driv Logo" width="400"/>
</div>

# Driv

**There are plenty of tools for racing. There are none built for drifting.**  
**Driv exists to change that.**

---

## What is Driv?

Driv is a comprehensive drifting event management and fan engagement platform built specifically for the drift community. It consolidates driver profiles, live brackets, standings, media, and event information—across multiple drift series—into one centralized experience.

Driv is a drifting-first platform designed to unify the fragmented drifting ecosystem into a single, modern destination for fans, drivers, and organizers. Built on the MERN stack with a mobile-first mindset, Driv brings together driver portfolios, live and replayable brackets, event hubs with livestream integration, season standings, and media coverage across multiple series under one banner.

The MVP focuses on delivering the core fan and admin experience—profiles, events, brackets, standings, and media—while laying the groundwork for advanced tooling like judge interfaces, telemetry integration, and a future React Native mobile app.

**Driv is built by someone deeply rooted in drifting, with the goal of preserving the sport's legacy while modernizing how it's experienced.**

---

## The Problem

Drifting data is currently fragmented across social media, standalone bracket tools, streaming platforms, and spreadsheets. Driv's vision is to replace that fragmentation with one authoritative home for drifting—designed with the sport's culture, workflows, and legacy in mind.

**Driv is not just an app; it's an ecosystem.**

---

## Tech Stack

- **Frontend:** React + Vite
- **Backend:** Node.js + Express
- **Database:** MongoDB
- **Language:** JavaScript
- **Styling:** Neon-inspired, motorsport-first UI
- **Architecture:** Modular, API-driven, React Native–ready

---

## Core Goals

- Unify drifting data across series and events
- Deliver real-time and post-event visibility for fans
- Provide clean, scalable admin tooling for organizers
- Preserve driver history, stats, and legacy
- Prepare for future judge, telemetry, and mobile workflows

---

## Core Features — MVP (Priority 1)

These features define the initial public launch and admin tooling.

- **Driver Profiles**
  - Driver bio, hometown, car details
  - Basic win/loss and season participation
- **Event Pages**
  - Event overview, schedule, location
  - Embedded livestreams (YouTube / Twitch)
- **Custom Bracket System**
  - 8 / 16 / 32 driver formats
  - Public-facing, live-updating brackets
- **Season Standings**
  - Per-series leaderboard tables
  - Manual admin updates (initial phase)
- **Media Gallery**
  - Photos and videos per event
  - Simple upload and display system
- **Admin Dashboard**
  - CRUD management for drivers, events, brackets, standings, and media
  - Clear separation between admin and public views
- **Auth & Roles**
  - Admin vs public access
  - Foundation for future driver/judge roles
- **UX Fundamentals**
  - Loading and error states
  - Responsive, mobile-friendly layouts

---

## Feature Expansion — Post-MVP (Priority 2)

- Homepage Spotlight / Highlights
- Global search (drivers, events)
- Event calendar (list + grid views)
- Advanced bracket logic (byes, seeding, history)
- Media tagging (driver, event, season)
- Browser notifications for live updates
- Polished neon theme system
- Mobile-first UX refinement

---

## Long-Term Roadmap — Priority 3

- Driver accounts with self-managed profiles
- Judge scoring tools with live bracket updates
- Head-to-head stats engine and performance trends
- Telemetry integration (Wally and others)
- Real-time battle center via WebSockets
- React Native iOS application
- Analytics and engagement dashboards

---

## Development Philosophy

Driv is built using a tiered, Jira-style roadmap:

1. **Tier 1 — MVP**
   - Core fan experience + admin tooling
2. **Tier 2 — Expansion**
   - UX polish, discoverability, and workflow improvements
3. **Tier 3 — Ecosystem**
   - Judges, drivers, telemetry, and mobile

Every feature is broken into clearly defined tasks with acceptance criteria to keep development focused and scalable.

---

## Target Users

- **Fans**
  - Follow drivers, watch events, track standings
- **Drivers**
  - Build a public portfolio and legacy
- **Admins / Organizers**
  - Manage events, brackets, and content
- **Judges (Future)**
  - Score runs and manage battle outcomes

---

## Design Principles

- Motorsport-first, not generic sports UI
- High contrast, neon-inspired visual language
- Fast, readable, and mobile-friendly
- Respectful of drifting's culture

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
driv-frontend/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page components
│   ├── context/        # Global state management
│   ├── utils/          # Helper functions
│   └── App.jsx         # Main app component
```

## Contributing

This is a personal project currently in active development. Contribution guidelines will be established once the MVP is complete.

## License

_(To be determined)_

---

**Built with 🏎️💨 by the drifting community**
