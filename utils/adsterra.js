// utils/adsterra.js
// File utilitas untuk mengelola logika Adsterra.

// Daftar tautan direct link Adsterra.
const ADSTERRA_DIRECT_LINKS = [
    'https://fundingfashioned.com/yed8kj7bvw?key=b7830767455354f8e097df2a9e0f040c', 
    'https://fundingfashioned.com/wdhedf2wx?key=a2c98838af4390b59e8b7aaaea3f1660',
    'https://fundingfashioned.com/nu4ravi1cx?key=4d0556009c2d17968977e235d5de925a',
    'https://fundingfashioned.com/u1ipxidjif?key=bf544685cc418fde38d3de4391de6fee',
    'https://fundingfashioned.com/gh4tkda15?key=080742d09d4b5234a4fdaa773e48ebd4',
    'https://fundingfashioned.com/paij3re0by?key=fa60f72b73c05d987bd978f83a6deaa8',
    'https://fundingfashioned.com/gd8bwkyj?key=d2d35cf16f521bf5e9accfdd865dae8f',
    'https://fundingfashioned.com/x818nj48?key=db0a9d9fa9d81626b459383a7bdc33ee',
    'https://fundingfashioned.com/w2sw8zgx21?key=d34ca1378210247721e98e65d20b3693',
    'https://fundingfashioned.com/qn92sfcb?key=a8333f15c6bba15e367a5456f691547c',
    'https://fundingfashioned.com/rz2xzbfm?key=8c4045c97068010d84c3f1002e82b1c9',
    'https://fundingfashioned.com/y5fc24f7?key=d6efa8068c5da148ed5cf346ffa62290',
    'https://fundingfashioned.com/vttzzi1n?key=bfc8d7d57de835830a0d72fbe7a47be1',
    'https://fundingfashioned.com/g77bpz0g?key=f1cc7147d1c59d932b6186896ab8854c',
    'https://fundingfashioned.com/a43vczjf1b?key=70467091cade36a7f916bfe58dc80cff',
    'https://fundingfashioned.com/vb5ixea83?key=c4e7438c85503eda026984db5e7aa3c4',
    'https://fundingfashioned.com/t71keggw?key=9c6906c82c8eb114e2baef9058f4c4e5'
];

// Konfigurasi
const AD_CONFIG = {
    FIRST_AD_AFTER_CLICKS: 3,    // Tampilkan iklan pertama setelah 3 klik
    AD_INTERVAL: 6,              // Tampilkan iklan setiap 6 klik setelahnya
    AD_DISPLAY_DELAY: 100,       // Delay sebelum membuka targetUrl (ms)
    CLICK_THROTTLE_DELAY: 500,   // Delay untuk mencegah rapid clicks (ms)
    STORAGE_KEY: 'adsterraClickCount',
    SESSION_KEY: 'adsterraSessionStart',
    LAST_CLICK_TIME_KEY: 'adsterraLastClickTime'
};

/**
 * Cek apakah popup diblokir oleh browser
 */
const isPopupBlocked = (popupWindow) => {
    return !popupWindow || popupWindow.closed || typeof popupWindow.closed === 'undefined';
};

/**
 * Versi aman untuk membuka popup dengan fallback
 */
const safeOpenPopup = (url, windowName = '_blank', windowFeatures = 'noopener,noreferrer') => {
    try {
        const popup = window.open(url, windowName, windowFeatures);
        if (isPopupBlocked(popup)) {
            console.warn('Popup mungkin diblokir. Mencoba metode alternatif...');
            // Fallback: buka di tab baru dengan user gesture
            const link = document.createElement('a');
            link.href = url;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.style.display = 'none';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            return null;
        }
        return popup;
    } catch (error) {
        console.error('Error membuka popup:', error);
        return null;
    }
};

/**
 * Dekorator untuk mencegah multiple rapid clicks
 */
