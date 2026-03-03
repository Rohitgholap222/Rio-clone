import { motion } from 'framer-motion';
import React from 'react';

const projects = [
    {
        title: 'Flexisales',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800',
        color: 'from-[#d49cf0] to-[#9c78f1]',
        category: 'Web Development'
    },
    {
        title: 'Shraddha Hospitals',
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800',
        color: 'from-[#6ee7b7] to-[#3b82f6]',
        category: 'Healthcare App'
    },
    {
        title: 'Spike Consulting',
        image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=800',
        color: 'from-[#fbcfe8] to-[#db2777]',
        category: 'Digital Branding'
    },
    {
        title: 'Tathvaa',
        image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800',
        color: 'from-[#fdba74] to-[#ea580c]',
        category: 'Marketing Platform'
    }
];

const Works: React.FC = () => {
    return (
        <section id="works" className="bg-white">
            {/* Page Header - Creative Background */}
            <div className="relative pt-40 pb-24 text-center overflow-hidden">
                {/* Visual Blobs matching screenshot */}
                <div className="absolute top-0 left-0 w-1/2 h-full bg-rio-purple/10 rounded-br-[400px] -z-10 blur-3xl"></div>
                <div className="absolute top-0 right-0 w-1/4 h-full bg-rio-pink/5 -z-10"></div>

                <div className="container relative">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-5xl font-[950] text-rio-dark mb-6 tracking-tighter"
                    >
                        WORKS
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 font-semibold text-xl italic"
                    >
                        Our success is measured by results
                    </motion.p>
                    <div className="w-16 h-[2.5px] bg-rio-dark mx-auto mt-8 opacity-20"></div>
                </div>
            </div>

            {/* Grid Section */}
            <div className="container pb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            {/* Card Top - The Visual Presentation */}
                            <div className="relative aspect-video rounded-[48px] overflow-hidden mb-8 transition-all duration-700 group-hover:shadow-[0_45px_100px_-25px_rgba(0,0,0,0.15)] group-hover:-translate-y-3">
                                {/* Dynamic Gradient Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90 transition-opacity duration-500`}></div>

                                <div className="absolute inset-0 flex items-center justify-center p-16">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] transform group-hover:scale-[1.03] transition-transform duration-700"
                                    />
                                </div>
                            </div>

                            {/* Card Bottom - Modern Info Cluster */}
                            <div className="text-center px-4">
                                <h3 className="text-2xl font-[900] text-rio-dark mb-2 tracking-tight transition-colors group-hover:text-rio-purple">{project.title}</h3>
                                <p className="text-[12px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-8">{project.category}</p>

                                <div className="inline-block relative">
                                    <button className={`px-12 py-3.5 rounded-full bg-gradient-to-r ${project.color} text-white font-extrabold text-xs tracking-[0.2em] shadow-xl group-hover:shadow-2xl transition-all active:scale-95`}>
                                        VIEW PROJECT
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* CTA Section - The Closing Statement */}
            <div className="py-32 bg-[#fafafa] relative overflow-hidden border-t border-gray-100">
                <div className="container relative z-10 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl font-[900] text-rio-dark mb-12 tracking-tighter"
                    >
                        LET'S WORK <span className="gradient-text">TOGETHER</span>
                    </motion.h2>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-16 py-5 bg-rio-dark text-white font-bold rounded-full hover:bg-rio-pink transition-all tracking-[0.2em] text-xs shadow-2xl"
                    >
                        MAIL US NOW
                    </motion.button>
                </div>

                {/* Decorative background logo */}
                <div className="absolute bottom-[-10%] left-[-5%] text-[15rem] font-black text-rio-dark/5 select-none -z-0">RIO</div>
            </div>
        </section>
    );
};

export default Works;
