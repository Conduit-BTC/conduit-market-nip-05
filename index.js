export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/.well-known/nostr.json") {
      return new Response(JSON.stringify({
        names: {
          aceaspades: "308761407319e2c9faefe341a5cfa17060e25320e7c6bb4e33e3f2fecffb1126",
          coffee: "387e4df5b9d54a2c36754bf91eafe13b3cfbeaf08eaca9f999fb5dae1fad6320",
          ericfj: "7999814161743f2279006ab10cfd83bd33adff23c85e5d9d0949fdd60f8f1901",
          gm: "9d92077c5e35af76f7b1cd84738000b7bafb43d20b0a26c18fe29fa838d27146",
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
