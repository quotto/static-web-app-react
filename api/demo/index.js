module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    // Authroizationヘッダーの値を取得してレスポンスボディとして返す
    const authorization = req.headers.authorization;
    context.res = {
        body: JSON.stringify({
            data: authorization
        })
    };
}