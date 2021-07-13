
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
    '../assets/images/gallery/Football.jpg',
    '../assets/images/gallery/Nandana-Cup.jpg',
    '../assets/images/gallery/Secy.jpg',
    '../assets/images/gallery/Illu.jpg',
    '../assets/images/gallery/group1.jpeg',
    '../assets/images/gallery/group2.jpeg',
    '../assets/images/gallery/classroom.jpg',
    '../assets/images/gallery/mess1.jpg',
    '../assets/images/gallery/mess2.jpg',
    '../assets/images/gallery/babu.jpg',
    '../assets/images/gallery/acting.jpg',
    '../assets/images/gallery/communique.jpg',
    '../assets/images/gallery/with_children1.jpg',
    '../assets/images/gallery/with_children2.jpg',
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
