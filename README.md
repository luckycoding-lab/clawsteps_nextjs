## Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Framework** | **Next.js** (App Router, Server Actions) | Full-stack hybrid framework handling SSR, SSG, and secure server-side logic |
| **Frontend Library** | **React.js** | Interactive component-driven UI architecture |
| **Runtime Environment** | **Node.js** | Server-side execution engine powering Next.js server actions and API routes |
| **Backend & Database** | **Appwrite Cloud** | Document database, secure API endpoints, and cloud storage for blog posts |
| **Authentication** | **OAuth 2.0** / **NextAuth.js** (Google Provider) | Secure role-based identity authentication and admin authorization flows |
| **Styling** | **Tailwind CSS** | Responsive utility-first dark theme design system |
| **Language** | **TypeScript** | End-to-end type safety across UI components, actions, and API boundaries |
| **Icons & Assets** | **Lucide React** | Lightweight, accessible vector iconography |
| **Alerts & Messaging** | **Telegram Bot API** | Real-time push alerts for inquiries and new article publications |
| **Hosting & Deployment** | **Vercel** | Edge Network hosting, automated CI/CD deployments, and SSL management |
| **Domain & DNS** | **GoDaddy** | Apex `@` and `www` DNS management and routing |


## ClawSteps - Premier Dog Walking & Pet Care Platform

> A modern, high-performance web platform built for **ClawSteps**, Delhi NCR's premier dog walking and pet care service. The application features a dynamic blog engine, Google OAuth admin portal, automated Telegram event notifications, SEO optimization, and structured service showcases.

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Key Features](#key-features)
- [Project Architecture](#project-architecture)
- [.env.sample](#envsample)
- [Getting Started](#getting-started)
- [Authentication & Admin Flow](#authentication--admin-flow)
- [Blog Publishing Pipeline](#blog-publishing-pipeline)
- [Telegram Bot Integration](#telegram-bot-integration)
- [SEO & Metadata](#seo--metadata)
- [Deployment & Custom Domain](#deployment--custom-domain)
- [License](#license)

---

## Overview

ClawSteps delivers professional dog walking, brain stimulation routines, and comprehensive pet care across Delhi NCR. This Next.js application serves as both the consumer-facing portal and a full publishing platform for pet health and behavior guides.

- **Production URL:** [https://clawsteps.com](https://clawsteps.com)
- **Primary Service Area:** Delhi NCR, India

---

## Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Framework** | Next.js (App Router, Server Actions) | Full-stack React framework, SSR/SSG & backend actions |
| **Language** | TypeScript | Type-safe development across UI & API boundaries |
| **Styling** | Tailwind CSS | Utility-first responsive dark theme design system |
| **Icons** | Lucide React | Clean, accessible vector UI icons |
| **Database / Backend** | Appwrite Cloud | Document database for blog storage and assets |
| **Authentication** | NextAuth.js (Google OAuth 2.0) | Secure admin identity and role-based sessions |
| **Notifications** | Telegram Bot API | Instant alerts for new lead submissions and post publications |
| **Hosting & SSL** | Vercel Edge Network | Global CDN delivery, auto-deployments, and SSL certs |
| **DNS Provider** | GoDaddy | Root A and CNAME record management |

---

## Key Features

- **Dynamic Blog Engine:** Fast article delivery powered by Appwrite with dynamic reading time calculation and URL slugification.
- **Google OAuth Admin Flow:** Restricted publishing dashboard (`/admin/new-post`) accessible exclusively by authorized admin accounts.
- **Telegram Notification Bot:** Automated real-time alerts dispatched to admin chat groups whenever leads interact with contact forms or when new articles publish.
- **Incremental Static Regeneration (ISR):** Blog feeds update smoothly (`revalidate = 60`) without requiring complete project rebuilds.
- **SEO & Search Indexing:** Pre-configured `sitemap.ts` and `robots.ts` ensuring clean Googlebot crawls across all active routes.
- **Responsive Dark Theme UI:** Designed for zero-lag responsiveness across mobile, tablet, and widescreen desktop displays.
- **Direct WhatsApp Chat Integration:** One-click WhatsApp action links for direct bookings and customer inquiries.

---

## Project Architecture

```text
clawsteps/
├── app/
│   ├── aboutus/                  # About page (Company mission & handlers)
│   ├── actions/                  # Server actions (Appwrite DB CRUD & Telegram alerts)
│   ├── admin/
│   │   └── new-post/
│   │       └── page.tsx          # Protected admin blog creation form
│   ├── api/
│   │   └── auth/
│   │       └── [...nextauth]/
│   │           └── route.ts      # NextAuth Google provider & session handler
│   ├── blog/
│   │   ├── [slug]/
│   │   │   └── page.tsx          # Dynamic blog reader page
│   │   └── page.tsx              # Main blog feed & index
│   ├── comingsoon/               # Holding page for unreleased features
│   ├── privacypolicy/            # Privacy Policy documentation
│   ├── services/                 # Walking routines & brain games breakdown
│   ├── term-and-condition/       # Terms & Conditions documentation
│   ├── globals.css               # Global stylesheet & design tokens
│   ├── layout.tsx                # Root layout (Navbar, Providers, Footer)
│   ├── not-found.tsx             # Custom 404 page
│   ├── page.tsx                  # Landing / Home page
│   ├── robots.ts                 # Dynamic robots.txt generator
│   └── sitemap.ts                # Dynamic XML sitemap generator
├── components/                   # Modular UI components (Navbar, Footer, Forms)
├── lib/                          # Utility modules, Appwrite client, blog helpers
├── public/                       # Static brand assets, logos, and icons
├── .env.sample                   # Environment variable template
└── package.json                  # Dependencies and build scripts