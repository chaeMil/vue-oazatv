import Api from './api';

export default {
    getThumbnailFromVideo: function (video) {
        let url = "";
        if (video != null && video.archive_files != null)
            video.archive_files.forEach((item) => {
                if (item.file_type === "image")
                    url = Api.getServerRoot() + item.file.small.url;
            });
        return url
    },

    getVideoFileFromVideo: function (video) {
        let url = "";
        if (video != null && video.archive_files != null)
            video.archive_files.forEach((item) => {
                if (item.file_type === "video")
                    url = Api.getServerRoot() + item.file.small.url;
            });
        return url
    }
}