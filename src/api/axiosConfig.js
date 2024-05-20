import axios from 'axios';

export default axios.create({
    baseURL:'https://8937-2401-4900-81e5-7c5e-879-ed27-634d-df9.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});

//The base url will change each time i rum command ngrok and create new base url hence needed to change each time.