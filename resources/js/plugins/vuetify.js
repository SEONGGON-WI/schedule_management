import Vue from 'vue'
import Vuetify from 'vuetify'
import 'material-icons/iconfont/material-icons.css'

Vue.use(Vuetify);

const opts = {
    icons: {
      iconfont: 'md',
    },
    theme: {
      themes: {
        light: {
          title_color: '#1565C0',
        },
        dark: {
          title_color: '#1565C0',
        }
      }
    },
};

export default new Vuetify(opts);