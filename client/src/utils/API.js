import axios from 'axios';

const TOKEN_KEY = 'jwt';

export default {
    login: function() {
        localStorage.setItem(TOKEN_KEY, 'TestLogin');
    },

    logout: function() {
        localStorage.removeItem(TOKEN_KEY);
    },

    isLogin: function() {
        if (localStorage.getItem(TOKEN_KEY)) {
            return true;
        }
        return false;
    },

    getTodayInspections: function() {
        return axios.get('/api/inspection');
    }
}
