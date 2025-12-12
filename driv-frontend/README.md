# Driv Drift App

A comprehensive drifting event management and fan engagement platform built with the MERN stack.

## Overview

Driv Drift is the first app tailored specifically to the drifting community, consolidating event data, driver portfolios, live brackets, media, and standings across multiple drift series into one unified platform.

## Vision

This app aims to replace fragmented tools ,scattered social media, separate streaming platforms with a single destination for fans, drivers, judges, and event organizers.

## Tech Stack

- **Frontend:** React + Vite
- **Backend:** Node.js + Express
- **Database:** MongoDB
- **Language:** JavaScript
- **Styling:** Neon-inspired theme

## Core Features (MVP - Priority 1)

- **Driver Profiles** — View driver stats, car specs, hometown, win/loss records
- **Live Brackets** — Custom bracket system supporting 8, 16, and 32-driver formats
- **Event Pages** — Event info with embedded livestreams (YouTube/Twitch)
- **Season Standings** — Real-time leaderboards across series
- **Media Gallery** — Photos and videos from recent events
- **Admin Dashboard** — CRUD management for drivers, events, brackets, and media
- **Authentication** — Role-based access (admin/public)

## Planned Features (Priority 2)

- **Spotlight Carousel** — Weekly highlights on homepage
- **Event Calendar** — Filterable calendar view of all upcoming events
- **Advanced Bracket Tools** — Seeding, byes, battle notes, export/import
- **Media Tagging** — Tag content by driver/event/year
- **Search** — Global search for drivers and events
- **Push Notifications** — Live alerts when events start or brackets update
- **Neon Theme System** — Full implementation of electric drift aesthetic

## Future Roadmap (Priority 3)

- **Driver Accounts** — Self-managed profiles with admin approval
- **Judge Tools** — Private scoring interface with auto-bracket updates
- **Stats Engine** — Head-to-head records, trends, performance graphs
- **Telemetry Integration** — Wally telemetry data overlays
- **Live Battle Center** — Real-time WebSocket updates
- **React Native App** — Native iOS application
- **Analytics Dashboard** — Usage tracking and engagement metrics

## Development Philosophy

This project follows a phased approach:

1. **MVP Tier 1** — Core functionality for fans and admins
2. **Feature Expansion** — Enhanced UX and tooling
3. **Advanced Features** — Driver/judge portals, telemetry, native mobile

Each feature is broken down into Jira-style user stories with clear acceptance criteria to ensure deliverables meet community needs.

## Target Users

- **Fans** — Follow favorite drivers, watch live events, view standings
- **Drivers** — Showcase portfolios, track performance
- **Admins/Organizers** — Manage events, brackets, and content
- **Judges** — Score runs and manage battle results

## Design Goals

- **Unified Experience** — One app for all drift series
- **Real-time Updates** — Live brackets and standings
- **Mobile-First** — Prepared for React Native migration
- **Community-Driven** — Built by drifters, for drifters

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
