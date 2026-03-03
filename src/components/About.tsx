import { motion, useScroll, useTransform } from 'framer-motion';
import React from 'react';

const About: React.FC = () => {
    const { scrollYProgress } = useScroll();
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

    return (
        <section id="about" className="relative py-32 bg-white overflow-hidden">
            {/* Creative Background Shapes */}
            <motion.div style={{ y: y1 }} className="absolute top-1/4 -right-20 w-80 h-80 bg-rio-pink/5 rounded-full blur-3xl z-0" />
            <motion.div style={{ y: y2 }} className="absolute bottom-1/4 -left-20 w-96 h-96 bg-rio-purple/5 rounded-full blur-3xl z-0" />

            <div className="container relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    {/* Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative"
                    >
                        <div className="rounded-[60px] overflow-hidden shadow-[0_50px_100px_-30px_rgba(0,0,0,0.15)] group relative">
                            <div className="absolute inset-0 bg-rio-purple/20 group-hover:bg-transparent transition-all duration-700 z-10"></div>
                            <img
                                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200"
                                alt="Studio Environment"
                                className="w-full h-[500px] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                            />
                        </div>

                        {/* Floating Experience Badge */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-10 -right-10 bg-white p-10 rounded-[40px] shadow-2xl border border-gray-50 flex flex-col items-center"
                        >
                            <span className="text-6xl font-black text-rio-purple">13+</span>
                            <span className="text-[10px] font-bold text-gray-400 tracking-[0.3em] uppercase mt-2 text-center">Years of <br /> Excellence</span>
                        </motion.div>
                    </motion.div>

                    {/* Content Side */}
                    <div className="lg:pl-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="inline-block px-4 py-1 rounded-full bg-rio-pink/10 text-rio-pink text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
                                The Studio Identity
                            </span>
                            <h2 className="text-4xl font-black text-rio-dark leading-tight mb-8 tracking-tighter">
                                Whatever you do, <br />
                                <span className="gradient-text">do it well.</span>
                            </h2>
                            <p className="text-lg text-gray-500 mb-10 leading-relaxed font-medium">
                                Rio is a premier digital strategy and design agency. We don't just build websites; we architect growth engines that amplify your brand's voice and dominate market share.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <div className="w-12 h-1 bg-rio-purple mb-4"></div>
                                <h4 className="text-lg font-bold text-rio-dark mb-3">Visionary Design</h4>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    We decode human behavior to create interfaces that aren't just seen, but felt.
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <div className="w-12 h-1 bg-rio-magenta mb-4"></div>
                                <h4 className="text-lg font-bold text-rio-dark mb-3">Technical Mastery</h4>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    Our stack is built for performance, scalability, and seamless user transitions.
                                </p>
                            </motion.div>
                        </div>

                        <motion.button
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="mt-12 text-sm font-black text-rio-dark tracking-widest flex items-center group"
                        >
                            LEARN MORE ABOUT OUR ETHOS
                            <span className="ml-3 group-hover:translate-x-2 transition-transform">→</span>
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
