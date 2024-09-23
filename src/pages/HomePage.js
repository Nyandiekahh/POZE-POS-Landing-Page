import React, { useState, useEffect } from 'react';
import './HomePage.css';
import { FaCheckCircle, FaChartLine, FaUsers, FaShoppingCart, FaRegHeart, FaCog, FaMobileAlt, FaLock, FaCloudUploadAlt, FaHeadset } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const HomePage = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const [salesCount, setSalesCount] = useState(0);
    const [usersCount, setUsersCount] = useState(0);
    const [revenueCount, setRevenueCount] = useState(0);

    useEffect(() => {
        const salesInterval = setInterval(() => {
            setSalesCount(prevCount => (prevCount < 500) ? prevCount + 1 : prevCount);
        }, 20);

        const usersInterval = setInterval(() => {
            setUsersCount(prevCount => (prevCount < 5000) ? prevCount + 5 : prevCount);
        }, 10);

        const revenueInterval = setInterval(() => {
            setRevenueCount(prevCount => (prevCount < 1000000) ? prevCount + 1000 : prevCount);
        }, 5);

        return () => {
            clearInterval(salesInterval);
            clearInterval(usersInterval);
            clearInterval(revenueInterval);
        };
    }, []);

    const testimonials = [
        {
            text: "POZE POS has transformed our operations. We saw a 25% increase in sales after implementing the system!",
            author: "Jane Doe, Owner of Retail Store"
        },
        {
            text: "The customer support is fantastic! They helped us every step of the way during setup.",
            author: "John Smith, Restaurant Manager"
        },
        {
            text: "I can't imagine running my business without POZE POS now. It's intuitive, powerful, and constantly improving.",
            author: "Alice Johnson, Boutique Owner"
        },
        {
            text: "The real-time analytics have given us insights we never had before. It's like having a business consultant on-demand!",
            author: "Robert Brown, Cafe Chain Manager"
        }
    ];

    const features = [
        { icon: <FaChartLine />, title: "Real-Time Sales Tracking", description: "Monitor your sales performance with real-time analytics. Get insights into daily transactions, customer preferences, and trends to make informed decisions." },
        { icon: <FaUsers />, title: "User-Friendly Interface", description: "Designed for ease of use, our interface reduces training time by over 30%. Navigate with confidence, allowing your staff to focus on customer service." },
        { icon: <FaShoppingCart />, title: "Inventory Management", description: "Effortlessly manage your stock levels and automate inventory updates. Get notified for low stock and streamline your ordering process." },
        { icon: <FaRegHeart />, title: "Customer Relationship Management", description: "Build customer loyalty with our CRM tools. Analyze customer data and tailor your marketing strategies to enhance customer satisfaction." },
        { icon: <FaCog />, title: "Customizable Workflows", description: "Tailor the system to your specific business needs with customizable workflows, reports, and dashboards." },
        { icon: <FaMobileAlt />, title: "Mobile Compatibility", description: "Access your POS system on-the-go with our mobile app. Perfect for pop-up shops or taking orders tableside." },
        { icon: <FaLock />, title: "Advanced Security", description: "Protect your business with state-of-the-art encryption and multi-factor authentication. Your data's safety is our top priority." },
        { icon: <FaCloudUploadAlt />, title: "Cloud-Based System", description: "Never worry about losing your data. Our cloud-based system ensures your information is always backed up and accessible." },
        { icon: <FaHeadset />, title: "24/7 Support", description: "Our dedicated support team is always ready to assist you. Get help anytime, anywhere with our round-the-clock customer service." }
    ];

    return (
        <div className="homepage">
            <header className="hero-section">
                <div className="hero-content">
                    <motion.h1 
                        className="hero-title"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Welcome to POZE POS System
                    </motion.h1>
                    <motion.p 
                        className="hero-subtitle"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Streamline Your Business Operations
                    </motion.p>
                    <motion.button 
                        className="cta-button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Get Started
                    </motion.button>
                </div>
                <div className="hero-stats">
                    <motion.div 
                        className="stat-card"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3>{salesCount.toLocaleString()}+</h3>
                        <p>Daily Transactions</p>
                    </motion.div>
                    <motion.div 
                        className="stat-card"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3>{usersCount.toLocaleString()}+</h3>
                        <p>Happy Users</p>
                    </motion.div>
                    <motion.div 
                        className="stat-card"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <h3>${(revenueCount / 1000000).toFixed(2)}M+</h3>
                        <p>Revenue Processed</p>
                    </motion.div>
                </div>
            </header>

            <section className="features-section">
                <h2 className="section-title">Key Features</h2>
                <div className="features">
                    {features.map((feature, index) => (
                        <motion.div 
                            key={index}
                            className="feature-card"
                            whileHover={{ scale: 1.05, boxShadow: "0 8px 16px rgba(0,0,0,0.2)" }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="feature-icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="about-section">
                <h2 className="section-title">About POZE POS</h2>
                <motion.div 
                    className="about-content"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p>
                        POZE POS is designed for small to medium-sized businesses looking to enhance their operational efficiency. With a mission to empower business owners, we provide cutting-edge technology that simplifies complex processes.
                    </p>
                    <p>
                        With over <strong>10 years of experience</strong> in the retail industry, we understand your challenges. Our POS system is affordable, scalable, and tailored to your business needs.
                    </p>
                    <p>Join our community of over <strong>5,000 satisfied users</strong> who trust POZE POS to streamline their business operations.</p>
                </motion.div>
            </section>

            <section className="how-it-works-section">
                <h2 className="section-title">How It Works</h2>
                <div className="how-it-works">
                    {['Sign Up', 'Set Up Your Store', 'Start Selling', 'Analyze & Optimize'].map((step, index) => (
                        <motion.div 
                            key={index}
                            className="step"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className="step-number">{index + 1}</div>
                            <h3>{step}</h3>
                            <p>{getStepDescription(index)}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="testimonial-section">
                <h2 className="section-title">What Our Clients Say</h2>
                <div className="testimonials">
                    <AnimatePresence>
                        <motion.blockquote 
                            key={activeTestimonial}
                            className="testimonial"
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                        >
                            <p>"{testimonials[activeTestimonial].text}"</p>
                            <footer>- {testimonials[activeTestimonial].author}</footer>
                        </motion.blockquote>
                    </AnimatePresence>
                    <div className="testimonial-nav">
                        {testimonials.map((_, index) => (
                            <button 
                                key={index} 
                                className={`nav-dot ${index === activeTestimonial ? 'active' : ''}`}
                                onClick={() => setActiveTestimonial(index)}
                            ></button>
                        ))}
                    </div>
                </div>
            </section>

            <section className="pricing-section">
                <h2 className="section-title">Flexible Pricing Plans</h2>
                <div className="pricing-grid">
                    {['Basic', 'Pro', 'Enterprise'].map((plan, index) => (
                        <motion.div 
                            key={index}
                            className={`pricing-card ${plan === 'Pro' ? 'featured' : ''}`}
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <h3>{plan}</h3>
                            <p className="price">${getPlanPrice(plan)}<span>/month</span></p>
                            <ul>
                                {getPlanFeatures(plan).map((feature, idx) => (
                                    <li key={idx}><FaCheckCircle /> {feature}</li>
                                ))}
                            </ul>
                            <button className="plan-cta">Choose Plan</button>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="cta-section">
                <h2>Ready to Revolutionize Your Business?</h2>
                <p>Join thousands of satisfied businesses and experience the power of POZE POS today.</p>
                <motion.button 
                    className="cta-button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Start Your Free 30-Day Trial
                </motion.button>
                <p className="no-credit-card">No credit card required. Cancel anytime.</p>
            </section>

            
        </div>
    );
};

function getStepDescription(index) {
    const descriptions = [
        "Join the POZE community by creating an account in just a few minutes. Experience the simplicity of our onboarding process.",
        "Customize your POS system to fit your unique business model. Add products, set prices, and configure your dashboard for optimal efficiency.",
        "Leverage our intuitive interface to manage sales, track inventory, and engage with customers effectively. Watch your business thrive with POZE.",
        "Utilize our powerful analytics tools to gain insights, refine your operations, and boost sales performance. Grow your business with data-driven decisions."
    ];
    return descriptions[index];
}

function getPlanPrice(plan) {
    switch (plan) {
        case 'Basic': return '49';
        case 'Pro': return '99';
        case 'Enterprise': return '249';
        default: return '';
    }
}

function getPlanFeatures(plan) {
    const basicFeatures = [
        "1 POS Terminal",
        "Basic Reporting",
        "Cloud Backup",
        "Email Support",
        "Inventory Management"
    ];

    const proFeatures = [
        "3 POS Terminals",
        "Advanced Reporting",
        "Cloud Backup",
        "24/7 Support",
        "Inventory Management",
        "Customer Loyalty Program",
        "Employee Management"
    ];

    const enterpriseFeatures = [
        "Unlimited POS Terminals",
        "Custom Reporting",
        "Cloud Backup",
        "24/7 Priority Support",
        "Advanced Inventory Management",
        "Customer Loyalty Program",
        "Employee Management",
        "API Access",
        "Dedicated Account Manager"
    ];

    switch (plan) {
        case 'Basic': return basicFeatures;
        case 'Pro': return proFeatures;
        case 'Enterprise': return enterpriseFeatures;
        default: return [];
    }
}

export default HomePage;