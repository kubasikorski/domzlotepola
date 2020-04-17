import ax from 'axios'
ax.defaults.headers.common["Authorization"] = `Bearer BcTUWRBAYbOxNv9D8It8xTjL`;
export const axios = ax
export default {
    install (Vue) {
        Vue.prototype.$axios = ax
    }
}