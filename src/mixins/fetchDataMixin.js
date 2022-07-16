export default {
    methods: {
        fetchData(feed) {
            return this.$axios.get('https://dzp.cubedev.pl/' + feed,
                {
                    headers: {
                        'Authorization': 'Bearer 122|uBNKCgj74Oa7Tj4V6z89FiWZeCQJQZVLogHtWPrc'
                    }
                }
            )
                .then((response) => {
                    return response.data;
                })
                .catch((error) => {
                    throw error.response.data;
                });
        },
    },
    filters: {
        price: function (value) {
            const result = parseFloat(value).toFixed(2);
            return result;
        }
    },
};