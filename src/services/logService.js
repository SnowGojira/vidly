import * as Sentry from "@sentry/react";
import {Integrations} from "@sentry/tracing";

function init(){
    Sentry.init({
        dsn: "https://d2a083ed43c74f69ba074faad434721c@o461699.ingest.sentry.io/5471374",
        integrations: [
          new Integrations.BrowserTracing(),
        ],
      
        // We recommend adjusting this value in production, or using tracesSampler
        // for finer control
        tracesSampleRate: 1.0,
      });
}

function log(err){
    console.log("something Happened!"+err);
    Sentry.captureException(err);
}


export default {
    log:log,
    init:init
}