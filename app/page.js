export const metadata = {
  title: 'Construcții Profesionale - Redirecting...',
};

export default function RootPage() {
  return (
    <>
      <script dangerouslySetInnerHTML={{
        __html: `
          setTimeout(function() {
            window.location.href = '/saleemwesite/ro/';
          }, 100);
        `
      }} />
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontFamily: 'system-ui, sans-serif'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h2>Redirecting...</h2>
          <p>Loading construction website...</p>
          <p><a href="/saleemwesite/ro/" style={{ color: '#FF6B35', textDecoration: 'underline' }}>Click here if not redirected automatically</a></p>
        </div>
      </div>
    </>
  );
}
