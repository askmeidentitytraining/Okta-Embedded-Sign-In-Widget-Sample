export default {
    oidc: {
      issuer: 'https://dev-xxxxx.okta.com',
      clientId: 'client id goes here',
      scopes: ['openid', 'profile', 'email'],
      redirectUri: `${window.location.origin}/login/callback`
    },
    
    widget: {
      issuer: 'https://dev-xxxxx.okta.com',
      clientId: 'client id goes here',
      redirectUri: `${window.location.origin}/login/callback`,
      scopes: ['openid', 'profile', 'email'],
    }
  };