//property -> single key value
//method -> function key
//member -> property and method
//abstraction
//ancapsulation
// getter
// setter

// class Person {
//     name
//     surname
//     age
//     constructor (ism,fam,yosh) {
//         this.name= ism
//         this.surname = fam
//         this.age = yosh
//     }
//     fullName () {
//         return this.name + " " + this.surname
//     }
//     x = () => {
//         return this.age
//     }
// }
// const sardor = new Person('Sardor','Shomurodov',14)
// const abbos = new Person('Abbos','Asqarjonov',15)

// console.log(sardor);
// console.log(abbos);
// class User{
//     constructor (ism,fam){
//         this.firstName = ism
//         this.lastName = fam
//     }
//     get fullName (){
//         return `${this.firstName} ${this.lastName}`
//     }
//     set fullName(newValue){
//         [this.firstName,this.lastName] = newValue.split('')
//     }
// }

// const user = new User ("Sardor","Shomurodov");
// alert(user.fullName);
// user.fullName = "Shahriyor Malikov";
// alert(user.fullName);






class Text {
    elem
    Text
    constructor (obj){
        this.elem = document.querySelector(obj.el)
        this.txt = this.elem.innerHTML
        this.elem.innerHTML = null
        // console.log(this.txt);
    }
    str (x = 0) {
        this.elem.innerHTML = this.elem.innerHTML + this.txt[x]
        x++
        if (x < this.txt.length) {
        setTimeout(()=>{
                this.str(x)
        }, 200)            
        }
    }
}
const text = new Text({
    el:".header__content h1"
});
const desc = new Text({
    el:".header__content p"
});

console.log(text.str());
console.log(desc.str());

class Sticky {
    constructor (option) {
        this.nav = document.querySelector(option.el)
        this.nav.style.position = 'fixed'
        window.addEventListener('scroll',()=> this.scrollCalc())
    }
    scrollCalc() {
        if (window.innerHeight - this.nav.offsetHeight - window.scrollY > 0) {
            this.nav.style.top = window.innerHeight - this.nav.offsetHeight - window.scrollY + "px"
        }
        else {
            this.nav.style.top = 0
        }
    }
}

const navName = new Sticky({
    el:".header__nav"
})
navName.scrollCalc()

class Carousel {
    constructor (slider) {
        this.nav = document.querySelector
    }
}
