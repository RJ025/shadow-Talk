# ShadowTalk

ShadowTalk is an anonymous feedback platform designed to help users provide and receive feedback without revealing their identity. The platform focuses on simplicity, privacy, and ease of use, enabling individuals to communicate transparently while maintaining their anonymity.

## Features

- **Anonymous Feedback**: Users can submit feedback anonymously without needing to create an account.
- **Secure and Private**: The platform ensures privacy through secure handling of user data.
- **Real-time Feedback Display**: Submitted feedback is instantly visible.
- **Clean and Modern UI**: A responsive and user-friendly interface, built with Tailwind CSS and Shadcn UI components, ensures a smooth user experience.

## Tech Stack

This project leverages the following technologies:

- **[Next.js](https://nextjs.org/)**: A React framework for server-rendered and statically-generated web applications.
- **[Zod](https://zod.dev/)**: A TypeScript-first schema declaration and validation library for validating user inputs.
- **[NextAuth.js](https://next-auth.js.org/)**: Authentication for Next.js, supporting various sign-in methods.
- **[Resend](https://resend.com/)**: A platform for sending emails programmatically, used for notification and verification emails.
- **[React Email](https://react.email/)**: A React framework for designing and sending transactional emails.
- **[Shadcn](https://shadcn.dev/)**: A collection of accessible and themeable components built with Tailwind CSS, providing reusable UI components for the project.
- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for creating responsive and custom-designed UI components.
- **[MongoDB](https://www.mongodb.com/)**: A NoSQL database used for storing feedback and user data.

## Installation and Setup

To get the project running locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/shadowtalk.git
    cd shadowtalk
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env.local` file and add the necessary environment variables for MongoDB, NextAuth, Resend, and any other services.

4. Run the development server:
    ```bash
    npm run dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Project Structure

```bash
.
├── .next                 # Auto-generated build files (Next.js)
├── app                   # Application routes and components
├── emails                # Email templates using React Email
├── helpers               # Utility functions and helpers
├── lib                   # Shared libraries and services
├── model                 # Data models for interacting with MongoDB
├── schemas               # Zod validation schemas
├── types                 # TypeScript type definitions
