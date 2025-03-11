const GlitchEffect = () => (
    <video
      className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-60 z-30"
      autoPlay
      loop
      muted
      playsInline
      src="https://de34i7k6qwgwc.cloudfront.net/uploads/img/glitch-800x600-alpha-3617b8.webm"
      style={{ animation: 'glitchVerySlow 10s linear infinite' }}
    />
  );
  
  export default GlitchEffect;
  