# REMWaste-Challenge

## Overview

This project is part of a React coding challenge where the goal was to make improvements to an existing skip hire selection UI.

## Approach

I began by analyzing the original UI’s usability and structure. My main objectives were to:

- **Improve UX**: Simplify layout with accordions, enhance visibility with repositioned stepper, and clarify CTAs.
- **Create scalable components**: By isolating logic and design, I ensured that the UI is easier to maintain and expand.
- **Apply a clear visual identity**: Using an earthy color palette and soft layout to align with a service-oriented experience.

All components are built with **modularity and reusability** in mind.

## Changes Made

### Layout & Structure
- **Replaced static skip cards with MUI Accordions** for better organization and a cleaner display of multiple skip options.
- **Moved the sidebar stepper to the left** side of the page to match standard UX patterns and improve hierarchy.
- **Replaced the bottom popup summary** with a **sticky sidebar summary card** that stays visible as users scroll.
- Designed the layout to be **responsive** for both desktop and mobile breakpoints.

### Component Architecture

- Developed **reusable components** such as:
  - `GlobalAccordion`: Displays each skip’s data in a collapsible format.
  - `GlobalStepper`: Handles navigation across steps with icons and active logic.
  - `PrimaryButton`: A consistent button component with styling and interaction props.
- Ensured a **modular design**, separating layout, logic, and styling into dedicated files.
- Utilized **CSS variables** and scoped styles to maintain theming consistency and reusability.

### Styling & Theme
- Introduced a new **earthy warm color palette** that matches the color scheme of the skips in the photos:
  - Primary: `#ef4444`
  - Secondary: `#fdba74`
  - Background: `#fff7ed`
  - Text: `#1c1917`
- Applied color adjustments for various UI states:
  - Hover effects
  - Inactive icons
  - Accordion expansion
  - Button states
- Defined consistent **border radius and spacing** across components for a clean, rounded look.

### Typography

- Switched from **Inter** to **Poppins** font for a friendlier, more contemporary look.
- Applied font weights and sizing for consistent hierarchy across headings, body text, and labels


## 🚀 How to Run

```bash
git clone https://github.com/JawharZinelabidine/REMWaste-Challenge.git
cd REMWaste-challenge
npm install
npm run dev