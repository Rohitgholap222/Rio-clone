import { motion } from 'framer-motion';
import React from 'react';

const Testimonials: React.FC = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative z-10"
                    >
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-rio-text mb-4">WHAT PEOPLE SAYS</h2>
                        <div className="w-20 h-1 bg-rio-pink"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Organic Blob Background */}
                        <div className="absolute inset-0 bg-linear-to-r from-rio-pink to-[#FF9800] opacity-80 blur-2xl rounded-full scale-110 pointer-events-none transform -rotate-12 translate-x-10"></div>

                        <div className="relative z-10 p-12 lg:p-16 bg-linear-to-br from-rio-pink to-[#FF9800] rounded-[60px] text-white shadow-2xl">
                            <p className="text-xl italic leading-relaxed mb-10">
                                "As a premium website design company, This company ensures the best quality website design to help client business succeed."
                            </p>
                            <div>
                                <h4 className="text-xl font-bold">Natasha, Manager</h4>
                                <p className="text-white/80">Business Development Spike Consulting</p>
                            </div>
                        </div>

                        {/* Floating Mini Blob */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-10 right-10 w-24 h-24 bg-rio-purple rounded-full mix-blend-multiply opacity-40 blur-lg"
                        ></motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
