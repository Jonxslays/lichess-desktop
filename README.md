# lichess-desktop

A desktop wrapper for [lichess.org](https://lichess.org).

## Getting started

Make sure you have both NodeJS and Yarn installed.

- Clone this repo, and cd into the `lichess-desktop` dir.

```bash
$ git clone https://github.com/Jonxslays/lichess-desktop.git
$ cd lichess-desktop
```

- Install dev dependencies

```bash
$ yarn
```

## Running in development

```bash
$ yarn start
```

The application will start up and display [Lichess](https://lichess.org).

## Building an executable for your system

```bash
$ yarn build
```

The executable will be stored in the `./build` directory.

- `.AppImage` for Linux
- `.dmg` installer for Mac
- `.nsis` installer for Windows

Copy the file wherever you'd like:

- Somewhere on PATH for Linux
- Applications directory for Mac
- Desktop directory for Windows

## Prebuilds

Coming soon...

## License

lichess-desktop is licensed under the
[MIT License](https://github.com/Jonxslays/lichess-desktop/blob/master/LICENSE).
