
/* Timeline JS */

$(function () {
    var milestones = $('.milestone');
    var cards = $('.milestone-card-container').find('.milestone-card');
    milestones.click(function () {
        var t = $(this),
            ind = t.index(),
            matchedCard = cards.eq(ind);

        t.add(matchedCard).addClass('active');
        milestones.not(t).add(cards.not(matchedCard)).removeClass('active');
    });
});


/* Gallery Section JS */
const galleryImages = [
    'https://preview.ibb.co/i0PmHk/1.jpg',
    'https://preview.ibb.co/mWpE3Q/2.jpg',
    'https://preview.ibb.co/i0PmHk/1.jpg',
    'https://preview.ibb.co/mysOxk/3.jpg',
    'https://preview.ibb.co/i0PmHk/1.jpg',
    'https://preview.ibb.co/mWpE3Q/2.jpg',
    'https://preview.ibb.co/i0PmHk/1.jpg',
    'https://preview.ibb.co/mysOxk/3.jpg',
    'https://preview.ibb.co/i0PmHk/1.jpg',
    'https://preview.ibb.co/i0PmHk/1.jpg',
    'https://preview.ibb.co/i0PmHk/1.jpg',
    'https://preview.ibb.co/i0PmHk/1.jpg',
    'https://preview.ibb.co/i0PmHk/1.jpg',
    'https://preview.ibb.co/i0PmHk/1.jpg',
    'https://preview.ibb.co/mysOxk/3.jpg',
    'https://preview.ibb.co/mysOxk/3.jpg',
    'https://preview.ibb.co/i0PmHk/1.jpg',
    'https://preview.ibb.co/i0PmHk/1.jpg',
    'https://preview.ibb.co/i0PmHk/1.jpg',
    'https://preview.ibb.co/mWpE3Q/2.jpg',
];

const galleryLength = galleryImages.length;
const stepLength = 6;
let loadedLength = 0;
const gallery = document.getElementById('about-gallery');

function galleryLoadMore(event) {
    for(i = 0; i < stepLength; i++) {
        if(loadedLength < galleryLength) {
            const img = document.createElement('img');
            img.setAttribute('src', galleryImages[loadedLength]);
            gallery.appendChild(img);
            loadedLength++;
        } else {
            document.getElementById('load-more-btn').remove();
        }
    }
}

galleryLoadMore();

document.getElementById('load-more-btn').addEventListener('click', galleryLoadMore);
