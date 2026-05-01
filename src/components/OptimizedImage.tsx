import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  aspectRatio?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  priority = false,
  aspectRatio = 'aspect-[4/5]'
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${aspectRatio} ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
          <Loader2 className="w-8 h-8 text-primary animate-spin" />
        </div>
      )}
      
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-all duration-700 ${
          isLoading ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
        }`}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setError(true);
        }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        srcSet={`
          ${src}?w=400 400w,
          ${src}?w=800 800w,
          ${src}?w=1200 1200w,
          ${src}?w=1600 1600w
        `}
      />
      
      {error && (
        <div className="absolute inset-0 bg-gradient-to-br from-muted to-background flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <div className="text-4xl mb-2">📷</div>
            <p className="text-sm">Image loading failed</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
