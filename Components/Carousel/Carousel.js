class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        //references
        this.left = document.querySelector('.left-button')
        this.right = document.querySelector('.right-button')
        this.imgs = document.querySelectorAll('.carousel img') // grabbing all carousel images
        //current Index
        this.currentIndex = 0;
        //current img to display
        this.currentImg = this.imgs[this.currentIndex]; // getting the first image in our nodelist of carousel images, and setting that as our currentImg
        this.currentImg.style.display = 'block'; // setting the current image to display. 
        //event listeners
        this.left.addEventListener('click', () => this.previous());
        this.right.addEventListener('click', () => this.next());
    }
    previous() {
        const imgs = document.querySelectorAll('.carousel img');
        const snippets = document.querySelectorAll('.snippet');
        const circles = document.querySelectorAll('.circle');
        //display none on each image
        imgs.forEach(image => image.style.display = 'none');
        snippets.forEach(snip => snip.style.display = 'none');
        //currentIndex minus 1 when clicking left arrow
        this.currentIndex -= 1;
        //if the current index is less than 0 then loop to end
        if (this.currentIndex < 0) {
            this.currentIndex = 2;
        }
        //if the current index is greater than 3 then loop to beginning (since theres only 4 images total)
        //could use imgs.length etc.
        if (this.currentIndex > 2) {
            this.currentIndex = 0;
        }
        //displays block on the current image on the current index
        this.imgs[this.currentIndex].style.display = 'block';
        snippets[this.currentIndex].style.display = 'block';
    }
    next() {
        const imgs = document.querySelectorAll('.carousel img');
        const snippets = document.querySelectorAll('.snippet');
        //display none for each image
        imgs.forEach(image => image.style.display = 'none');
        snippets.forEach(snip => snip.style.display = 'none');
        //currentindex + 1 when clicking next arrow
        this.currentIndex += 1;
        if (this.currentIndex < 0) {
            this.currentIndex = 2;
        }
        if (this.currentIndex > 2) {
            this.currentIndex = 0;
        }
        this.imgs[this.currentIndex].style.display = 'block';
        snippets[this.currentIndex].style.display = 'block';
    }
}

const images = document.querySelectorAll('.carousel img') // nodelist of all images
// console.log(images);
images.forEach(image => new Carousel(image));