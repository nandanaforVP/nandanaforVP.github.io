// Shows the About page's photo gallery on the home page (and its "My Journey" timeline, if a #my-journey slot exists).
// The content is read from /about/about.html, so edits there appear here too.
(function () {
    var journeySlot = document.getElementById('my-journey');
    var gallerySlot = document.getElementById('gallery');
    if (!gallerySlot || !window.fetch || !window.DOMParser) return;

    fetch('/about/about.html')
        .then(function (response) {
            if (!response.ok) throw new Error('About page not available');
            return response.text();
        })
        .then(function (html) {
            var doc = new DOMParser().parseFromString(html, 'text/html');
            var timeline = doc.querySelector('.flex-parent');
            var gallery = doc.getElementById('about-gallery');
            if (!gallery) return;

            if (journeySlot && timeline) {
                // Image paths in about.html are relative to /about/; make them absolute.
                timeline.querySelectorAll('img[src]').forEach(function (img) {
                    img.setAttribute('src', new URL(img.getAttribute('src'), location.origin + '/about/about.html').pathname);
                });
                journeySlot.querySelector('.home-about-body').replaceChildren(document.importNode(timeline, true));
            }
            gallerySlot.querySelector('.home-about-body').replaceChildren(document.importNode(gallery, true));

            // Reuse the About page's own script for the timeline controls and gallery images.
            var script = document.createElement('script');
            script.src = '/about/about.js';
            document.body.appendChild(script);
        })
        .catch(function () {
            // Leave the fallback links to the About page in place.
        });
})();
