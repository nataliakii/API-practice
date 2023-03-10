const http = require("http");
const Ap = require("./controller");
const { getReqData } = require("./utils");

const PORT = process.env.PORT || 1000;

// const server = http.createServer(async (req, res) => {

//     //set the request route
//     if (req.url === "/api" && req.method === "GET") {
//         //response headers
//         res.writeHead(200, { "Content-Type": "application/json" });
//         //set the response
//         res.write("Hi there, This is a Vanilla Node.js API");
//         //end the response
//         res.end();
//     }

//     // If no route present
//     else {
//         res.writeHead(404, { "Content-Type": "application/json" });
//         res.end(JSON.stringify({ message: "Route not found" }));
//     }

// })

const server = http.createServer(async (req, res) => {
    // /aApartments : GET
    if (req.url === "/api/aps" && req.method === "GET") {
        // get the aps
        console.log('hit api/aps')
        const aps = await new Ap().getAps();
        // set the status code, and content-type
        res.writeHead(200, { "Content-Type": "application/json" });
        // send the data
        res.end(JSON.stringify(aps));
    }

    // /api/todos/:id : GET
    else if (req.url.match(/\/api\/aps\/([0-9]+)/) && req.method === "GET") {
        try {
            // get id from url
            const id = req.url.split("/")[3];
            // get ap
            const ap = await new Ap().getAp(id);
            // set the status code and content-type
            res.writeHead(200, { "Content-Type": "application/json" });
            // send the data
            res.end(JSON.stringify(ap));
        } catch (error) {
            // set the status code and content-type
            res.writeHead(404, { "Content-Type": "application/json" });
            // send the error
            res.end(JSON.stringify({ message: error }));
        }
    }

    // /api/todos/:id : DELETE
    else if (req.url.match(/\/api\/aps\/([0-9]+)/) && req.method === "DELETE") {
        try {
            // get the id from url
            const id = req.url.split("/")[3];
            // delete todo
            let message = await new Ap().deleteAp(id);
            // set the status code and content-type
            res.writeHead(200, { "Content-Type": "application/json" });
            // send the message
            res.end(JSON.stringify({ message }));
        } catch (error) {
            // set the status code and content-type
            res.writeHead(404, { "Content-Type": "application/json" });
            // send the error
            res.end(JSON.stringify({ message: error }));
        }
    }

    // /api/todos/:id : UPDATE
    else if (req.url.match(/\/api\/aps\/([0-9]+)/) && req.method === "PATCH") {
        try {
            // get the id from the url
            const id = req.url.split("/")[3];
            // update todo
            let updated_todo = await new Ap().updateAp(id);
            // set the status code and content-type
            res.writeHead(200, { "Content-Type": "application/json" });
            // send the message
            res.end(JSON.stringify(updated_todo));
        } catch (error) {
            // set the status code and content type
            res.writeHead(404, { "Content-Type": "application/json" });
            // send the error
            res.end(JSON.stringify({ message: error }));
        }
    }

    // /api/todos/ : POST
    else if (req.url === "/api/aps" && req.method === "POST") {
        // get the data sent along
        let todo_data = await getReqData(req);
        // create the todo
        let todo = await new Ap().createAp(JSON.parse(todo_data));
        // set the status code and content-type
        res.writeHead(200, { "Content-Type": "application/json" });
        //send the todo
        res.end(JSON.stringify(todo));
    }

    // No route present
    else {
        res.writeHead(404, { "Content-Type": "application/json" });
        console.log("hit not found, 404")
        res.end(JSON.stringify({ message: "Apartment not found" }));
    }
});


server.listen(PORT, () => {
    console.log(`server started on port: ${PORT}`);
});