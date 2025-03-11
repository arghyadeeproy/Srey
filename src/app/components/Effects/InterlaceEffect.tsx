const InterlaceEffect = () => (
    <div
      className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none z-40"
      style={{
        backgroundImage: 'url(https://de34i7k6qwgwc.cloudfront.net/uploads/img/interlace-9dd51b.png)',
        backgroundSize: '100% auto',
        animation: 'scrollUpVerySlow 12s linear infinite alternate',
      }}
    />
  );
  
  export default InterlaceEffect;
  