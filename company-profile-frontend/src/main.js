import vue, { h } from 'vue';
import app from './app.vue';
import routers from './routes';

vue.config.productionTip = false;

new vue({
    routers,
    render :h =>(app)
}).$mount('#app');