function demo(r:NginxHTTPRequest){
    r.headersOut['content-type'] = 'text/plain';
    r.return(200, "Hello from TypeScript");
}

export default {demo}
