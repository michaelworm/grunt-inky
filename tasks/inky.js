/*
 * grunt-inky
 * https://github.com/Miw0/grunt-inky
 *                         ___
 *                      .-'   `'.
 *                     /         \
 *                     |         ;
 *                     |         |           ___.--,
 *            _.._     |0) ~ (0) |    _.---'`__.-( (_.
 *     __.--'`_.. '.__.\    '--. \_.-' ,.--'`     `""`
 *    ( ,.--'`   ',__ /./;   ;, '.__.'`    __
 *    _`) )  .---.__.' / |   |\   \__..--""  """--.,_
 *   `---' .'.''-._.-'`_./  /\ '.  \ _.-~~~````~~~-._`-.__.'
 *         | |  .' _.-' |  |  \  \  '.               `~---`
 *          \ \/ .'     \  \   '. '-._)
 *           \/ /        \  \    `=.__`~-.
 *           / /\         `) )    / / `"".`\
 *     , _.-'.'\ \        / /    ( (     / /
 *      `--~`   ) )    .-'.'      '.'.  | (
 *             (/`    ( (`          ) )  '-;
 *              `      '-;         (-'
 *
 * Copyright (c) 2016 Michael 'Miw0' Worm
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

    grunt.registerMultiTask('inky', 'A grunt plugin for ZURB Inky. https://github.com/zurb/inky', function () {

        var done = this.async(),
            path = require('path'),
            fs = require('fs'),
            chalk = require('chalk'),
            max = this.filesSrc.length,
            index = 0,
            isFinished = function () {
                index++;

                if (index === max) {
                    done();
                }
            },
            unixifyPath = function (filepath) {
                if (process.platform === 'win32') {
                    return filepath.replace(/\\/g, '/');
                } else {
                    return filepath;
                }
            },
            detectDestType = function (dest) {
                if (grunt.util._.endsWith(dest, '/')) {
                    return 'directory';
                } else {
                    return 'file';
                }
            },
            options = this.options({
                columnCount: 12,
                components: {
                    button: 'button',
                    row: 'row',
                    columns: 'columns',
                    container: 'container',
                    inky: 'inky',
                    blockGrid: 'block-grid',
                    menu: 'menu',
                    menuItem: 'item'
                }
            });

        // Iterate over all specified file groups.
        this.files.forEach(function (filePair) {
            var isExpandedPair = filePair.orig.expand || false,
                destination = unixifyPath(filePair.dest),
                fullHtml = '';

            filePair.src.forEach(function (file) {
                file = unixifyPath(file);

                if (detectDestType(destination) === 'directory') {
                    destination = isExpandedPair ? destination : path.join(destination, file);
                }

                // Load plugins
                var Inky = require('inky').Inky,
                    cheerio = require('cheerio');

                // Actual Inky processing
                var i = new Inky(options),
                    input = grunt.file.read(file),
                    html = cheerio.load(input),
                    convertedHtml = i.releaseTheKraken(html);

                fullHtml += convertedHtml;

                grunt.log.writeln('File ' + chalk.cyan(file) + ' has been released by the ' + chalk.magenta('kraken') + ' ...');
            });

            // Create folder if not exists
            grunt.file.mkdir(path.dirname(destination));

            // Write the destination file.
            fs.writeFile(destination, fullHtml, function () {
                grunt.log.writeln('Successfully wrote ' + chalk.green(destination) + '.');
                isFinished();
            });
        });
    });

};
