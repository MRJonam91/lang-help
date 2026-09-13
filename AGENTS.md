# LANG project map

- Stack/build: static HTML, CSS and vanilla JavaScript; no build step or dependencies.
- Entrypoint: `index.html`.
- Content and interactions: `app.js`; English and immersion copy: `course-i18n.js`.
- Styling: `styles.css`.
- Tests: open `index.html` or serve the folder and run the browser smoke checks in `README.md`.
- Config/CI: none.
- Commands: `py -m http.server 8080` for local preview.
- Conventions: course explanations support Italian, English, and target-language immersion; core language content lives in `languages`, localized course copy in `course-i18n.js`; preserve keyboard access, reduced-motion support, and dependency-free hosting.
