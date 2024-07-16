const { createApp, ref } = Vue

const CATEGORIES = ["Programs", "Images", "Misc."]

class Program {
    constructor(link, name, description, platforms, tags) {
        this.link = link
        this.name = name
        this.description = description
        this.platforms = platforms
        this.tags = tags
    }
}

// vue

const app = Vue.createApp({
    data() {
        return {
            programs: [
                new Program("", "przypadek C++ lib", "Obliczanie (a+b)^przypadek", ["C++ LIBRARY"], ["C++", "matematyczny", "library"]),
                new Program("", "podróż.py", "Symulator podróży w CLI", ["WINDOWS CLI"], ["Python", "symulatory"])
            ],
            category: 0
        }
    },
    methods: {
        switchCategory(amount) {
            this.category += amount
            this.category %= CATEGORIES.length
            if (this.category < 0) {
                this.category = CATEGORIES.length - 1
            }
        }
    }
}).mount('#app')

