"use client";

import { 
    handleAdsterraClickThrottled as handleAdsterraClick, 
    willNextClickShowAd,
    getAdStatus 
} from '../utils/adsterra';
import { useState, useEffect, useCallback, useRef } from 'react';

export default function AdLink({ 
    url, 
    children, 
    className = '',
    showIndicator = true,
    onClick = null,
    throttleDelay = 500,
    disabled = false,
    title: customTitle = ''
}) {
    const [showAdIndicator, setShowAdIndicator] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const [adStatus, setAdStatus] = useState({ clicksToNextAd: 0 });
    const linkRef = useRef(null);
    
    // Update indicator dan status secara berkala
    useEffect(() => {
        let isMounted = true;
        
        const updateStatus = () => {
            if (!isMounted) return;
            
            try {
                setShowAdIndicator(willNextClickShowAd());
                setAdStatus(getAdStatus());
            } catch (error) {
                console.error('Error updating ad status:', error);
                if (isMounted) {
                    setShowAdIndicator(false);
                    setAdStatus({ clicksToNextAd: 0 });
                }
            }
        };
        
        updateStatus();
        
        // Update setiap 1 detik
        const interval = setInterval(updateStatus, 1000);
        
        // Update saat window focus
        const handleFocus = () => updateStatus();
        window.addEventListener('focus', handleFocus);
        
        // Update saat storage berubah (dari tab lain)
        const handleStorageChange = (e) => {
            if (e.key === 'adsterraClickCount' || e.key === 'adsterraLastClickTime') {
                updateStatus();
            }
        };
        window.addEventListener('storage', handleStorageChange);
        
        // Update saat ada custom event
        const handleClickUpdate = () => updateStatus();
        window.addEventListener('adsterraClickUpdate', handleClickUpdate);
        
        return () => {
            isMounted = false;
            clearInterval(interval);
            window.removeEventListener('focus', handleFocus);
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener('adsterraClickUpdate', handleClickUpdate);
        };
    }, []);
    
    // Handle klik
    const handleClick = useCallback((e) => {
        // Jika link dinonaktifkan
        if (isProcessing || disabled || !url) {
            e.preventDefault();
            return;
        }
        
        // Untuk link internal atau anchor, jangan gunakan Adsterra
        const isInternalLink = url.startsWith('#') || 
                              url.startsWith('/') || 
                              url.startsWith('?') ||
                              !url.includes('://') ||
                              (typeof window !== 'undefined' && url.includes(window.location.hostname));
        
        if (isInternalLink) {
            return; // Biarkan browser menangani secara normal
        }
        
        e.preventDefault();
        setIsProcessing(true);
        
        try {
            handleAdsterraClick(e, url);
            if (onClick) onClick(e);
        } catch (error) {
            console.error('Error handling click:', error);
            // Fallback: buka langsung jika ada error
            if (url && typeof window !== 'undefined') {
                window.open(url, '_blank', 'noopener,noreferrer');
            }
        } finally {
            setTimeout(() => setIsProcessing(false), 300);
        }
    }, [isProcessing, disabled, url, onClick]);
    
    // Generate title tooltip
    const getTitle = () => {
        if (isProcessing) return 'Sedang memproses...';
        if (disabled) return customTitle || 'Link dinonaktifkan';
        if (showAdIndicator) return `Klik berikutnya akan menampilkan iklan (${adStatus.clicksToNextAd} klik menuju iklan)`;
        if (customTitle) return customTitle;
        if (adStatus.clicksToNextAd > 0) return `Iklan akan muncul dalam ${adStatus.clicksToNextAd} klik lagi`;
        return 'Klik untuk membuka link';
    };
    
    // Generate indicator text
    const getIndicatorText = () => {
        if (adStatus.clicksToNextAd <= 0) return '🎯';
        if (adStatus.clicksToNextAd <= 2) return '🔥';
        return `${adStatus.clicksToNextAd}`;
    };
    
    return (
        <a
            ref={linkRef}
            href={disabled ? undefined : url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
                relative inline-flex items-center gap-1.5
                ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:opacity-90'}
                ${isProcessing ? 'opacity-70 cursor-wait' : ''}
                transition-all duration-200
                ${className}
            `}
            onClick={handleClick}
            aria-disabled={disabled || isProcessing}
            title={getTitle()}
            data-ad-indicator={showAdIndicator}
            data-ad-clicks-to-next={adStatus.clicksToNextAd}
            data-processing={isProcessing}
        >
            {children}
            
            {/* Loading spinner */}
            {isProcessing && (
                <span 
                    className="w-3 h-3 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"
                    aria-label="Memproses..."
                    role="status"
                />
            )}
            
            {/* Ad indicator */}
            {!isProcessing && showIndicator && showAdIndicator && (
                <span 
                    className={`
                        flex items-center justify-center min-w-[18px] h-[18px] px-1
                        text-xs font-bold rounded-full animate-pulse
                        ${adStatus.clicksToNextAd <= 1 
                            ? 'bg-red-500 text-white' 
                            : adStatus.clicksToNextAd <= 3
                            ? 'bg-orange-500 text-white'
                            : 'bg-yellow-500 text-black'
                        }
                    `}
                    title={`Iklan akan muncul dalam ${adStatus.clicksToNextAd} klik lagi`}
                    aria-label={`Iklan akan muncul dalam ${adStatus.clicksToNextAd} klik lagi`}
                    role="presentation"
                >
                    {getIndicatorText()}
                </span>
            )}
            
            {/* Progress ring untuk desktop */}
            {!isProcessing && showIndicator && adStatus.clicksToNextAd > 0 && adStatus.clicksToNextAd <= 5 && (
                <span 
                    className="hidden md:block relative w-4 h-4"
                    title={`Progress: ${Math.round(adStatus.progress)}%`}
                >
                    <svg className="w-4 h-4 -rotate-90" viewBox="0 0 16 16">
                        <circle 
                            cx="8" cy="8" r="6" 
                            stroke="currentColor" 
                            strokeWidth="1.5" 
                            fill="none"
                            className="text-gray-300"
                        />
                        <circle 
                            cx="8" cy="8" r="6" 
                            stroke="currentColor" 
                            strokeWidth="1.5" 
                            fill="none"
                            strokeLinecap="round"
                            strokeDasharray={`${2 * Math.PI * 6}`}
                            strokeDashoffset={`${2 * Math.PI * 6 * (1 - adStatus.progress / 100)}`}
                            className="text-blue-500"
                        />
                    </svg>
                </span>
            )}
        </a>
    );
}

// Komponen untuk menampilkan status Adsterra (opsional)
export function AdStatusDisplay({ className = '' }) {
    const [status, setStatus] = useState(getAdStatus());
    
    useEffect(() => {
        const updateStatus = () => setStatus(getAdStatus());
        
        updateStatus();
        const interval = setInterval(updateStatus, 2000);
        
        window.addEventListener('storage', updateStatus);
        window.addEventListener('adsterraClickUpdate', updateStatus);
        
        return () => {
            clearInterval(interval);
            window.removeEventListener('storage', updateStatus);
            window.removeEventListener('adsterraClickUpdate', updateStatus);
        };
    }, []);
    
    return (
        <div className={`text-xs text-gray-600 ${className}`}>
            <span className="font-medium">Klik: {status.currentCount}</span>
            {status.clicksToNextAd > 0 && (
                <span className="ml-2">
                    • Iklan berikutnya dalam <span className="font-bold">{status.clicksToNextAd}</span> klik
                </span>
            )}
            {status.willShowAdOnNextClick && (
                <span className="ml-2 animate-pulse text-red-600 font-bold">
                    • Iklan berikutnya!
                </span>
            )}
        </div>
    );
}