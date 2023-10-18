const counter = {
    data() {
        return {
            count: 0,
        };
    },
    methods: {
        increment() {
            this.count++;
        },
        decrement() {
            this.count--;
        },
    },
    template: `
            <div>
            <p>{{ count }}</p>
            <button @click="increment">+1</button>
            <button @click="decrement">-1</button>
            </div>
            `,
}

