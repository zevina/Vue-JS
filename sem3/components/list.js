const list = {
    data() {
        return {
            taskArr: [],
            task: '',
        };
    },
    methods: {
        addTaskToList() {
            this.taskArr.push({ id: this.taskArr.length + 1, taskName: this.task });
            this.task = '';
        },
        deleteTaskFromList(id) {
            this.taskArr = this.taskArr.filter(el => el.id !== id);
        },
    },
    template: `
            <div>
                <h3>Списсок задач</h3>
                <input v-model="task" type="text" />
                <button @click="addTaskToList" class="btn">Добавить</button>
                <ul>
                    <li v-for="task in taskArr" :key="task.id">{{ task.taskName }}  
                        <button @click="deleteTaskFromList(task.id)">Удалить задачу</button>
                    </li>
                </ul>
            </div>
            `,
}
