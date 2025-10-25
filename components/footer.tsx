// components/footer.tsx
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-teal-900 text-teal-100 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <h3 className="font-bold text-white text-xl mb-3">SOA Soda Maker S.A.S</h3>
          <p className="text-sm">If you have water, you have soda.</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" aria-label="Instagram" className="hover:text-white">
              <Instagram size={24} />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-white">
              <Facebook size={24} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-white text-xl mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center space-x-2">
              <MapPin size={16} />
              <span>Medellín, Colombia</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail size={16} />
              <a href="mailto:info@soasodamaker.com" className="hover:text-white">
                info@soasodamaker.com
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <Phone size={16} />
              <a href="tel:+573001234567" className="hover:text-white">
                +57 300 123 4567
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-white text-xl mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="hover:text-white">Warranty Policy</Link></li>
            <li><Link href="#" className="hover:text-white">Terms of Service</Link></li>
            <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
          </ul>
          <h4 className="font-semibold text-white mt-4 mb-2">Secure Payments</h4>
          <p className="text-xs">Visa, Mastercard, Amex, PSE (via Wompi)</p>
        </div>

      </div>
      <div className="border-t border-teal-700 mt-8 pt-8 text-center text-sm">
        <p>© {new Date().getFullYear()} SOA Soda Maker. All rights reserved.</p>
      </div>
    </footer>
  );
}
