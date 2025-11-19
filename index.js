export default {
  async fetch(request) {
    const url = new URL(request.url)

    if (url.pathname !== "/.well-known/nostr.json") {
      return new Response("Not found", { status: 404, headers: { "Access-Control-Allow-Origin": "*" } })
    }

    const queryName = url.searchParams.get("name")?.toLowerCase()

    const registry = {
      "aceaspades": "308761407319e2c9faefe341a5cfa17060e25320e7c6bb4e33e3f2fecffb1126",
      "coffee": "387e4df5b9d54a2c36754bf91eafe13b3cfbeaf08eaca9f999fb5dae1fad6320",
      "ericfj": "7999814161743f2279006ab10cfd83bd33adff23c85e5d9d0949fdd60f8f1901",
      "goodmorning": "9d92077c5e35af76f7b1cd84738000b7bafb43d20b0a26c18fe29fa838d27146",
      "dani": "5bd72972b63ea5d00ae6f7bb88ab2eaf2d9cf0011251b043fffbcc7527d0a1e5",
      "kevinz": "1d77cae575a8f73ab9e6263913fe78e3a79f40ee25abd72b71ee5d38061c7e4a"
    }

    const result = {}

    if (queryName && registry[queryName]) {
      result[queryName] = registry[queryName]
    }

    return new Response(JSON.stringify({ names: result }), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    })
  }
}
