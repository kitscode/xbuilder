import {headers} from 'next/headers'

export async function GET(request: Request) {
    const headersList = headers()
    const referer = headersList.get('referer')

    let result = {
        "index": 5433.74,
        "percent_change_24h": 1.02
    };

    try {
        const response = await fetch("https://query2.finance.yahoo.com/v8/finance/chart/%5EGSPC");
        const snp_data = (await response.json())["chart"]["result"][0]["meta"];
        const index = snp_data["regularMarketPrice"];
        const previousClose = snp_data["previousClose"];
        const change = ((index - previousClose) / previousClose * 100).toFixed(2);
        result["index"] = index;
        result["percent_change_24h"] = parseFloat(change);
    } catch (e) {
    }
    return new Response(JSON.stringify(result), {
        status: 200,
        // @ts-ignore
        headers: {referer: referer},
    });
}