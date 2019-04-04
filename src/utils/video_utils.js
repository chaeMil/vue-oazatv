import Api from './api';
import LangUtils from './lang_utils';

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
                    url = Api.getServerRoot() + item.file.url;
            });
        return url
    },

    getTitleFromVideo: function (video) {
        let userLang = LangUtils.getUserLocale();
        let title = "";
        if (video != null) {
            if (video.translations != null)
                video.translations.forEach((item) => {
                    if (item.locale === userLang)
                        title = item.title;
                });
            else title = video.title;
        }
        return title
    }
}