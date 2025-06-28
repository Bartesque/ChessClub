# Chess Club Website - Tech Stack Specification

This document outlines the technology stack and architectural choices for the local chess club website project.

## Frontend

*   **Framework:** **Next.js (App Router)**
    *   **Reasoning:** Provides a robust, full-stack React framework with features like server-side rendering, static site generation, and a file-based router that simplifies development. We will use the App Router for its modern React capabilities.
*   **Language:** **TypeScript**
    *   **Reasoning:** For type safety, improved developer experience, and code maintainability.
*   **UI Library:** **React**
    *   **Reasoning:** The core of our Next.js application, used for building a component-based user interface.

## Styling & UI Components

*   **CSS Framework:** **Tailwind CSS**
    *   **Reasoning:** A utility-first CSS framework that allows for rapid development and consistent styling directly within the markup. It's a direct dependency for `shadcn/ui`.
*   **Component Library:** **shadcn/ui**
    *   **Reasoning:** Provides a collection of beautifully designed, accessible, and unstyled components that we copy directly into our project. This gives us full control over their code and style, avoiding dependency bloat and promoting ownership.

## Backend & Data

*   **API Layer:** **Next.js Route Handlers**
    *   **Reasoning:** The standard way to build API endpoints within a Next.js App Router project. They are serverless functions, making them scalable and easy to deploy.
*   **Data Storage:** **Flat File (`emails.txt`)**
    *   **Reasoning:** For the initial version, storing emails in a simple text file is sufficient for the project's small scale. This minimizes complexity and avoids the need for a database setup. This can be upgraded later if required.
