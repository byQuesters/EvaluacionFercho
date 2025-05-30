'use client'

import { useState, useEffect } from 'react';

interface AccessibilitySettings {
  fontSize: number;
  fontFamily: string;
  theme: string;
  noImages: boolean;
  highContrast: boolean;
  cursorType: string;
  linksVisibility: string;
}

const AccessibilityPanel = () => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    fontSize: 1,
    fontFamily: "'Roboto', sans-serif",
    theme: 'default',
    noImages: false,
    highContrast: false,
    cursorType: 'default',
    linksVisibility: 'normal'
  });

  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const savedSettings = localStorage.getItem('accessibilitySettings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(parsed);
        applySettings(parsed);
      } catch (e) {
        console.error("Error parsing accessibility settings", e);
      }
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('accessibilitySettings', JSON.stringify(settings));
      applySettings(settings);
    }
  }, [settings, isMounted]);

  const applySettings = (settings: AccessibilitySettings) => {
    if (typeof document !== 'undefined') {
      document.documentElement.style.fontSize = `${settings.fontSize}rem`;
      document.documentElement.style.setProperty('font-family', settings.fontFamily, 'important');
      document.body.style.setProperty('font-family', settings.fontFamily, 'important');

      document.body.className = document.body.className
        .split(' ')
        .filter(cls => !['dark-theme', 'high-contrast', 'no-images', 'no-links', 'highlight-links'].includes(cls))
        .join(' ');

      if (settings.theme === 'dark') document.body.classList.add('dark-theme');
      if (settings.highContrast) document.body.classList.add('high-contrast');
      if (settings.noImages) {
        document.body.classList.add('no-images');
        const images = document.querySelectorAll('img');
        images.forEach(img => {
          if (!img.parentElement?.querySelector('.image-placeholder')) {
            const placeholder = document.createElement('div');
            placeholder.className = 'image-placeholder';
            placeholder.textContent = `Imagen: ${img.alt || 'Sin descripción'}`;
            img.parentElement?.insertBefore(placeholder, img);
          }
        });
      } else {
        document.querySelectorAll('.image-placeholder').forEach(el => el.remove());
      }

      if (settings.linksVisibility === 'hidden') {
        document.body.classList.add('no-links');
      } else if (settings.linksVisibility === 'highlighted') {
        document.body.classList.add('highlight-links');
      }

      if (settings.cursorType === 'large') {
        document.body.style.cursor = 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\' viewport=\'0 0 100 100\' style=\'fill:black;font-size:24px;\'><text y=\'50%\'>↖</text></svg>") 16 0, auto';
      } else {
        document.body.style.cursor = 'default';
      }
    }
  };

  const togglePanel = () => {
    setIsOpen(prev => {
      const newState = !prev;
      if (!newState) {
        const floatBtn = document.querySelector('.accessibility-float-btn') as HTMLElement;
        floatBtn?.focus();
      } else {
        setTimeout(() => {
          const panel = document.querySelector('#accessibility-panel-title') as HTMLElement;
          panel?.focus();
        }, 100);
      }
      return newState;
    });
  };

  const handleFontSizeChange = (increase: boolean) => {
    const newSize = increase
      ? Math.min(settings.fontSize + 0.25, 3)
      : Math.max(settings.fontSize - 0.25, 0.33);
    setSettings({ ...settings, fontSize: newSize });
  };

  const handleFontChange = (font: string) => setSettings({ ...settings, fontFamily: font });
  const handleThemeChange = (theme: string) => setSettings({ ...settings, theme });
  const toggleImages = () => setSettings({ ...settings, noImages: !settings.noImages });
  const toggleContrast = () => setSettings({ ...settings, highContrast: !settings.highContrast });
  const handleCursorChange = (cursor: string) => setSettings({ ...settings, cursorType: cursor });
  const handleLinksVisibilityChange = (visibility: string) => setSettings({ ...settings, linksVisibility: visibility });

  const resetSettings = () => {
    const defaultSettings: AccessibilitySettings = {
      fontSize: 1,
      fontFamily: "'Roboto', sans-serif",
      theme: 'default',
      noImages: false,
      highContrast: false,
      cursorType: 'default',
      linksVisibility: 'normal'
    };
    setSettings(defaultSettings);
    localStorage.removeItem('accessibilitySettings');
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        togglePanel();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  useEffect(() => {
    const handleShortcut = (e: KeyboardEvent) => {
      if (e.altKey && e.key.toLowerCase() === 'a') togglePanel();
    };
    document.addEventListener('keydown', handleShortcut);
    return () => document.removeEventListener('keydown', handleShortcut);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <button 
        className="accessibility-float-btn"
        onClick={togglePanel}
        aria-label="Abrir panel de opciones de accesibilidad"
        aria-expanded={isOpen}
        title="Opciones de Accesibilidad"
      >
        <i className="fas fa-universal-access" aria-hidden="true">A</i>
      </button>

      {isOpen && <div className="accessibility-backdrop" onClick={togglePanel} aria-hidden="true" />}

      <div
        className={`accessibility-panel ${isOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="accessibility-panel-title"
        aria-describedby="accessibility-panel-desc"
      >
        <h2 id="accessibility-panel-title" tabIndex={0}>
          <i className="fas fa-universal-access" aria-hidden="true"></i>
          Opciones de Accesibilidad
        </h2>
        <p id="accessibility-panel-desc" className="sr-only">
          Este panel contiene opciones para personalizar la experiencia visual y de navegación.
        </p>

        {/* Tamaño de texto */}
        <div className="accessibility-section">
          <h3><i className="fas fa-text-height" aria-hidden="true"></i> Tamaño de texto</h3>
          <div className="accessibility-controls">
            <button onClick={() => handleFontSizeChange(false)} aria-label="Disminuir tamaño de texto" disabled={settings.fontSize <= 0.33}>A-</button>
            <span aria-live="polite">{Math.round(settings.fontSize * 100)}%</span>
            <button onClick={() => handleFontSizeChange(true)} aria-label="Aumentar tamaño de texto" disabled={settings.fontSize >= 3}>A+</button>
          </div>
        </div>

        {/* Tipo de fuente */}
        <div className="accessibility-section">
          <h3><i className="fas fa-font" aria-hidden="true"></i> Tipo de fuente</h3>
          <select value={settings.fontFamily} onChange={(e) => handleFontChange(e.target.value)} className="font-selector" aria-label="Seleccionar tipo de fuente">
            <option value="'Roboto', sans-serif">Roboto</option>
            <option value="'Open Sans', sans-serif">Open Sans</option>
            <option value="Arial, sans-serif">Arial</option>
            <option value="'Merriweather', serif">Merriweather</option>
            <option value="'Times New Roman', serif">Times New Roman</option>
            <option value="'Comic Sans MS', cursive">Comic Sans MS</option>
          </select>
        </div>

        {/* Esquema de color */}
        <div className="accessibility-section">
          <h3><i className="fas fa-palette" aria-hidden="true"></i> Esquema de color</h3>
          <div className="theme-options">
            <button className={`theme-btn ${settings.theme === 'default' ? 'active' : ''}`} onClick={() => handleThemeChange('default')} aria-pressed={settings.theme === 'default'}>Claro</button>
            <button className={`theme-btn ${settings.theme === 'dark' ? 'active' : ''}`} onClick={() => handleThemeChange('dark')} aria-pressed={settings.theme === 'dark'}>Oscuro</button>
          </div>
        </div>

        {/* Opciones visuales */}
        <div className="accessibility-section">
          <h3><i className="fas fa-low-vision" aria-hidden="true"></i> Opciones visuales</h3>
          <div className="visual-options">
            <label><input type="checkbox" checked={settings.noImages} onChange={toggleImages} /> Ocultar imágenes</label>
            <label><input type="checkbox" checked={settings.highContrast} onChange={toggleContrast} /> Contraste alto</label>
          </div>
        </div>

        {/* Cursor */}
        <div className="accessibility-section">
          <h3><i className="fas fa-mouse-pointer" aria-hidden="true"></i> Cursor</h3>
          <div className="cursor-options">
            <button className={settings.cursorType === 'default' ? 'active' : ''} onClick={() => handleCursorChange('default')} aria-pressed={settings.cursorType === 'default'}>Normal</button>
            <button className={settings.cursorType === 'large' ? 'active' : ''} onClick={() => handleCursorChange('large')} aria-pressed={settings.cursorType === 'large'}>Grande</button>
          </div>
        </div>

        {/* Visibilidad de enlaces */}
        <div className="accessibility-section">
          <h3><i className="fas fa-link" aria-hidden="true"></i> Visibilidad de enlaces</h3>
          <div className="link-visibility-options">
            <button className={settings.linksVisibility === 'normal' ? 'active' : ''} onClick={() => handleLinksVisibilityChange('normal')} aria-pressed={settings.linksVisibility === 'normal'}>Normal</button>
            <button className={settings.linksVisibility === 'highlighted' ? 'active' : ''} onClick={() => handleLinksVisibilityChange('highlighted')} aria-pressed={settings.linksVisibility === 'highlighted'}>Resaltados</button>
            <button className={settings.linksVisibility === 'hidden' ? 'active' : ''} onClick={() => handleLinksVisibilityChange('hidden')} aria-pressed={settings.linksVisibility === 'hidden'}>Ocultos</button>
          </div>
        </div>

        {/* Botón de restablecer */}
        <div className="accessibility-section">
          <h3><i className="fas fa-sync-alt" aria-hidden="true"></i> Restablecer opciones</h3>
          <button onClick={resetSettings} className="reset-button" aria-label="Restablecer configuraciones de accesibilidad">Restablecer</button>
        </div>

        {/* Botón de cerrar */}
        <button className="close-btn" onClick={togglePanel} aria-label="Cerrar panel de accesibilidad">Cerrar</button>
      </div>
    </>
  );
};

export default AccessibilityPanel;