const withClickThrottle = (fn, delay = AD_CONFIG.CLICK_THROTTLE_DELAY) => {
    let lastClickTime = 0;
    let timeoutId = null;
    
    return (...args) => {
        const now = Date.now();
        
        // Cek juga dari localStorage untuk sync antar tab
        const lastStoredClick = parseInt(localStorage.getItem(AD_CONFIG.LAST_CLICK_TIME_KEY) || '0', 10);
        const timeSinceLastClick = Math.min(now - lastClickTime, now - lastStoredClick);
        
        // Jika klik terlalu cepat, abaikan
        if (timeSinceLastClick < delay) {
            console.log(`Klik terlalu cepat (${timeSinceLastClick}ms < ${delay}ms), diabaikan`);
            if (timeoutId) clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                lastClickTime = 0;
                localStorage.setItem(AD_CONFIG.LAST_CLICK_TIME_KEY, '0');
            }, delay);
            return;
        }
        
        lastClickTime = now;
        localStorage.setItem(AD_CONFIG.LAST_CLICK_TIME_KEY, now.toString());
        return fn(...args);
    };
};

/**
 * Inisialisasi session iklan
 */
const initializeAdSession = () => {
    if (typeof sessionStorage !== 'undefined') {
        const sessionStart = sessionStorage.getItem(AD_CONFIG.SESSION_KEY);
        if (!sessionStart) {
            // Reset counter untuk session baru
            if (typeof localStorage !== 'undefined') {
                localStorage.setItem(AD_CONFIG.STORAGE_KEY, '0');
                localStorage.setItem(AD_CONFIG.LAST_CLICK_TIME_KEY, '0');
                sessionStorage.setItem(AD_CONFIG.SESSION_KEY, Date.now().toString());
                console.log('🎯 Session iklan baru dimulai');
            }
        }
    }
};

/**
 * Menambah counter klik dan mengembalikan nilai baru
 */
const incrementClickCounter = () => {
    if (typeof localStorage !== 'undefined') {
        let clickCount = parseInt(localStorage.getItem(AD_CONFIG.STORAGE_KEY) || '0', 10);
        clickCount += 1;
        localStorage.setItem(AD_CONFIG.STORAGE_KEY, clickCount.toString());
        
        // Dispatch custom event untuk update real-time antar komponen
        if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('adsterraClickUpdate', { 
                detail: { clickCount } 
            }));
        }
        
        return clickCount;
    }
    return 0;
};

/**
 * Mengecek apakah perlu menampilkan iklan berdasarkan jumlah klik
 */
const shouldDisplayAd = (clickCount) => {
    if (clickCount < AD_CONFIG.FIRST_AD_AFTER_CLICKS) return false;
    
    const clicksSinceFirstAd = clickCount - AD_CONFIG.FIRST_AD_AFTER_CLICKS;
    return clicksSinceFirstAd % AD_CONFIG.AD_INTERVAL === 0;
};

/**
 * Mendapatkan link iklan berdasarkan jumlah klik
 */
const getAdLinkForClick = (clickCount) => {
    if (clickCount < AD_CONFIG.FIRST_AD_AFTER_CLICKS) return null;
    
    const adIndex = Math.floor(
        (clickCount - AD_CONFIG.FIRST_AD_AFTER_CLICKS) / AD_CONFIG.AD_INTERVAL
    ) % ADSTERRA_DIRECT_LINKS.length;
    
    return ADSTERRA_DIRECT_LINKS[adIndex];
};

/**
 * Membuka URL target (tujuan asli dari link)
 */
const openTargetUrl = (targetUrl, shouldShowAd) => {
    if (!targetUrl) return;
    
    const openUrl = () => {
        safeOpenPopup(targetUrl);
        console.log(`🔗 Membuka target: ${targetUrl}`);
    };
    
    // Jika menampilkan iklan, delay sedikit untuk menghindari pemblokiran popup
    if (shouldShowAd) {
        setTimeout(openUrl, AD_CONFIG.AD_DISPLAY_DELAY);
    } else {
        openUrl();
    }
};

/**
 * Fungsi utama untuk menangani klik pada tautan dengan logika Adsterra.
 */
