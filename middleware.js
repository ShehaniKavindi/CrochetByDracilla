export const config = {
    matcher: ["/admin.html"],
};

export default function middleware(request) {
    const cookieHeader = request.headers.get("cookie") || "";
    const passcode = process.env.ADMIN_PASSCODE || "";

    // Safety net: if you forget to set the env var in Vercel, fail
    // CLOSED (block everyone) rather than open (let everyone in).
    if (!passcode) {
        return new Response(
            "Admin access is not configured. Set the ADMIN_PASSCODE environment variable in your Vercel project settings.",
            { status: 503 }
        );
    }

    const authed = cookieHeader
        .split(";")
        .map(c => c.trim())
        .some(c => c === `admin_auth=${passcode}`);

    if (!authed) {
        const url = new URL(request.url);
        const loginUrl = new URL("/admin-login.html", url.origin);
        loginUrl.searchParams.set("next", url.pathname);
        return Response.redirect(loginUrl, 302);
    }

    // Correct cookie present — let the request through to admin.html.
}
