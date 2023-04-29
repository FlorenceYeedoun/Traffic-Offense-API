import app from "./app.js";

import {PORT,NODE_ENV} from "./config/config.js";

app.listen(PORT, () => {
    console.log(`Connected to server in ${NODE_ENV} mode and on port ${PORT}`);
});