export const handleAdsterraClick = (e, targetUrl) => {
    // 1. Mencegah navigasi default link
    if (e && e.preventDefault) {
        e.preventDefault();
    }
    
    // 2. Pastikan berjalan di client side
    if (typeof window === 'undefined' || !targetUrl) {
        console.error('handleAdsterraClick: Window tidak tersedia atau targetUrl kosong');
        return false;
    }
    
    try {
        // 3. Inisialisasi session jika belum ada
        initializeAdSession();
        
        // 4. Update counter klik
        const clickCount = incrementClickCounter();
        
        // 5. Cek apakah perlu menampilkan iklan
        const shouldShowAd = shouldDisplayAd(clickCount);
        
        // 6. Log untuk debugging
        console.log(`🖱️ Klik #${clickCount} - Tampilkan iklan: ${shouldShowAd}`);
        
        // 7. Jika perlu tampilkan iklan, buka di tab baru
        if (shouldShowAd) {
            const adLink = getAdLinkForClick(clickCount);
            if (adLink) {
                safeOpenPopup(adLink);
                console.log(`📢 Membuka iklan: ${adLink}`);
                
                // Track ke analytics jika ada
                if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
                    window.gtag('event', 'ad_impression', { 
                        click_count: clickCount,
                        ad_index: Math.floor((clickCount - 3) / 6) % ADSTERRA_DIRECT_LINKS.length
                    });
                }
            }
        }
        
        // 8. Selalu buka targetUrl (tujuan asli)
        openTargetUrl(targetUrl, shouldShowAd);
        
    } catch (error) {
        console.error('❌ Error dalam handleAdsterraClick:', error);
        // Fallback: buka langsung targetUrl jika ada error
        if (targetUrl && typeof window !== 'undefined') {
            window.open(targetUrl, '_blank', 'noopener,noreferrer');
        }
    }
    
    return false;
};

/**
 * Versi throttled dari handleAdsterraClick (recommended)
 */
export const handleAdsterraClickThrottled = withClickThrottle(handleAdsterraClick);

/**
 * Reset counter klik (untuk testing atau session management)
 */
export const resetAdsterraClickCount = () => {
    if (typeof localStorage !== 'undefined') {
        localStorage.removeItem(AD_CONFIG.STORAGE_KEY);
        localStorage.removeItem(AD_CONFIG.LAST_CLICK_TIME_KEY);
        console.log('🔄 Counter iklan direset');
    }
    if (typeof sessionStorage !== 'undefined') {
        sessionStorage.removeItem(AD_CONFIG.SESSION_KEY);
    }
    
    // Dispatch event untuk update komponen
    if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('adsterraClickUpdate', { 
            detail: { clickCount: 0 } 
        }));
    }
};

/**
 * Dapatkan jumlah klik saat ini
 */
export const getCurrentClickCount = () => {
    if (typeof localStorage !== 'undefined') {
        return parseInt(localStorage.getItem(AD_CONFIG.STORAGE_KEY) || '0', 10);
    }
    return 0;
};

/**
 * Cek apakah klik berikutnya akan menampilkan iklan
 */
export const willNextClickShowAd = () => {
    const currentCount = getCurrentClickCount();
    return shouldDisplayAd(currentCount + 1);
};

/**
 * Dapatkan info status iklan saat ini
 */
export const getAdStatus = () => {
    const currentCount = getCurrentClickCount();
    const nextAdClick = AD_CONFIG.FIRST_AD_AFTER_CLICKS + 
                       (Math.floor((Math.max(0, currentCount - AD_CONFIG.FIRST_AD_AFTER_CLICKS + AD_CONFIG.AD_INTERVAL)) / AD_CONFIG.AD_INTERVAL) * AD_CONFIG.AD_INTERVAL);
    const clicksToNextAd = Math.max(0, nextAdClick - currentCount);
    
    return {
        currentCount,
        willShowAdOnNextClick: willNextClickShowAd(),
        clicksToNextAd,
        nextAdAtClick: nextAdClick,
        progress: currentCount >= AD_CONFIG.FIRST_AD_AFTER_CLICKS 
            ? ((currentCount - AD_CONFIG.FIRST_AD_AFTER_CLICKS) % AD_CONFIG.AD_INTERVAL) / AD_CONFIG.AD_INTERVAL * 100
            : (currentCount / AD_CONFIG.FIRST_AD_AFTER_CLICKS) * 100
    };
};

// Export tambahan
export { ADSTERRA_DIRECT_LINKS, AD_CONFIG };