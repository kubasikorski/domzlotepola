export default {
    methods: {
        getFileDownload(fileId) {
            return 'https://dzp.cubedev.pl/assets/' + fileId + '?download';
        },
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
            const result = Math.round(value*100)/100;
            return result;
        }
    },
};