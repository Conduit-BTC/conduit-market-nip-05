export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/.well-known/nostr.json") {
      return new Response(JSON.stringify({
        names: {
          aceaspades: "npub1xzrkzsrnr83vn7h0udq6tnapwpswy5equlrtkn3nu0e0anlmzynqne0qap",
          ericfj: "npub10xvczstpwsljy7gqd2cselvrh5e6mlerep09m8gff87avru0ryqsg2g437"
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
