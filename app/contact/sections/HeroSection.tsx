"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import { GridSection, GridContainer, GridCol } from "../../components/grid";
import Navbar from "../components/Navbar";
import MobileMenu from "../../components/MobileMenu";

export default function ContactHeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  
  const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_V2_SITE_KEY || '';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Check if grecaptcha is loaded
    if (typeof window === 'undefined' || !(window as any).grecaptcha) {
      alert('reCAPTCHA is still loading. Please wait a moment and try again.');
      return;
    }

    const recaptchaResponse = (window as any).grecaptcha.getResponse();
    
    if (!recaptchaResponse) {
      alert('Please complete the reCAPTCHA verification');
      return;
    }
    
    console.log('Form submitted:', formData);
    console.log('reCAPTCHA token:', recaptchaResponse);
  };

  useEffect(() => {
    // Define callback for when reCAPTCHA loads
    (window as any).onRecaptchaLoad = () => {
      console.log('reCAPTCHA loaded');
      setRecaptchaLoaded(true);
      
      // Explicitly render the reCAPTCHA widget
      if ((window as any).grecaptcha && document.getElementById('recaptcha-container')) {
        try {
          (window as any).grecaptcha.render('recaptcha-container', {
            'sitekey': process.env.NEXT_PUBLIC_RECAPTCHA_V2_SITE_KEY,
            'theme': 'dark',
            'size': 'compact'
          });
        } catch (error) {
          console.error('Error rendering reCAPTCHA:', error);
        }
      }
    };
  }, []);

  return (
    <>
      <Script
        src="https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit"
        strategy="lazyOnload"
      />

      {/* Mobile Layout */}
      <section className="lg:hidden bg-white">
        <Navbar onMenuClick={() => setIsMenuOpen(true)} />
        
        <div className="px-6 pt-24 pb-12">
          <div className="mb-8">
            <h3 className="text-xs font-medium text-gray-600 mb-2 uppercase tracking-wide">GET IN TOUCH</h3>
            <p className="text-sm text-gray-400">
              Fill in the contact form or call us at +30 2114018227 for information and immediate updates.
            </p>
          </div>

          <h1 className="text-2xl font-bold mb-6">
            Tell us about your business needs and your goals.
          </h1>

          <p className="text-sm text-gray-400 mb-8">
            Try the software platform, tools and services we are going to use. Get informed for your online features: expected number of visitors, leads, customers.
          </p>

          <div className="space-y-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full name *"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 bg-transparent text-sm focus:outline-none focus:border-gray-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Email *"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 bg-transparent text-sm focus:outline-none focus:border-gray-400"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone *"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 bg-transparent text-sm focus:outline-none focus:border-gray-400"
            />
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 bg-transparent text-sm focus:outline-none focus:border-gray-400"
            />
            <textarea
              name="message"
              placeholder="Message *"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 bg-transparent text-sm focus:outline-none focus:border-gray-400 resize-none"
            />
            <button
              onClick={handleSubmit}
              className="w-full py-3 text-white font-medium text-sm"
              style={{ backgroundColor: '#2B7856' }}
            >
              Send message
            </button>
          </div>
        </div>

        {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
      </section>

      {/* Desktop Grid Layout */}
      <div className="hidden lg:block">
        <Navbar onMenuClick={() => setIsMenuOpen(true)} />

        {/* Section 1: Header - includes tiny left & right columns */}
        <div className="relative w-full" style={{ backgroundColor: '#2B7856' }}>
          <div className="absolute left-0 top-0 bottom-0" style={{ width: '5.56%', backgroundColor: '#2B7856' }} />
          <div className="absolute right-0 top-0 bottom-0" style={{ width: '5.56%', backgroundColor: 'var(--brand-dark)' }} />
          
          <GridSection
            bgColor="bg-transparent"
            showLines={[true, false, false, false, true]}
            minHeight="140px"
          >
            <GridContainer>
              <GridCol 
                span="AB" 
                className="flex items-end pb-3 pl-5"
                style={{ backgroundColor: '#2B7856', minHeight: '140px' }}
              >
                <span className="text-white text-sm font-medium uppercase tracking-wide">GET IN TOUCH</span>
              </GridCol>
              <GridCol 
                span="CD" 
                className="flex items-end pb-8 pl-5 pr-8"
                style={{ backgroundColor: 'var(--brand-dark)', minHeight: '140px' }}
              >
                <p className="text-white text-sm leading-relaxed">
                  Fill in the contact form or call us at +30 2114018227 for information and immediate updates.
                </p>
              </GridCol>
            </GridContainer>
          </GridSection>
        </div>

        {/* Section 2: Name/Email/Phone/Company Inputs */}
        <div className="relative">
          <div className="absolute inset-0" style={{ backgroundColor: 'var(--brand-dark)' }} />
          <div className="absolute left-0 top-0 bottom-0" style={{ width: '5.56%', backgroundColor: '#2B7856' }} />
          
          <div className="absolute top-0 left-0 right-0 h-px bg-gray-400 opacity-30 z-20" />
          
          <GridSection
            bgColor="bg-transparent"
            showLines={[true, true, true, true, true]}
            minHeight="160px"
          >
            <GridContainer className="h-full">
              <GridCol 
                span="AB" 
                className="flex items-start pt-12 pl-5 pr-6"
                style={{ backgroundColor: '#2B7856', height: '160px' }}
              >
                <h1 className="text-white text-2xl font-bold leading-tight">
                  Tell us about your business needs and your goals.
                </h1>
              </GridCol>
              
              <GridCol 
                span="C" 
                className="flex flex-col"
                style={{ backgroundColor: 'var(--brand-dark)', height: '160px' }}
              >
                <div className="h-20 flex items-center border-b border-gray-400 border-opacity-30 border-r border-gray-400 border-opacity-30">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full name *"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full h-full px-5 bg-transparent text-white text-sm placeholder-gray-400 focus:outline-none"
                  />
                </div>
                <div className="h-20 flex items-center border-r border-gray-400 border-opacity-30">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full h-full px-5 bg-transparent text-white text-sm placeholder-gray-400 focus:outline-none"
                  />
                </div>
              </GridCol>

              <GridCol 
                span="D" 
                className="flex flex-col"
                style={{ backgroundColor: 'var(--brand-dark)', height: '160px' }}
              >
                <div className="h-20 flex items-center border-b border-gray-400 border-opacity-30">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone *"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full h-full px-5 bg-transparent text-white text-sm placeholder-gray-400 focus:outline-none"
                  />
                </div>
                <div className="h-20 flex items-center">
                  <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full h-full px-5 bg-transparent text-white text-sm placeholder-gray-400 focus:outline-none"
                  />
                </div>
              </GridCol>
            </GridContainer>
          </GridSection>

          <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-400 opacity-30 z-20" />
        </div>

        {/* Section 3: Message & Submit */}
        <div className="relative">
          <div className="absolute inset-0" style={{ backgroundColor: 'var(--brand-dark)' }} />
          <div className="absolute left-0 top-0 bottom-0" style={{ width: '5.56%', backgroundColor: '#2B7856' }} />
          
          <GridSection
            bgColor="bg-transparent"
            showLines={[true, true, true, true, true]}
            minHeight="280px"
          >
            <GridContainer className="h-full">
              <GridCol 
                span="AB" 
                className="flex items-start pt-12 pl-5 pr-6"
                style={{ backgroundColor: '#2B7856', height: '280px' }}
              >
                <p className="text-white text-sm leading-relaxed">
                  Try the software platform, tools and services we are going to use. Get informed for your online features: expected number of visitors, leads, customers.
                </p>
              </GridCol>
              
              <GridCol 
                span="CD" 
                className="flex flex-col"
                style={{ backgroundColor: 'var(--brand-dark)', height: '280px' }}
              >
                <div className="flex items-start pt-6" style={{ height: '140px' }}>
                  <textarea
                    name="message"
                    placeholder="Message *"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full h-full px-5 pt-2 bg-transparent text-white text-sm placeholder-gray-400 focus:outline-none resize-none"
                  />
                </div>

                <div className="w-full h-px bg-gray-400 opacity-30" />

                <div className="flex h-20">
                  <div className="w-1/2 h-20 flex items-center justify-center border-r border-gray-400 border-opacity-30">
                    <div 
                      id="recaptcha-container"
                    />
                  </div>

                  <div className="w-1/2 h-20 flex items-center justify-center">
                    <button
                      onClick={handleSubmit}
                      className="flex items-center gap-2 px-6 py-3 text-white font-medium text-sm transition-all hover:opacity-90"
                      style={{ backgroundColor: '#2B7856' }}
                    >
                      Send message
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </GridCol>
            </GridContainer>
          </GridSection>
        </div>

        {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
      </div>
    </>
  );
}