Vue.component('saludo-component', {
    data: function() {
      return {
        mensaje: '¡Hola, Mundo!'
      };
    },
    template: `
      <div>
        <input type="text" v-model="mensaje"> <!-- Campo de entrada -->
        <p>{{ mensaje }}</p> <!-- Mostrar mensaje -->
      </div>
    `
  });

  new Vue({
    el: '#punto2'
  });