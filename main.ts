console.log("Hello, Console")

Deno.serve((req: Request) => new Response(\"Hello, World\"));
