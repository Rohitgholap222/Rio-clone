import { motion } from 'framer-motion';
import React from 'react';

const services = [
    {
        title: 'Development',
        items: [
            'PHP DEVELOPMENT',
            'MOBILE APP DEVELOPMENT',
            'LARAVEL DEVELOPMENT',
            'WORDPRESS DEVELOPMENT',
            'WEB AND APPLICATION'
        ],
        featured: false,
        icon: '⚡'
    },
    {
        title: 'Design',
        items: [
            'GRAPHIC DESIGNING',
            'WEB DESIGNING',
            'PUBLICATION DESIGN',
            'PRESENTATION DESIGN',
            'SOCIAL MEDIA CREATIVES'
        ],
        featured: true,
        icon: '🎨'
    },
    {
        title: 'Mobile App',
        items: [
            'ANDROID APPS',
            'IOS SOLUTIONS',
            'CROSS PLATFORM',
            'PROGRESSIVE WEB APPS',
            'VIRTUAL REALITY'
        ],
        featured: false,
        icon: '📱'
    }
];

const Services: React.FC = () => {
    return (
        <section id="services" className="py-32 bg-[#fafafa]">
            <div className="container text-center mb-20">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-rio-magenta font-black tracking-[0.4em] text-[10px] uppercase"
                >
                    Our Expertise
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl font-black text-rio-dark mt-4 tracking-tighter"
                >
                    Solutions that <span className="gradient-text">scale.</span>
                </motion.h2>
            </div>

            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: index * 0.15 }}
                            className={`relative p-12 rounded-[50px] transition-all duration-500 hover:-translate-y-4 group ${service.featured
                                ? "bg-rio-gradient text-white shadow-[0_40px_100px_-20px_rgba(182,53,140,0.3)]"
                                : "bg-white text-rio-dark shadow-[0_40px_100px_-30px_rgba(0,0,0,0.05)] hover:shadow-2xl border border-gray-50"
                                }`}
                        >
                            <div className="text-4xl mb-8 transform group-hover:scale-110 transition-transform duration-500">{service.icon}</div>

                            <h3 className={`text-xl font-black mb-10 tracking-tight pb-4 border-b ${service.featured ? 'border-white/20' : 'border-gray-100'
                                }`}>
                                {service.title}
                            </h3>

                            <ul className="space-y-6">
                                {service.items.map((item, idx) => (
                                    <li key={idx} className="flex items-center group/item text-[12px] font-bold tracking-widest leading-none">
                                        <span className={`w-1.5 h-1.5 rounded-full mr-4 transition-all duration-300 group-hover/item:w-4 ${service.featured ? 'bg-white' : 'bg-rio-pink'
                                            }`}></span>
                                        <span className={service.featured ? 'text-white/80' : 'text-gray-400'}>
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-12 overflow-hidden">
                                <motion.button
                                    whileTap={{ scale: 0.95 }}
                                    className={`text-[12px] font-black uppercase tracking-[0.2em] transform transition-transform duration-300 group-hover:translate-x-2 ${service.featured ? 'text-white' : 'text-rio-purple'
                                        }`}
                                >
                                    Explore Service →
                                </motion.button>
                            </div>

                            {/* Decorative element for cards */}
                            <div className={`absolute bottom-8 right-8 text-8xl font-black opacity-[0.03] select-none z-0 ${service.featured ? 'text-white' : 'text-rio-dark'
                                }`}>
                                0{index + 1}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
