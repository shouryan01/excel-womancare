interface MapProps {
  address: string;
  className?: string;
}

export function Map({ address, className = "" }: MapProps) {
  const encodedAddress = encodeURIComponent(address);
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodedAddress}`;

  return (
    <div className={`w-full h-[300px] rounded-lg overflow-hidden ${className}`}>
      <iframe
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={mapUrl}
      />
    </div>
  );
}
