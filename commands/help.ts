export function executeHelp(): void {
  console.log(`
    Welcome to denomock cli
    
    Commands:
    
      deno run denomock.ts help - show this screen
      
      deno run --unstable --allow-net --allow-read --allow-write denomock.ts start --project=PROJECT_NAME --port=PORT(default 8000) - start new mocked http server
      
      deno run --unstable --allow-write denomock.ts clean --project=PROJECT_NAME - clean project cache
  `);
}
