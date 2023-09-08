# EventPlanner Pro Website

## Overview
_EventPlanner Pro's website_, built with Next.js and TailwindCSS, is tailored for event organizers, focusing on tools like online registration, ticketing, and post-event analysis. Our vision: "Create Unforgettable Events".

## Requirements Compliance

### 1. **HTML, CSS, and JavaScript**
- **Single-page layout**: Highlights product features using Next.js.
- **Design**: TailwindCSS ensures a responsive and elegant look.
- **JavaScript functions**: Slideshow and toggle features for product images and information.

### 2. **SEO Optimization**
- **Meta and Schema**: Relevant tags and schema implemented.
- **Sitemap**: `sitemap.xml` included.

### 3. **Web Design**
- **Responsive**: Designed for desktop and mobile.

## Accordion Component

The `Accordion` component is a reusable UI element designed to display collapsible content panels. 

### Props:

- **title (string)**: The header or title of the accordion which the users see before expanding.
  
- **content (string)**: The main content that is displayed once the accordion is expanded.

### Usage:

```jsx
<Accordion
  title="Your Title Here"
  content="Your content here..."
/>
```

## TextImageBlock Component

The `TextImageBlock` component is a versatile UI element designed to display a combination of text and image side by side, making it perfect for sections that combine visual content with descriptive text.

### Props:

- **title (string)**: The main header or title for this block.
  
- **paragraph (string)**: A longer description or set of details that accompanies the title.

- **image (object)**: The image asset you want to display. Ensure it's properly imported or sourced.

- **text (string)**: Additional text that can be displayed, possibly as a caption or supplementary information.

### Usage:

```jsx
import yourImageAsset from './path-to-your-image.jpg';

<TextImageBlock
  title="Your Title Here"
  paragraph="Your descriptive paragraph here..."
  image={yourImageAsset}
  text="Any additional text here"
/>
```

## SliderItem Component

The `SliderItem` component acts as an individual slide for the parent `Carousel` component. It efficiently displays an image along with associated title and message, making it optimal for slideshows or feature showcases.

### Props:

- **image (object)**: The primary image for this slide. Ensure it's properly imported or sourced.

- **title (string)**: A headline or title for the slide.

- **message (string)**: A longer description or message that provides additional details about the slide.

### Usage:

First, ensure you have the `Carousel` component properly set up.

Then, for each `SliderItem`:

```jsx
import yourSlideImage from './path-to-your-slide-image.jpg';

<SliderItem
  image={yourSlideImage}
  title="Slide Title Here"
  message="Your detailed message or description for this slide here..."
/>
```

### 4. **Scripting**
- **Automation script**: Handles tasks like image compression and file minification.

### 5. **Version Control**
- **Git Repository**: Organized commits and branching using [GitHub](https://github.com/jcvb/event-planner-pro).

### 6. **Deployment**
- **Platform**: Deployed on [Vercel](https://event-planner-pro.vercel.app/).
- **Optimized assets**: All assets load correctly. [Performance evidence](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExODFjd2ZnZzc5cnRqMHpraTI3b25jcndxbDZyYnIybmN0YnpiMTZyOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tYFWZxZ3To6YJpsP2n/giphy.gif).

![Lighthouse Performance](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExODFjd2ZnZzc5cnRqMHpraTI3b25jcndxbDZyYnIybmN0YnpiMTZyOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tYFWZxZ3To6YJpsP2n/giphy.gif)



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
