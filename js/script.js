const app = {
    data() {
        return {
            tareas: [
                { nombre: 'Revisar proyectos', estado: 'false' },
                { nombre: 'Asistir a clase de programación', estado: 'false' },
                { nombre: 'Estudiar para el examen', estado: 'false' },
                { nombre: 'Ejercicio en el gimnasio', estado: 'false' },
                { nombre: 'Reunión con compañeros de equipo', estado: 'false' }
            ],
            cantidad: 1,
            nuevaTarea: ''  
        };
    },
    computed: {
        rangeColorClass() {
            if (this.cantidad <= 40) return 'range-green';
            if (this.cantidad <= 70) return 'range-orange';
            return 'range-red';
        }
    },
    methods: {
        incrementar() {
            if (this.cantidad < 100) {
                this.cantidad++;
            }
        },
        disminuir() {
            if (this.cantidad > 1) {
                this.cantidad--;
            }
        },
        toggleEstado(index) {
            this.tareas[index].estado = this.tareas[index].estado === 'true' ? 'false' : 'true';
        },
        cuantosCompletadas() {
            return this.tareas.filter(tarea => tarea.estado === 'true').length;
        },
        agregarTarea() {
            if (this.nuevaTarea.trim() !== '') {
                this.tareas.push({ nombre: this.nuevaTarea, estado: 'false' });
                this.nuevaTarea = ''; 
            } else {
                alert("Por favor ingrese una tarea válida.");
            }
        }
    }
};

Vue.createApp(app).mount('#app');
