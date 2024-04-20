const MESSAGE = 'Hello, I hope you are having an awesome day. Bye!';
const HEADER = 'Message';
// I wish characters like ♡ where allowed :(
const POWERED_BY = 'A cool dev and a lot of Love <3'; 

module.exports = ({
    message = MESSAGE,
    headerName = HEADER,
    addX: x = true,
    replacePoweredBy: pb = true,
    poweredBy: pbt = POWERED_BY
} = {}) => {
    const header = (x ? 'X-' : '') + headerName;
    return (_, res, next) => {
        if(pb && res.hasHeader('X-Powered-By'))
            res.setHeader('X-Powered-By', pbt);

        res.setHeader(header, message);

        next();
    }
}
/* ♡ Thank you for using my lib! Have a great rest of your day ♡ */
