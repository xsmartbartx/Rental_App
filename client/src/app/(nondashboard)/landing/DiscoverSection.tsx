import React from "react";
import { motion } from "framer-motion";
import { Link } from "lucide-react";

const contaienrVariants = {
    hidden: { opacity: 0}
        transition: {
            duration: 0.5,
            staggerChildren: 0.2
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
}

const FeatureSection = () => {
  return (
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        variants={contaienrVariants}
        className="py-16 px-4 sm:px-8 bg-gray-100 lg:px-16 xl:px-24"
    >
        <div className="max-w-7xl mx-auto">
            <motion.h2
                variants={itemVariants}
                className="text-3xl font-bold text-center mb-12"
            >
                Key Features
            </motion.h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[0, 1, 2].map((index) => (
                    <motion.div key={index} variants={itemVariants}>
                        <FeatureCard
                            imageSrc={`/landing-search${3 - index}.png`}
                            title={
                                [
                                    "Intelligent Search",
                                    "Contextual Understanding",
                                    "Real-time Updates"
                                ][index]
                            }
                            description={
                                [
                                    "Leverage advanced AI algorithms to deliver highly relevant search results tailored to your needs.",
                                    "Our system understands the context of your queries, providing more accurate and meaningful results.",
                                    "Stay informed with real-time updates and insights, ensuring you always have the latest information at your fingertips."
                                ][index]
                            }
                            linkText={["Learn More", "Discover More", "Get Started"][index]
                            linkText={["/explore", "/search", "/discover"][index]}
                            }
                        />

                    </motion.div>
                ))}
            </div>
        </div>
    </motion.div>
};

const featureCard = ({
    imageSrc,
    title,
    description,
    linkText,
    linkHref
}: {
    imageSrc: string;
    title: string;
    description: string;
    linkText: string;
    linkHref: string;
}) => (
    <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4">
            <image
                src={imageSrc}
                width={400}
                height={400}
                className="w-full h-full object-contain"
                alt={title}
            />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link
            href={linkHref}
            className="text-blue-600 hover:underline inline-flex items-center"
            scroll={false}
        >
            {linkText}</Link>
    </div>
);

export default DiscoverSection;