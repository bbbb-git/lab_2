import { useEffect, useState } from 'react';

function Footer() {
  const [sysInfo, setSysInfo] = useState(null);

  useEffect(() => {
    const info = {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language,
      screen: `${screen.width}×${screen.height}`,
    };

    localStorage.setItem('sysInfo', JSON.stringify(info));
    setSysInfo(info);
  }, []);

  return (
    <footer className="bg-gradient-to-r from-violet-500 to-purple-600 text-white text-center py-6 px-6 rounded-t-3xl shadow-lg mt-6">
      <p className="text-sm opacity-75">© 2026 Глинська Ярина</p>
      {sysInfo && (
        <div className="text-xs opacity-60 mt-3 space-y-1">
          <p>Браузер: {sysInfo.userAgent}</p>
          <p>Платформа: {sysInfo.platform}</p>
          <p>Мова: {sysInfo.language}</p>
          <p>Екран: {sysInfo.screen}</p>
        </div>
      )}
    </footer>
  );
}

export default Footer;