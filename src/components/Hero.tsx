import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const Hero: React.FC = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-white">
            {/* Dynamic Background Elements */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                    x: [0, 50, 0],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-rio-purple/5 rounded-full blur-[100px] pointer-events-none"
            />
            <motion.div
                animate={{
                    scale: [1.2, 1, 1.2],
                    x: [0, -30, 0],
                    y: [0, 40, 0],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-rio-pink/5 rounded-full blur-[80px] pointer-events-none"
            />

            <div className="container relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-center lg:text-left"
                    >
                        <motion.div variants={itemVariants} className="inline-block px-4 py-1.5 mb-6 rounded-full bg-rio-purple/5 text-rio-purple text-xs font-bold tracking-[0.2em] uppercase">
                            Premier Design Studio
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-6xl lg:text-[88px] font-[900] text-rio-dark leading-[1.05] mb-8 tracking-tighter"
                        >
                            Your Creative <br />
                            <span className="brush-stroke">Partner!</span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-xl text-gray-500 mb-10 leading-relaxed font-medium max-w-lg mx-auto lg:mx-0"
                        >
                            We craft digital experiences that transform ambitious brands into world-class market leaders.
                        </motion.p>


                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="relative lg:block"
                    >
                        {/* Main Illustration */}
                        <div className="relative z-10 w-full max-w-[600px] mx-auto">
                            <img
                                src="https://img.freepik.com/free-vector/creative-team-concept-illustration_114360-3743.jpg"
                                alt="Creative Partner"
                                className="w-full h-auto drop-shadow-2xl rounded-[40px]"
                            />




                        </div>

                        {/* Background Shape */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-rio-purple/5 rounded-full -z-10 blur-2xl"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
