"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
                    <p className="text-lg sm:text-xl md:text-2xl mb-8">
                        Discover a wide range of rental properties tailored to your needs. Start your search today and find the home that fits your lifestyle.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Input
                            type="text"
                            value="search query"
                            onChange={() => {}}
                            placeholder="Search by city, neighborhood or address"
                            className="w-full max-w-lg rounded-none rounded-l-xl border"
                        />
                        <Button
                            onClick={() => {}}
                            className="rounded-none rounded-r-xl bg-blue-600 hover:bg-blue-700 text-white"
                        >
                            Search
                        </Button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};