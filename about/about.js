
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
    {
        src: '../assets/images/gallery/Football.jpg',
        description: 'Member of first-ever NSO Women Football Team',
    },
    {
        src: '../assets/images/gallery/Nandana-Cup.jpg',
        description: 'Description2',
    },
    {
        src: '../assets/images/gallery/acting.jpg',
        description: 'Description',
    },
    {
        src: '../assets/images/gallery/babu.jpg',
        description: 'Description2',
    },
    {
        src: '../assets/images/gallery/children.jpeg',
        description: 'Description',
    },
    {
        src: '../assets/images/gallery/classroom.jpg',
        description: 'Description2',
    },
    {
        src: '../assets/images/gallery/communique.jpg',
        description: 'Description',
    },
    {
        src: '../assets/images/gallery/group.jpeg',
        description: 'Description2',
    },
    {
        src: '../assets/images/gallery/group1.jpeg',
        description: 'Description',
    },
    {
        src: '../assets/images/gallery/illu1.jpg',
        description: 'Description2',
    },
    {
        src: '../assets/images/gallery/Illu.jpg',
        description: 'Description',
    },
    {
        src: '../assets/images/gallery/induction.jpg',
        description: 'Description2',
    },
    {
        src: '../assets/images/gallery/mess1.jpg',
        description: 'Description',
    },
    {
        src: '../assets/images/gallery/mess2.jpg',
        description: 'Description2',
    },
    {
        src: '../assets/images/gallery/Secy.jpg',
        description: 'Description',
    },
    {
        src: '../assets/images/gallery/nan_prayas.png',
        description: 'Description2',
    },
    {
        src: '../assets/images/gallery/with_children1.jpg',
        description: 'Description',
    },
    {
        src: '../assets/images/gallery/with_children2.jpg',
        description: 'Description2',
    },
];

// const galleryImages1 = [
//     '../assets/images/gallery/Football.jpg',
//     '../assets/images/gallery/Nandana-Cup.jpg',
//     '../assets/images/gallery/Secy.jpg',
//     '../assets/images/gallery/Illu.jpg',
//     '../assets/images/gallery/group1.jpeg',
//     '../assets/images/gallery/group.jpeg',
//     '../assets/images/gallery/classroom.jpg',
//     '../assets/images/gallery/mess1.jpg',
//     '../assets/images/gallery/mess2.jpg',
//     '../assets/images/gallery/babu.jpg',
//     '../assets/images/gallery/acting.jpg',
//     '../assets/images/gallery/communique.jpg',
//     '../assets/images/gallery/with_children1.jpg',
//     '../assets/images/gallery/with_children2.jpg',
//     '../assets/images/gallery/children.jpeg',
//     '../assets/images/gallery/nan_prayas.png',
//     '../assets/images/gallery/illu1.jpg',
//     '../assets/images/gallery/induction.jpg'
// ];

const galleryLength = galleryImages.length;
const stepLength = 18;
let loadedLength = 0;
const gallery = document.getElementById('about-gallery');

function galleryLoadMore(event) {
    for(i = 0; i < stepLength; i++) {
        if(loadedLength < galleryLength) {
            const gridContainer = document.createElement('div');
            gridContainer.classList.add('grid-container');

            const img = document.createElement('img');
            img.setAttribute('src', galleryImages[loadedLength].src);

            const gridDescription = document.createElement('p');
            gridDescription.classList.add('grid-description');
            gridDescription.textContent = galleryImages[loadedLength].description;

            gridContainer.appendChild(img);
            gridContainer.appendChild(gridDescription);
            gallery.appendChild(gridContainer);
            loadedLength++;
        } else {
            document.getElementById('load-more-btn').remove();
        }
    }
}

galleryLoadMore();

document.getElementById('load-more-btn').addEventListener('click', galleryLoadMore);
