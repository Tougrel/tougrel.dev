# tougrel.dev

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## How to run locally

First you need to make sure you install the dependencies. I personally use pnpm for this, but you can use both npm and yarn if you want to!

```bash
pnpm install
```

Once everything is done installing, you can (if you want) make a `.env` file with the following stuff inside:

```dotenv
# You can skip this in case you want to!
NITRO_PRESET=""
```

Once you are done with the `.env` file you can go ahead and start the development server by running

```bash
pnpm run dev
```

To build and preview locally before pushing in production you can do it by using the below commands

```bash
# Build the project
pnpm run build

# Run the production build of the project
pnpm run preview
```

You can always check out the [nuxt deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information!
