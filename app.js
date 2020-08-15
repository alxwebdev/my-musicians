const musiciansList = [
  {
    id: 1,
    title: 'victor wooten',
    category: 'bassists',
    role: 'bassist',
    img: './images/Victor_Wooten.jpg',
    desc: `The bass is the link between harmony and rhythm. It is the foundation of a band. It is what all the other instruments stand upon, but it is rarely recognized as that. `,
  },
  {
    id: 2,
    title: 'marcus miller',
    category: 'bassists',
    role: 'bassist',
    img: './images/Marcus_Miller.jpg',
    desc: `It's a great thing about being a musician; you don't stop until the day you die, you can improve. So it's a wonderful thing to do. `,
  },
  {
    id: 3,
    title: 'jaco pastorius',
    category: 'bassists',
    role: 'bassist',
    img: './images/Pastorius.jpg',
    desc: `A chimpanzee could learn what I do physically, but it goes way beyond that. When you play, you play life.`,
  },
  {
    id: 4,
    title: 'david gilmour',
    category: 'guitarists',
    role: 'guitarist',
    img: './images/David_Gilmour.JPG',
    desc: `You know, once you've had that guitar up so loud on the stage, where you can lean back and volume will stop you from falling backward, that's a hard drug to kick.`,
  },
  {
    id: 5,
    title: 'jonny greenwood',
    category: 'guitarists',
    role: 'guitarist',
    img: './images/Jonny_Greenwood.jpg',
    desc: `I sometimes wish taste wasn't ever an issue, and the sounds of instruments or synths could be judged solely on their colour and timbre. Judged by what it did to your ears, rather than what its historical use reminds you of. `,
  },
  {
    id: 6,
    title: 'jimi hendrix',
    category: 'guitarists',
    role: 'guitarist',
    img: './images/Jimi_Hendrix.jpg',
    desc: `Technically, I'm not a guitar player, all I play is truth and emotion.`,
  },
  {
    id: 7,
    title: 'phil collins',
    category: 'drummers',
    role: 'drummer',
    img: './images/Phil_Collins.jpg',
    desc: `Before you write - remember that every speech has something of 'you' in the writing. Don't take that away when you write. Be yourself. Be comfortable in your own skin.`,
  },
  {
    id: 8,
    title: 'ringo starr',
    category: 'drummers',
    role: 'drummer',
    img: './images/Ringo_Starr.jpg',
    desc: `My soul is that of a drummer.... I didn't do it to become rich and famous. I did it because it was the love of my life.`,
  },
  {
    id: 9,
    title: 'danny carey',
    category: 'drummers',
    role: 'drummer',
    img: './images/Danny_Tool.jpg',
    desc: `It’s a sad thing when almost every band you see is keeping time to clicks and backing tracks`,
  },
  {
    id: 10,
    title: 'ray charles',
    category: 'singers',
    role: 'singer',
    img: './images/Ray_Charles.jpg',
    desc: `Just because you can't see anything , doesn't mean you should shut your eyes.`,
  },
  {
    id: 11,
    title: 'bob dylan',
    category: 'singers',
    role: 'singer',
    img: './images/Bob_Dylan.jpg',
    desc: `I think of a hero as someone who understands the degree of responsibility that comes with his freedom.`,
  },
  {
    id: 12,
    title: 'john lennon',
    category: 'singers',
    role: 'singer',
    img: './images/John_Lennon.jpg',
    desc: `Being honest may not get you a lot of friends but it’ll always get you the right ones.`,
  },
];

const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');

// iterate array and render items on page load
window.addEventListener('DOMContentLoaded', () => {
  displayMusiciansItems(musiciansList);
  // dinamically create filter btns
  const categories = musiciansList.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ['all']
  );
  const categoryBtns = categories
    .map(
      category =>
        `<button 
        class="filter-btn" 
        type="button" 
        data-id=${category}>
        ${category}
      </button>`
    )
    .join('');

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll('.filter-btn');
  // filter items
  filterBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      const category = e.currentTarget.dataset.id;
      const musiciansCategory = musiciansList.filter(item => {
        if (item.category === category) {
          return item;
        }
      });
      if (category === 'all') {
        displayMusiciansItems(musiciansList);
      } else {
        displayMusiciansItems(musiciansCategory);
      }
    });
  });
});

const displayMusiciansItems = musiciansItems => {
  let displayMusiciansList = musiciansItems.map(
    item => `<article class="menu-item">
  <img src=${item.img} class="photo" alt="menu item" />
  <div class="item-info">
    <header>
      <h4>${item.title}</h4>
      <h4 class="price">${item.role}</h4>
    </header>
    <p class="item-text">
      ${item.desc}
    </p>
  </div>
</article>`
  );
  displayMusiciansList = displayMusiciansList.join('');
  sectionCenter.innerHTML = displayMusiciansList;
};
