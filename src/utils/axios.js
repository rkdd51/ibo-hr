import axios from 'axios';
import {
  showModal,
  getModalUniqueId,
  DANGER_MODAL,
} from '@mds/mds-reactjs-library';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  method: 'get',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 307) {
      showModal({
        id: getModalUniqueId(),
        type: DANGER_MODAL,
        header: 'Session lost',
        body: `You lost your session, please reload the webpage to proceed with your authentication`,
        onClose: () => window.location.reload(),
        okButton: {
          label: 'Reload',
          action: () => window.location.reload(),
        },
      });
    }
    return Promise.reject(error);
  }
);

export default api;
