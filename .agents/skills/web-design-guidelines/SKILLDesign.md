# Ask Silver Product Design Specification

## 1. Overview
This document outlines the design specifications for the Ask Silver landing page, a free scam checker. The page aims to inform users about the service, demonstrate its functionality, and build trust through testimonials and statistics.

## 2. Experience Goals
- **Inform:** Clearly explain what Ask Silver does and how it works.
- **Build Trust:** Showcase user testimonials and highlight scam detection statistics.
- **Guide to Action:** Encourage users to use the scam checker.

## 3. Information Architecture
- **Header:** Global navigation (Blog, Contact us, Careers, Check a scam, For banks).
- **Hero:** Primary value proposition and call to action.
- **How It Works:** Step-by-step explanation of the service.
- **Testimonials:** User feedback and social proof.
- **Scam Detection Details:** In-depth look at the technology.
- **Why Ask Silver:** Statistics on scam prevalence.
- **Our Story:** Brand narrative.
- **Footer:** Site map, legal links, and company information.

## 4. Layout System
- **Grid-based:** Utilizes CSS Grid for main section layouts.
- **Flexbox:** Employed for component-level alignment and distribution.
- **Max-width containers:** Content is constrained within max-width containers for readability.

## 5. Section-by-Section Design Spec
- **Hero Section:**
    - H1: "Not Sure if it's Safe? Ask Silver"
    - Subtitle: "Free, straightforward scam checking in seconds."
    - Imagery: Illustration of a person overwhelmed by notifications.
- **How It Works Section:**
    - H2: "How It Works"
    - Sub-sections with H3 titles (e.g., "Spotted something that feels off?", "Send it to Ask Silver").
    - Each sub-section includes descriptive text and a relevant illustration.
    - Call to action: "Use Ask Silver online".
- **Testimonials Section:**
    - H2: "Over 40,000 scams detected"
    - Carousel of user testimonials with associated imagery.
    - Navigation buttons: "Previous", "Next".

## 6. Component Inventory
- **Navigation Bar:** Logo, navigation links, and potentially a "Check a scam" button.
- **Buttons:** Primary and secondary styles for calls to action.
- **Cards:** Used for testimonials, featuring text and user images.
- **Image Carousel:** For displaying multiple testimonials.

## 7. Visual Design Specification

### 7.1. Design System Tokens
- **Primary Brand Color:** `--color-primary: #ff8264;`
- **Secondary Accent Color:** `--color-secondary: #fed18d;`
- **Text Colors:**
    - `--text-dark: #000;`
    - `--text-medium: #4c4c4c;`
    - `--text-light: #fff;`
    - `--text-link: rgb(0, 153, 255);`
- **Background Colors:**
    - `--bg-light: #fff;`
    - `--bg-off-white-1: #fff7f8;`
    - `--bg-off-white-2: #fef4e3;`
    - `--bg-grey: #f5f5f5;`
    - `--bg-light-grey: #ececec;`
    - `--bg-soft-orange: #fff9f0;`
- **Border Colors:** `--border-color-default: #ddd;`
- **Shadows:** `--shadow-default: 0px 4px 4px -1px rgba(12, 12, 13, 0.1);`
- **Border Radius:** `--radius-small: 6px; --radius-medium: 12px; --radius-large: 20px; --radius-pill: 100px;`

### 7.2. Typography
- **Headings:** Mulish, Newsreader, Inter (confirm specific weights and sizes).
- **Body Text:** Mulish, Inter (confirm specific weights and sizes).
- **Fallback:** sans-serif.
- **Link Text Decoration:** Underline.

### 7.3. Color and Surfaces
- **Primary UI elements:** Use `--color-primary` and `--color-secondary`.
- **Text:** Predominantly `--text-dark` on light backgrounds, `--text-light` on darker backgrounds.
- **Surfaces:** Utilize `--bg-light`, `--bg-off-white-1`, `--bg-off-white-2`, `--bg-grey` for distinct sections.

### 7.4. Spacing and Rhythm
- **Consistent Gaps:** `--gap-small: 10px; --gap-medium: 16px; --gap-large: 24px; --gap-xl: 40px; --gap-xxl: 48px;`
- **Padding:** `padding: 0px`, `padding: 10px`, `padding: 0px 2px 10px 2px`.
- **Margins:** `margin: 0`.

### 7.5. Component Styling
- **Buttons:** Inherit border-radius, no box-shadow by default, text-transform as variable.
- **Cards:** No