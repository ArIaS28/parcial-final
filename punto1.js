
  Vue.component('saludo-component', {
    data: function() {
      return {
        mensaje: '¡Hola, Mundo!'
      };
    },
    template: '<p>{{ mensaje }}</p>'
  });

  new Vue({
    el: '#punto1'
  });

