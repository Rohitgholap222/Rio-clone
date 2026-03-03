import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const socialLinks = [
    { icon: Facebook, url: 'https://www.facebook.com/RioIDS.India#' },
    { icon: Instagram, url: 'https://www.instagram.com/rioids/' },
    { icon: Linkedin, url: 'https://www.linkedin.com/' },
    { icon: Twitter, url: 'https://x.com/RioIDS_In/' }
];

const Footer: React.FC = () => {
    return (
        <footer id="contact" className="bg-[#f8f9fa] pt-24 pb-12 overflow-hidden relative">
            <div className="container">
                {/* Logo Section */}
                <div className="flex flex-col items-center mb-16">
                    <div className="flex items-center mb-10">
                        <span className="text-4xl font-extrabold logo-text">RIO</span>
                        <div className="ml-2 border-l border-gray-300 pl-2 leading-tight text-left">
                            <span className="block text-[11px] font-bold tracking-widest text-[#5e5e5e]">INTERNATIONAL</span>
                            <span className="block text-[11px] font-bold tracking-widest text-[#5e5e5e]">DESIGN STUDIO</span>
                        </div>
                    </div>
                    <h2 className="text-2xl font-extrabold text-rio-dark tracking-wider">GET IN TOUCH</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 text-center">
                    {/* USA Office 1 */}
                    <div className="flex flex-col items-center">
                        <div className="mb-6 w-12 h-8 shadow-sm overflow-hidden rounded-sm">
                            <img src="https://flagcdn.com/w80/us.png" alt="USA Flag" className="w-full h-full object-cover" />
                        </div>
                        <p className="text-[14px] leading-relaxed text-[#7a7a7a] mb-8 max-w-[250px]">
                            4565 Misty Meades drive Marietta, ga 30066 USA
                        </p>
                        <div className="flex flex-col space-y-4">
                            <a href="mailto:micheal@rioids.com" className="flex items-center justify-center space-x-2 text-[14px] font-bold text-[#4c84ff] hover:text-rio-pink transition-colors">
                                <Mail size={16} /> <span>micheal@rioids.com</span>
                            </a>
                            <a href="tel:+18324653333" className="flex items-center justify-center space-x-2 text-[14px] font-bold text-[#4c84ff] hover:text-rio-pink transition-colors">
                                <Phone size={16} /> <span>+1 (832) 465-3333</span>
                            </a>
                        </div>
                    </div>

                    {/* India Office */}
                    <div className="flex flex-col items-center translate-y-[-10px]">
                        <div className="mb-6 w-12 h-8 shadow-sm overflow-hidden rounded-sm">
                            <img src="https://flagcdn.com/w80/in.png" alt="India Flag" className="w-full h-full object-cover" />
                        </div>
                        <p className="text-[14px] leading-relaxed text-[#7a7a7a] mb-8 max-w-[280px] font-medium">
                            Office No.703, The Cosmopolis Building, Kharadi - Hadapsar Bypass Rd, opposite SEASONS MALL, Magarpatta, Hadapsar, Pune, Maharashtra 411028
                        </p>
                        <div className="flex flex-col space-y-4">
                            <a href="mailto:sales@rioids.com" className="flex items-center justify-center space-x-2 text-[14px] font-bold text-[#4c84ff] hover:text-rio-pink transition-colors">
                                <Mail size={16} /> <span>sales@rioids.com</span>
                            </a>
                            <a href="tel:+918484818160" className="flex items-center justify-center space-x-2 text-[14px] font-bold text-[#4c84ff] hover:text-rio-pink transition-colors">
                                <Phone size={16} /> <span>+91 8484818160</span>
                            </a>
                        </div>
                    </div>

                    {/* USA Office 2 */}
                    <div className="flex flex-col items-center">
                        <div className="mb-6 w-12 h-8 shadow-sm overflow-hidden rounded-sm">
                            <img src="https://flagcdn.com/w80/us.png" alt="USA Flag" className="w-full h-full object-cover" />
                        </div>
                        <p className="text-[14px] leading-relaxed text-[#7a7a7a] mb-8 max-w-[250px]">
                            1301 Lofts Way #3407 Dalton, ga 30720
                        </p>
                        <div className="flex flex-col space-y-4">
                            <a href="mailto:micheal@rioids.com" className="flex items-center justify-center space-x-2 text-[14px] font-bold text-[#4c84ff] hover:text-rio-pink transition-colors">
                                <Mail size={16} /> <span>micheal@rioids.com</span>
                            </a>
                            <a href="tel:+18324653333" className="flex items-center justify-center space-x-2 text-[14px] font-bold text-[#4c84ff] hover:text-rio-pink transition-colors">
                                <Phone size={16} /> <span>+1 (832) 465-3333</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="text-center pt-10">
                    <h3 className="text-[16px] font-extrabold text-[#222222] mb-8 tracking-widest">FOLLOW US</h3>
                    <div className="flex justify-center space-x-6 mb-16">
                        {socialLinks.map((social, i) => (
                            <motion.a
                                key={i}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, backgroundColor: '#e93382', color: '#fff' }}
                                className="w-11 h-11 flex items-center justify-center bg-[#a1c4fd]/30 rounded-full text-[#4a90e2] transition-all duration-300"
                            >
                                <social.icon size={18} fill="currentColor" className="opacity-80" />
                            </motion.a>
                        ))}
                    </div>
                    <div className="border-t border-gray-100 pt-8">
                        <p className="text-[12px] font-medium text-[#aaaaaa]">© 2010-2023 Copyright Rio International Design Studio</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
