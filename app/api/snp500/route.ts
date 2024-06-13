import fetch from 'node-fetch';

export async function GET(request: any) {
    try {
        console.log("snp1:")
        const response = await fetch('https://query2.finance.yahoo.com/v8/finance/chart/%5EGSPC');
        const data = await response.json();
        console.log("snp:", data)
        return new Response(JSON.stringify(data), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        return new Response(JSON.stringify({error: error.message}), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}