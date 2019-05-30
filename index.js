class Menu {
  constructor(menulist) {
    // assign this menulist to the passed in menulist
    this.menulist = menulist;
    // create a reference to the ".nav-icon" class.
    this.navopen = this.menulist.querySelector('.nav-icon');
    // console log this shit
    console.log('does this shit work');
    //replace open menu with x
    this.navopen.textContent = 'x';
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.navopen.addEventListener('click', () => this.toggleNav());
  }
}

const toggleNav = () => {
  if (this.navopen.textContent === 'x') {
    this.navopen.textContent = '.navicon';
  } else {
    this.expandButton.textContent = 'expand';
  }
  this.domElement.classList.toggle('article-open');
};

const menu = document.querySelector('nav-icon');
// hamburger.addEventListener('click', toggleNav());
