import { NextResponse, type NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

// Le domaine www est celui qui porte l'essentiel du trafic organique :
// toutes les variantes y sont ramenées en 308.
const CANONICAL_HOST = 'www.meudonforest.com';

function isLocalHost(host: string) {
  return host.startsWith('localhost') || host.startsWith('127.') || host.startsWith('[::1]');
}

export default function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = (request.headers.get('host') || '').toLowerCase();
  const proto = (request.headers.get('x-forwarded-proto') || 'https').toLowerCase();
  let needsRedirect = false;

  // 1) non-www → www
  if (!isLocalHost(host) && host === 'meudonforest.com') {
    url.host = CANONICAL_HOST;
    needsRedirect = true;
  }

  // 2) http → https
  if (!isLocalHost(host) && proto === 'http') {
    url.protocol = 'https';
    url.port = '';
    needsRedirect = true;
  }

  // 3) ancien préfixe /fr → racine (le français est désormais sans préfixe)
  if (url.pathname === '/fr') {
    url.pathname = '/';
    needsRedirect = true;
  } else if (url.pathname.startsWith('/fr/')) {
    url.pathname = url.pathname.slice('/fr'.length) || '/';
    needsRedirect = true;
  }

  if (needsRedirect) {
    return NextResponse.redirect(url, 308);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
