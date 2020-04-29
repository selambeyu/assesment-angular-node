import app from "./api/config/express.config";

import * as config from "./api/config/config.json";

app.listen(config.port, () => {
  console.log(`[*] Listening on port ${config.port} ..`);
});
