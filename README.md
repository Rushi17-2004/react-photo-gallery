# Dynamic Photo Gallery Deck with Live API Pagination

A sleek, responsive stock photography dashboard built with **React**, **Vite**, and **Tailwind CSS**. This application communicates asynchronously with the Unsplash-style Picsum JSON API to fetch, organize, and paginate through high-resolution image assets dynamically.

## 🚀 Features
* **Automated Lifecycle Mounting:** Utilizes React's `useEffect` hook to handle side-effect API transactions on component mounting.
* **State-Driven Dynamic Pagination:** Features an internal numerical tracker (`Page`) that injects dynamic page coordinates into the URL string on click events.
* **Memory Safety Guardrails:** Implements functional conditional checks inside event handlers to safely freeze pagination bounds, completely preventing invalid negative integer requests (`Page < 1`).
* **Context-Aware UI Components:** The `Prev` button dynamically checks state flags to toggle disabled opacities and block pointer events when sitting on the initial data page.
* **Responsive Viewport Bounds:** Built with a fluid, mobile-friendly width layout that automatically scales beautifully on phone screens while maintaining fixed bounds on desktop.
