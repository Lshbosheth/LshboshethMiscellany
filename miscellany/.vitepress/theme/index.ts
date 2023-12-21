import Theme from "vitepress/theme";
import { h } from "vue"
import AnimateTitle from './components/animateTitle.vue'
import comment from "./components/comment.vue";

import "./style/var.css"
export default {
    ...Theme,
    Layout() {
        return h(Theme.Layout, null, {
            "home-hero-info": () => h(AnimateTitle),
            "doc-after": () => h(comment),
        });
    },
    enhanceApp({ app, router, siteData }) {
        app.component("Comment", comment);
    },
}
