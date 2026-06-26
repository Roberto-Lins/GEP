// Polyfill de WebSocket para Node < 22 — ⚠️ SERVIDOR APENAS ⚠️
//
// A Vercel roda este projeto em Node 20.x (adapter @astrojs/vercel v7 → runtime
// nodejs20.x). O @supabase/supabase-js cria internamente um RealtimeClient ao
// instanciar QUALQUER client (mesmo sem usarmos Realtime). Em Node < 22 não existe
// `WebSocket` global, e o WebSocketFactory do realtime-js LANÇA:
//   "Node.js 20 detected without native WebSocket support."
// Esse throw derruba a criação do client → no middleware ele é engolido pelo
// try/catch → `locals.supabase` fica undefined → os endpoints de auth dão 500.
//
// Registrando o WebSocket do pacote `ws` como global, o factory detecta um
// WebSocket "nativo" (checa `typeof globalThis.WebSocket`) e não lança. Em Node 22+
// (ambiente de dev) `globalThis.WebSocket` já existe → este módulo é no-op.
//
// NUNCA importar em código de cliente: o navegador já tem WebSocket e `ws` é um
// pacote Node que não deve entrar no bundle do browser.
import { WebSocket as WsWebSocket } from 'ws';

const g = globalThis as unknown as { WebSocket?: unknown };
if (typeof g.WebSocket === 'undefined') {
  g.WebSocket = WsWebSocket;
}
