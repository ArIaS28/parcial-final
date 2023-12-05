Vue.component('lista-frutas', {
    data: function() {
      return {
        frutas: [
          { nombre: 'Piña', imagen: 'img/piña.jpg' },
          { nombre: 'Mango', imagen: 'img/mango.jpg' },
          { nombre: 'Fresa', imagen: 'img/fresa.jpg' }
        ]
      };
    },
    methods: {
      eliminarFruta: function(index) {
        this.frutas.splice(index, 1);
      }
    },
    template: `
      <ul>
        <li v-for="(fruta, index) in frutas" :key="fruta.nombre">
          <button @click="eliminarFruta(index)">
            <img :src="fruta.imagen" alt="Imagen de {{ fruta.nombre }}" width="50" height="50">
            {{ fruta.nombre }}
          </button>
        </li>
      </ul>
    `
  });
  
  new Vue({
    el: '#punto4'
  });
  