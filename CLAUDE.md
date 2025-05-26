# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Nx monorepo for "Everything Zen" boat charter booking system with two Next.js applications:

- **public-ui** (default): Customer-facing platform for viewing charters, making reservations, catering info, FAQ
- **admin-ui**: Administrative interface for managing charters, availability, and reservations

## Architecture

**Tech Stack:**
- Next.js 12 with React 18
- TypeScript
- Styled Components for styling
- Prisma ORM with MySQL database
- Auth0 for authentication
- Stripe for payments
- Contentful for CMS content
- SWR for data fetching
- Nx for monorepo management

**Shared Libraries:**
- `libs/data-access`: Prisma schema, database utilities, and type definitions
- `libs/ui-components`: Reusable React components (Calendar, Gallery, Layout, Reservations, etc.)

**Database Schema:**
- `Availability`: Time slots available for booking
- `Event`: Booked charters with guest details and party information
- `EventType`: Charter types with pricing and duration
- `Guest`: Individual party member information
- `PartyType`: Enum for occasion types (COUPLE, FRIENDS, BACHELORETTE, BIRTHDAY, OTHER)

## Development Commands

```bash
# Development servers
npm run start              # Start public-ui (default app)
npm run start:admin        # Start admin-ui
npm run start:all          # Start all applications

# Building
npm run build             # Build public-ui (default)
npm run build:admin       # Build admin-ui
nx build <app-name>       # Build specific app

# Testing and quality
npm test                  # Run all tests
nx test <project>         # Test specific project
nx e2e <app>-e2e         # Run E2E tests
npm run format           # Format code with Prettier
nx lint <project>        # Lint specific project

# Utilities
nx graph                 # View project dependency graph
nx serve <app> --port=<port>  # Serve app on specific port
```

## Key Patterns

- **Component Architecture**: Shared UI components in `libs/ui-components` imported as `@everything-zen/ui-components`
- **API Routes**: Next.js API routes handle backend logic (auth, reservations, payments)
- **Styled Components**: CSS-in-JS with theme-based styling
- **Type Safety**: Prisma generates TypeScript types for database operations
- **Data Fetching**: SWR for client-side data fetching with caching
- **Form Handling**: Multi-step forms for reservation process with calendar, info, and payment formlets

## Database Operations

Use Prisma client from `@everything-zen/data-access` for all database operations. The client is configured for MySQL with referential integrity handled by Prisma.

Common import pattern:
```typescript
import { prisma } from '@everything-zen/data-access';
```