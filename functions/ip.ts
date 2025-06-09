import type { PagesFunction } from '@cloudflare/workers-types';

export const onRequestGet: PagesFunction = async (context) => {
  // 与 ipService.ts 保持一致，使用 ipify
  const resp = await fetch("https://api.ipify.org?format=json");
  const data = await resp.json();
  return new Response(JSON.stringify(data), {
    headers: { "content-type": "application/json" }
  });
};
