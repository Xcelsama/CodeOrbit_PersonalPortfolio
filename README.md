# CodeOrbit_PersonalPortfolio

My personal portfolio website. I'm Excel Amadi, a graphic designer and self-taught full-stack developer from Port Harcourt, Nigeria. The site shows what I do, the projects I have built, my creative work and how to contact me.

**Live site:** https://xcelsama.is-a.dev/

This is Task 1 of my CodeOrbit Tech Full Stack Development Internship.

## What it includes

- A home page with a short intro, my three crafts (design, code and creative work), an about section, skills, selected projects and a contact section
- A projects page with my main projects and smaller experiments, each with GitHub and live links
- A creative page with posters, photo edits and video work, and a details page for each selected piece
- A contact page with my email, CV and social links
- A CV that can be viewed or downloaded
- An animated loading screen that plays once per visit
- A responsive layout that works from phones to wide desktop screens
- Accessibility basics: a skip link, visible keyboard focus, labelled links and reduced-motion support

## Built with

- HTML5
- CSS3 (custom properties, grid and flexbox, media queries)
- JavaScript (only for the loading screen)
- Google Fonts: Space Grotesk, Inter and JetBrains Mono

There is no framework, no build step and nothing to install.

## Pages

| Page | File |
| --- | --- |
| Home | `index.html` |
| Projects | `projects.html` |
| Creative | `creative.html` |
| Contact | `contact.html` |
| Piece details | `work/*.html` |

## Project structure

```
CodeOrbit_PersonalPortfolio/
├── index.html
├── projects.html
├── creative.html
├── contact.html
├── css/
│   └── styles.css
├── js/
│   └── loader.js
├── images/
│   ├── favicon.svg
│   ├── og.jpg
│   ├── asson-poster.jpg
│   └── shots/
│       └── nexora.jpg
├── files/
│   └── Excel-Amadi-CV.pdf
├── work/
│   ├── asson-poster.html
│   ├── haze-cleared.html
│   ├── landscape-edit.html
│   └── teal-and-orange.html
└── README.md
```

## How to run it

1. Download or clone the project:

   ```
   git clone https://github.com/Xcelsama/me.git
   ```

2. Open the folder and double-click `index.html`, or open the folder in VS Code and run it with the Live Server extension.

An internet connection is needed for the fonts and for the gallery images that load from my gallery site.

## How the loading screen works

`js/loader.js` shows the animated X when the first page of a visit opens. It stays on screen for at least two seconds so the animation can finish, and it never stays longer than six seconds. The page remembers that it has been shown with `sessionStorage`, so the other pages open straight away during the same visit.

## Deployment

The site is static, so it can be hosted on Vercel, Netlify or GitHub Pages. `index.html` is in the root folder, so no extra setup is needed. It is currently live at https://xcelsama.is-a.dev/.

## Customising

- Colours and fonts are the variables at the top of `css/styles.css`.
- To add a project, copy an existing project card in `projects.html`.
- To change the stats or the craft tiles, edit the hero section in `index.html`.

## Links

- GitHub: [Xcelsama](https://github.com/Xcelsama)
- LinkedIn: [Excel Hephzibah Amadi](https://www.linkedin.com/in/excel-hephzibah-amadi-5733b4298)
- TikTok: [@xcel_sama](https://www.tiktok.com/@xcel_sama)
- Email: ms.excel.amadi@gmail.com

## Licence

The code is free to read and learn from. Please don't copy the design, text, posters or photos without asking.
