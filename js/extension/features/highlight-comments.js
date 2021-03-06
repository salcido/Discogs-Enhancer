/**
 *
 * Discogs Enhancer
 *
 * @author: Matthew Salcido
 * @website: http://www.msalcido.com
 * @github: https://github.com/salcido
 *
 * This will wait until the dashboard has loaded, then iterate over the
 * friend's activity module and highlight any comments that have been
 * made.
 *
 * Currently, this has to be activated using the options modal
 * as it is an undocumented feature that seems only useful to myself.
 * If anyone else is reading this and is curious, look up
 * `dependencies/options/options.js` for more info :)
 */

rl.ready(() => {

  let highlightComments = rl.options.highlightComments();

  if ( highlightComments && rl.pageIs('dashboard') ) {
    let int = setInterval(() => {

      let friends = document.querySelectorAll('#dashboard_friendactivity tr').length;

      if (friends) {
        let icons = document.querySelectorAll('.broadcast_table .icon-comment');
        icons.forEach(i => i.closest('tr').classList.add('has-comments'));
        clearInterval(int);
      }
    }, 13);

    // Clear the interval regardless so the `setInterval` doesn't run forever
    // in case there's no friend module on the dashboard
    setTimeout(() => clearInterval(int), 10000);
  }
});
