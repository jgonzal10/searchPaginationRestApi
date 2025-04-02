const config = {
    env: process.env.NODE_ENV || "development",
    port: parseInt(process.env.PORT || "3000"),
    debug: process.env.APP_DEBUG === "true",
    logLevel: process.env.LOG_LEVEL || "info",
    defaultPageSize: parseInt(process.env.DEFAULT_PAGE_SIZE || "5"),
  };
  
  export default config;