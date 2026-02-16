"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
    return (
        <div className="relative h-screen bg-cover bg-center">
            <image
                src="/landing-splash.jpg"
                alt="Hero Background"
                fill
                className="object-cover object-center"
                priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-white max-w-2xl"
            >
                <div className="amx-w-4xl mx-auto px-16 sm:px-12">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                        Find Your Perfect Rental Home
                    </h1>
                </div>
            </motion.div>
        </div>
    );
};