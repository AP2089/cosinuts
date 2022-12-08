import {createApp} from 'vue';
import Notifications from '@kyvg/vue3-notification';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import i18n from '@/translations';
import Sprite from '@/components/ui/Sprite';
import Picture from '@/components/ui/Picture';
import Loader from '@/components/ui/Loader';
import Notification from '@/components/ui/Notification';
import {requireAll} from '@/helpers/require';

requireAll(require.context('@/sprites/', true, /\.svg$/));

const app = createApp(App);

app.use(i18n);
app.use(store);
app.use(router);
app.use(Notifications);

app.component('Sprite', Sprite);
app.component('Picture', Picture);
app.component('Loader', Loader);
app.component('Notification', Notification);

app.mount('#app');