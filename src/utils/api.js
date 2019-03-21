export default {
    getApiVersion: function () {
        return "api/v3/";
    },

    getServer: function () {
        return this.getServerRoot() + this.getApiVersion();
    },

    getServerRoot: function() {
        return "http://localhost:3000/";
    }
}