# Project Description
**Hackathon Winner for Best Overall Solution** - https://devpost.com/software/calmvr

Inspired to make this VR app after seeing that there were very few apps in VR which were focused on immersion and calmness. Thus, we wanted to create something which would bring the incredible immersive power of VR in the domain of mental health and wellness.

Provides a 360° view of calm nature locations around the world with a full immersive visual and auditory experience.

Used the Unity Engine to design the backgrounds and other immersive elements like falling leaves and fireflies. In this we used C# to design the interfaces as well as the transitions and virtual buttons. Along with the SteamVR Library to design other minor elements. We also created a website using React showcasing our app as well the different backgrounds used.

# Reason for development
During the hackathon, the computer used to create the VR app had crashed and we lost our progress near the last 10 minutes of submission. As a result, I built this frontend application to showcase our idea and a video demonstration.


# Mantine Vite template

## Features

This template comes with the following features:

- [PostCSS](https://postcss.org/) with [mantine-postcss-preset](https://mantine.dev/styles/postcss-preset)
- [TypeScript](https://www.typescriptlang.org/)
- [Storybook](https://storybook.js.org/)
- [Vitest](https://vitest.dev/) setup with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- ESLint setup with [eslint-config-mantine](https://github.com/mantinedev/eslint-config-mantine)

## npm scripts

## nvm usage
Run the following command to run the required nodejs version
`nvm use 22.12.0`

Then verify the correct nodejs version is used running,
`node -v`

## Build and dev scripts

- `dev` – start development server
- `build` – build production version of the app
- `preview` – locally preview production build

### Testing scripts

- `typecheck` – checks TypeScript types
- `lint` – runs ESLint
- `prettier:check` – checks files with Prettier
- `vitest` – runs vitest tests
- `vitest:watch` – starts vitest watch
- `test` – runs `vitest`, `prettier:check`, `lint` and `typecheck` scripts

### Other scripts

- `storybook` – starts storybook dev server
- `storybook:build` – build production storybook bundle to `storybook-static`
- `prettier:write` – formats all files with Prettier
