export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/.well-known/nostr.json") {
      return new Response(JSON.stringify({
        names: {
          conduit: "npub1..."
        }
      }), {
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    return fetch(request); // fallback to origin
  },
};
