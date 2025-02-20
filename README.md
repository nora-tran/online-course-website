# online-course-website

Exploring Astro by building a website for an online school. This project serves as a practice ground for
learning Astro and structuring a modern web application.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## How to run generate a course data folder
| Command                                  | Action                                           |
|:-----------------------------------------| :----------------------------------------------- |
| `npm run create-course <couse_name> ...` | Auto generate a course folder with metadata      |

Locate to folder `scr/data/<course_name>` to update file metadata manually.

### Course data folder structure

```text
├── src/
│   ├── data/
│   │   ├── image.jpg
│   │   └── metadata.json
│   └── ...
```

## Preview

![Preview](img.png)
