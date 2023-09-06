import Api from './Api';
import axiosClient from './axiosClient';

const appService = {

    getApiHome: () => {
        return axiosClient.get(
            'videos' + '?' + 'part=contentDetails&part=snippet&chart=mostPopular&maxResults=30&regionCode=VN&key=AIzaSyCAcqvUxA9vw7qcwu-fZbCc6JglC414Eoc',
        );
    },

    getChannelApi: (channelID: string) => {
        return axiosClient.get(
            'channels' + '?' + 'id=' + channelID + '&key=AIzaSyCAcqvUxA9vw7qcwu-fZbCc6JglC414Eoc' + '&part=snippet,contentDetails,statistics',
        );
    },

    getCommentThreadApi: (videoID: string) => {
        return axiosClient.get(
            'commentThreads' + '?' + '&key=AIzaSyCAcqvUxA9vw7qcwu-fZbCc6JglC414Eoc' + '&textFormat=plainText&part=snippet&videoId=' + videoID + '&maxResults=30',
        );
    },
};

export default appService;