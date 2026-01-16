import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappUrl =
    "https://wa.me/919676728330?text=Hi,%20I'm%20interested%20in%20EduSmartHub%20for%20my%20school";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse Animation Ring */}
      <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-30" />
      
      {/* Button */}
      <div className="relative w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group-hover:bg-[#128C7E]">
        <MessageCircle className="w-8 h-8 text-white" />
      </div>

      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-foreground text-background text-sm font-medium px-4 py-2 rounded-lg whitespace-nowrap shadow-lg">
          Chat with us on WhatsApp
          <div className="absolute top-full right-6 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-foreground" />
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
