# beet-bot

> Packages for the discord bot and running beet builds.

## Contributing

This is a monorepo managed with [`pnpm`](https://pnpm.io/). If you don't have it installed already check out the [standalone script](https://pnpm.io/installation) for your platform or get it via [Corepack](https://github.com/nodejs/corepack) using `corepack enable`.

```bash
$ pnpm install
```

Set up packages for local development by running `pnpm stub`, and then launch the bot with the required credentials.

```bash
$ pnpm dev --clientId=... --token=...
```

You can also create a `.env` file in the `./packages/cli` folder.

```env
BEET_BOT_CLIENT_ID=...
BEET_BOT_TOKEN=...
```

To build for production use the `pnpm build` command. Note that this overwrites package stubs so you will need to run `pnpm stub` again if you want to resume developing locally.

---

License - [MIT](https://github.com/mcbeet/beet-bot/blob/main/LICENSE)
