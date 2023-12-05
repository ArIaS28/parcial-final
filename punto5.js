Vue.component('contador', {
    data: function() {
      return {
        count: 0
      }
    },
    methods: {
      incrementar: function() {
        this.count++;
      },
      decrementar: function() {
        this.count--;
      }
    },
    template: `

      <div>
        <p>Contador: {{ count }}</p>
        <button @click="incrementar">Incrementar</button>
        <button @click="decrementar">Decrementar</button>
        <p v-if="count > 0">El contador es positivo</p>
        <p v-else-if="count < 0">El contador es negativo</p>
        <p v-else>El contador es igual a cero</p>
      </div>
    `
  });

  new Vue({
    el: '#punto5'
  });