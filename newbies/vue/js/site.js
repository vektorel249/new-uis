var app = Vue.createApp({
    data() {
        return {
            value: 0,
            people: []
        }
    },
    mounted() {
        this.people.push({name: "Can", age: 37});
        this.people.push({name: "Gürkan", age: 22});
        this.people.push({name: "Mücahit", age: 25});
        this.people.push({name: "Uğur", age: 26});
        this.people.push({name: "Arda", age: 28});
    },
    methods: {
        increase() {
            this.value++;
        },
        decrease() {
            this.value--;
        },
        isOld(age) {
            return age > this.value
        }
    },
    computed: {
        double() {
            return this.value * 2;
        }
    }
});
app.mount("#root");