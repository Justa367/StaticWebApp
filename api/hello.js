module.exports = async function (context, req) {
    context.log('Hello Function was triggered');
    return {
        status: 200,
        body: "Hello from Azure Function!"
    };
};
