# Where Is My Job

Where Is My Job is a front-end career platform for discovering jobs, companies, online courses, and career-building opportunities. The project is built with HTML, CSS, and vanilla JavaScript.

## Features

- Browse and filter available jobs.
- View company and job information.
- Explore courses by category, level, search term, and skill.
- Open a dedicated detail page for every course.
- Submit applications through the application form.
- Use the responsive navigation menu on smaller screens.
- Access contact, registration, and account-related pages.

## Project Structure

```text
Where-is-my-job/
├── index.html                 # Entry page           
├── pages/                     # Main application pages
│   ├── home.html
│   ├── jobs.html
│   ├── job-details.html
|   ├── companies.html 
│   ├── courses.html
│   ├── courses-detail.html
│   ├── applicationform.html
│   ├── contact.html
│   └── register.html
├── scripts/                   # Page behavior and interactions
├── styles/                    # Page-specific stylesheets
├── assests/                   # Images, logos, and illustrations
├── style.css                  # Styles for the entry page
└── README.md
```

## Course Details Flow

The course catalog links each `KNOW MORE` button to the shared detail page using a query parameter:

```text
pages/courses-detail.html?course=data-science
```

The file `scripts/courses-detail.js` reads the `course` value and fills the page with the matching title, category, image, level, duration, description, learning outcomes, project, and skills. This keeps one detail-page layout reusable for all courses.

## Running the Project

This is a static website and does not require a build step or package installation.

1. Open the project folder in VS Code.
2. Open `index.html` or `pages/home.html` in a browser.
3. For the best local experience, use the VS Code Live Server extension or another local static server.

When using a local server, start it from the project root so relative links to `pages/`, `scripts/`, `styles/`, and `assests/` work correctly.

## Demo Login

The following credentials are for the current front-end demo only:

```text
Email: user@gmail.com
Password: 123456
```

These credentials are not connected to a production authentication service and should not be reused for real accounts.

## Team Work

The project should be developed collaboratively with small, focused changes. Each team member should work on a separate branch and explain their changes in the pull request.

### Team Members

- [Diba-lol](https://github.com/Diba-lol)
- [n4zr-sketcher](https://github.com/n4zr-sketcher)
- [lakshanasree072-maker](https://github.com/lakshanasree072-maker)
- [amuthasri2006](https://github.com/amuthasri2006)
- [praveennn-1](https://github.com/praveennn-1)

### Suggested Responsibilities

- **UI and styling:** Maintain shared navigation, responsive layouts, page styles, and visual consistency.
- **Page functionality:** Maintain filters, forms, navigation interactions, login behavior, and course-detail rendering.
- **Content and assets:** Maintain course, job, company, and contact content along with image and logo references.
- **Testing and review:** Check links, forms, responsive behavior, console errors, and integration between pages.

### Team Workflow

1. Pull the latest changes from `main` before starting work.
2. Create a focused branch, for example `feature/course-details` or `fix/mobile-menu`.
3. Keep commits small and describe the purpose of each change.
4. Test affected pages in a browser before opening a pull request.
5. Review the pull request for broken relative paths, duplicated code, visual regressions, and JavaScript errors.
6. Merge only after another team member has reviewed and approved the change.
7. Pull the updated `main` branch before beginning the next task.

### Collaboration Guidelines

- Reuse existing styles, scripts, and page patterns before creating new ones.
- Do not remove working filters, navigation, or form behavior while adding a feature.
- Keep page-specific CSS and JavaScript in the matching `styles/` and `scripts/` files.
- Use descriptive names for course keys, classes, functions, and branches.
- Check all relative links after moving or adding a page.
- Avoid committing passwords, API keys, or private user data.

## Browser Test Checklist

- Navigation works on desktop and mobile widths.
- Course filters update visible cards correctly.
- Every course `KNOW MORE` button opens the correct detail content.
- The back-to-courses link returns to the catalog.
- Forms accept valid input and show their expected behavior.
- Images, logos, stylesheets, and scripts load without console errors.
