export default {
    getApiVersion: function () {
        return "api/v3/";
    },

    getServer: function () {
        return "http://localhost:3000/" + this.getApiVersion();
    }
}