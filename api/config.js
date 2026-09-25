
export const config = { runtime: "edge" };

export default function handler() {
    const whatsapp = process.env.WHATSAPP_NUMBER || "";

    return new Response(JSON.stringify({ whatsapp }), {
        status: 200,
        headers: {
            "content-type": "application/json",
            "cache-control": "public, max-age=300",
        },
    });
}