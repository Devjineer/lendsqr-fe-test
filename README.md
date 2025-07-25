# Lendsqr Dashboard Clone

## What I Built

This is a Lendsqr dashboard clone built with React and TypeScript. It features authentication (login), a sidebar for navigation, user management pages, and a dashboard overview. The app includes paginated user tables, status indicators, and mock API integration.

## Technologies Used and Why

- **React**: For building reusable UI components and managing state.
- **TypeScript**: For type safety and better developer experience.
- **SCSS**: For modular and maintainable styling.
- **Vite**: For fast development and build tooling.
- **MockAPI**: Used for simulating backend data during development.
- **LocalStorage**: Chosen for simple client-side persistence (e.g., user details).

## Decisions That Impacted My Work

- **Component Structure**: Separated layout, common UI elements, and page-specific components for maintainability.
- **LocalStorage vs IndexedDB**: Used LocalStorage for simplicity, as the data needs were minimal and didn’t require complex querying.
- **Mock API Source**: Used [MockAPI](https://mockapi.io/) for quick, realistic user data.
- **Font Integration**: Added custom fonts only to login, Users, and dashboard pages so far; user details page is pending.
- **Pagination**: Implemented client-side pagination for user lists.

## Comparison to Provided Design / Actual Lendsqr Dashboard

- **Design Fidelity**: The layout and navigation closely follow the provided design. Some minor deviations exist due to limited access to exact assets or fonts.
- **Functionality**: All major dashboard features are present, but some advanced interactions (e.g., real API calls, notifications) are mocked or simplified.
- **Styling**: Used SCSS for modular styles, but some responsive details may differ from the original.
- **Fonts**: Custom fonts are partially integrated; full coverage is pending.

## Paths

- **✅ Deployed App**: [Your Vercel/Netlify Link Here]
- **✅ GitHub Repo**: [Your GitHub Repo Link Here]
- **✅ Loom Video Review**: [Your Loom Video Link Here]

---

🔗 **Example Google Doc Template:**  
https://docs.google.com/document/d/1xSAMPLELINK
