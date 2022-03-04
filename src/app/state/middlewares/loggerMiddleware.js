
// Middleware is a function that sits between dispatch and reducers
// any action dispatced goes via middleware
// middleware can change the action, or not forwarding action to store

// middlewares can be chained

// Middlewares are useful to implement async logic
// Middleware:  websocket, AJAX calls/api calls, timers etc
// REDUX IS SYNC

// ES5

export function loggerMiddleware(store) {
    // next is function, useful to forward action to next middleware or reducers
    return function (next) {
        return function(action) {
            // code here
            console.log("LOGGER MIDDLEWARE", action)
            // action is forward to next middleware/reducers
            const result = next(action)
            return result;
        }
    }
}