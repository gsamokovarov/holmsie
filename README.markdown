'Sup, Holmsie?
==============

Holmsie is a simple HTML(5) problems detector for Mozilla Firefox. It uses 
the [holmes][hs] CSS diagnostic stylesheet to highlight potentially invalid,
inaccessible or erroneous HTML(5) markup.

Check out the [holmes][hs] website for further information.

Installation
------------

Holmsie can be installed from its [Mozilla add-on page][ad].

It can also be built from the source with the following commands:

    $ git clone --recursive https://github.com/gsamokovarov/holmsie.git
    $ cd holmsie && rake build

These require [Rake][rk] and [Python][py].

Usage
-----

To enable the holmsie inspector in the context of the current page, click the
`Enable Holmsie Inspector` item on the mouse right-click context menu. If you
do not have such item in there, make sure that the page is still not loading.
The item will be available only when the page is ready.

Thanks
------

Shout-out to Luke Williams and all of the [holmes][hs] contributors.

License
-------

* Holmsie is licensed under [MPL 2.0][mp].
* Holmes is licensed under [GPL][gp].
* jQuery is licensed under [MIT][mt].

[hs]: http://red-root.com/sandbox/holmes/
[ad]: https://addons.mozilla.org/addon/holmsie/
[rk]: http://rake.rubyforge.org/
[py]: http://www.python.org/
[mp]: http://www.mozilla.org/MPL/2.0/
[gp]: http://www.gnu.org/licenses/gpl.html
[mt]: http://opensource.org/licenses/mit-license.php