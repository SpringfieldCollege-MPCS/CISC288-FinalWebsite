+++
title = "Art"
date = 2022-11-15
template = "art.html"
+++

## Simple Grid Gallery

Here is an example gallery using a tailwind grid. Each image is resized by Zola. If you click the image it will open up a separate tab of the high resolution image.

{{ gallery() }}

## Fancy Gallery

Here is the same gallery but with advanced capabilities using [spotlight](https://nextapps-de.github.io/spotlight/). Click the image to open up a lightbox gallery.

{{ fancygallery() }}


## Custom Gallery

Here is the same spotlight gallery but with custom templates. Click the image to open up a spotlight gallery.

{{ customgallery() }}


