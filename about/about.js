
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
        src: '../assets/images/gallery/Nandana-Cup.jpg',
        description: 'Hall Best Fresher 2018 - 2019',
    },
    {
        src: '../assets/images/gallery/acting.jpg',
        description: 'General Championship Hindi Dramatics',
    },
    {
        src: '../assets/images/gallery/babu.jpg',
        description: '',
    },
    {
        src: '../assets/images/gallery/children.jpeg',
        description: "Children's Day Donation Drive, Mother Teresa Hall of Residence",
    },
    {
        src: '../assets/images/gallery/Football.jpg',
        description: 'Member of first-ever NSO Women Football Team',
    },
    {
        src: '../assets/images/gallery/classroom.jpg',
        description: '',
    },
    {
        src: '../assets/images/gallery/communique.jpg',
        description: 'Communique Event',
    },
    {
        src: '../assets/images/gallery/group.jpeg',
        description: 'GYWS Fam',
    },
    {
        src: '../assets/images/gallery/illu1.jpg',
        description: 'MT Hall Illumination',
    },
    {
        src: '../assets/images/gallery/Illu.jpg',
        description: 'MT Hall Illumination',
    },
    {
        src: '../assets/images/gallery/induction.jpg',
        description: 'Induction Program - 2019',
    },
    {
        src: '../assets/images/gallery/mess1.jpg',
        description: '',
    },
    {
        src: '../assets/images/gallery/mess2.jpg',
        description: 'Food with Mess Dada, MT Hall',
    },
    {
        src: '../assets/images/gallery/Secy.jpg',
        description: 'Contested for Secretary Knowledge Cup, TSG',
    },
    {
        src: '../assets/images/gallery/nan_prayas.png',
        description: 'CEO of PRAYAS, GYWS',
    },
    {
        src: '../assets/images/gallery/with_children1.jpg',
        description: 'Jagriti Vidya Mandir of GYWS',
    },
    {
        src: '../assets/images/gallery/group1.jpeg',
        description: 'GYWS Fam',
    },
    {
        src: '../assets/images/gallery/with_children2.jpg',
        description: 'Jagriti Vidya Mandir of GYWS',
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
    for (i = 0; i < stepLength; i++) {
        if (loadedLength < galleryLength) {
            const gridContainer = document.createElement('div');
            gridContainer.classList.add('grid-container');

            const img = document.createElement('img');
            img.setAttribute('src', galleryImages[loadedLength].src);
            gridContainer.appendChild(img);

            if (galleryImages[loadedLength].description) {
                const gridDescription = document.createElement('p');
                gridDescription.classList.add('grid-description');
                gridDescription.textContent = galleryImages[loadedLength].description;
                gridContainer.appendChild(gridDescription);
            }
            gallery.appendChild(gridContainer);
            loadedLength++;
        } else {
            document.getElementById('load-more-btn').remove();
        }
    }
}

galleryLoadMore();

// document.getElementById('load-more-btn').addEventListener('click', galleryLoadMore);
