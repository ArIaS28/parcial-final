Vue.component('lista-frutas', {
    data: function() {
      return {
        frutas: [
          { nombre: 'Mango', imagen: 'img/mango.jpg' },
          { nombre: 'Piña', imagen: 'img/piña.jpg' },
          { nombre: 'Fresa', imagen: 'img/fresa.jpg' }
        ]
      };
    },
    template: `
      <ul>
        <li v-for="fruta in frutas" :key="fruta.nombre">
          <img :src="fruta.imagen" alt="Imagen de {{ fruta.nombre }}" width="50" height="50">
          {{ fruta.nombre }}
        </li>
      </ul>
    `
  });
  
  new Vue({
    el: '#punto3'
  });
  