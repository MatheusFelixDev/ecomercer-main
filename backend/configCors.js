module.exports = {
    async headers() {
        return[
            {
            source:"/:path*",
            header:[
                {key:"Access-Control-Allow-Credentials", value: "true"},
                {key:"Access-Control-Allow-Origin", value: "*"},                
                {key:"Access-Control-Allow-Methods", value: "GET,PUT,POST,DELETE,OPTIONS,PATCH"},
            
            ]
            }
        ]
    }
}