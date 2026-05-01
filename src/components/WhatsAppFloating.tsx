import React, { useState } from 'react';
import { MessageCircle, X, MessageSquare, Phone } from 'lucide-react';

const WhatsAppFloating: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contacts = [
    { name: 'Customer Support 1', phone: '917695940400' },
    { name: 'Customer Support 2', phone: '918667741994' }
  ];

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4">
      {/* Contact Options Menu */}
      <div className={`flex flex-col gap-3 transition-all duration-300 transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'}`}>
        {contacts.map((contact, index) => (
          <a
            key={index}
            href={`https://wa.me/${contact.phone}?text=Hi, I'm interested in Porko Elite Estates properties.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white hover:bg-gray-50 text-gray-900 px-5 py-3 rounded-2xl shadow-xl border border-gray-100 transition-all hover:scale-105 active:scale-95 group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 flex items-center justify-center shrink-0 group-hover:bg-[#25D366]/20 transition-colors">
              <MessageCircle className="w-5 h-5 text-[#25D366]" />
            </div>
            <div className="text-left pr-2">
              <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{contact.name}</div>
              <div className="text-xs font-bold text-gray-900">+{contact.phone.slice(0,2)} {contact.phone.slice(2,7)} {contact.phone.slice(7)}</div>
            </div>
          </a>
        ))}
      </div>

      {/* Main Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-2xl shadow-2xl flex items-center justify-center transition-all duration-500 hover:scale-110 active:scale-90 ${
          isOpen ? 'bg-gray-900 text-white' : 'bg-[#25D366] text-white animate-bounce-slow'
        }`}
        aria-label="Contact on WhatsApp"
      >
        {isOpen ? (
          <X className="w-8 h-8 animate-in zoom-in duration-300" />
        ) : (
          <svg 
            viewBox="0 0 24 24" 
            className="w-10 h-10 fill-current animate-in zoom-in duration-300"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.442-9.89 9.894-9.89 2.641 0 5.123 1.028 6.987 2.891a9.83 9.83 0 012.89 6.988c-.001 5.45-4.442 9.894-9.895 9.894m11.191-11.191c0-2.99-1.163-5.801-3.275-7.913a11.127 11.127 0 00-7.916-3.279c-6.155 0-11.16 5.003-11.163 11.16 0 1.968.513 3.89 1.486 5.589L1 23l5.705-1.498a11.11 11.11 0 00 5.452 1.432h.005c6.155 0 11.162-5.005 11.163-11.164" />
          </svg>
        )}
      </button>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}} />
    </div>
  );
};

export default WhatsAppFloating;
