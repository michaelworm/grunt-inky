# grunt-inky

[![npm](https://img.shields.io/npm/v/grunt-inky.svg?maxAge=86400)](https://www.npmjs.com/package/grunt-inky) [![npm](https://img.shields.io/npm/dt/grunt-inky.svg?maxAge=86400)](https://www.npmjs.com/package/grunt-inky)

> A grunt plugin for ZURB Inky. https://github.com/zurb/inky

```
                      ___
                   .-'   `'.
                  /         \
                  |         ;
                  |         |           ___.--,
         _.._     |0) ~ (0) |    _.---'`__.-( (_.
  __.--'`_.. '.__.\    '--. \_.-' ,.--'`     `""`
 ( ,.--'`   ',__ /./;   ;, '.__.'`    __
 _`) )  .---.__.' / |   |\   \__..--""  """--.,_
`---' .'.''-._.-'`_./  /\ '.  \ _.-~~~````~~~-._`-.__.'
      | |  .' _.-' |  |  \  \  '.               `~---`
       \ \/ .'     \  \   '. '-._)
        \/ /        \  \    `=.__`~-.
        / /\         `) )    / / `"".`\
  , _.-'.'\ \        / /    ( (     / /
   `--~`   ) )    .-'.'      '.'.  | (
          (/`    ( (`          ) )  '-;
           `      '-;         (-'
```

## Getting Started
If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-inky --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-inky');
```

## The "inky" task

### Overview
In your project's Gruntfile, add a section named `inky` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
    inky: {
        base: {
            options: {
                // your options for Inky
            },
            files: {
                'dest/index.html': ['src/index.html'],
            }
        }
    }
});
```

You can also use this syntax:

```js
grunt.initConfig({
    inky: {
        base: {
            options: {
                // your options for Inky
            },
            files: [
                {
                    cwd: 'src/',
                    src: 'index.html',
                    dest: 'dest/',
                    filter: 'isFile',
                    expand: true
                }
            ]
        }
    }
});
```

### Options

#### options.cheerio
Type: `Object`<br>
Default value: 
```js
{}
```

Pass options to cheerio. See [cheerio API](https://github.com/cheeriojs/cheerio#api)

#### options.columnCount
Type: `Number`<br>
Default value: `12`

Column count for the grid. Make sure your Foundation for Emails project has the same column count in the Sass as well.

#### options.components
Type: `Object`<br>
Default value: 
```js
{
    button: 'button',
    row: 'row',
    columns: 'columns',
    container: 'container',
    inky: 'inky',
    blockGrid: 'block-grid',
    menu: 'menu',
    menuItem: 'item'
}
```

Tag names for custom components. See [Inky Docs for custom elements](https://github.com/zurb/inky#custom-elements)

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Lint and test your code before submitting a pull request.

***

## Thanks

grunt-inky was created and is maintained by [Michael Worm](https://github.com/Miw0).
