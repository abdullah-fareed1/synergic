"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import { GridSection, GridContainer, GridCol } from "../../components/grid";
import Navbar from "../components/Navbar";
import MobileMenu from "../../components/MobileMenu";

interface FloatingInputProps {
  name: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  error?: boolean;
}

function FloatingInput({ name, label, type = "text", value, onChange, required = false, error = false }: FloatingInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const isActive = isFocused || value.length > 0;

  return (
    <div className="relative w-full h-full">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`w-full h-full px-0 lg:px-5 pt-4 bg-transparent text-white text-base lg:text-sm focus:outline-none peer ${error ? 'border-b-2 border-red-500' : ''}`}
      />
      <label
        className={`absolute left-0 lg:left-5 transition-all duration-200 pointer-events-none ${error ? 'text-red-400' : 'text-gray-400'}
          ${isActive 
            ? 'top-0 text-xs' 
            : 'top-1/2 -translate-y-1/2 text-base lg:text-sm'
          }`}
      >
        {label}{required && <span className="text-red-400 ml-0.5">*</span>}
      </label>
    </div>
  );
}

interface FloatingTextareaProps {
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  error?: boolean;
}

function FloatingTextarea({ name, label, value, onChange, required = false, error = false }: FloatingTextareaProps) {
  const [isFocused, setIsFocused] = useState(false);
  const isActive = isFocused || value.length > 0;

  return (
    <div className="relative w-full h-full">
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`w-full h-full px-0 lg:px-5 pt-6 bg-transparent text-white text-base lg:text-sm focus:outline-none resize-none peer ${error ? 'border-b-2 border-red-500' : ''}`}
      />
      <label
        className={`absolute left-0 lg:left-5 transition-all duration-200 pointer-events-none ${error ? 'text-red-400' : 'text-gray-400'}
          ${isActive 
            ? 'top-0 text-xs' 
            : 'top-4 text-base lg:text-sm'
          }`}
      >
        {label}{required && <span className="text-red-400 ml-0.5">*</span>}
      </label>
    </div>
  );
}

export default function ContactHeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    fullName: false,
    email: false,
    phone: false,
    message: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const [desktopWidgetId, setDesktopWidgetId] = useState<number | null>(null);
  const [mobileWidgetId, setMobileWidgetId] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: false });
    }
  };

  const validateForm = () => {
    const newErrors = {
      fullName: !formData.fullName.trim(),
      email: !formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
      phone: !formData.phone.trim(),
      message: !formData.message.trim()
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleSubmit = async () => {
    if (typeof window === 'undefined' || !(window as any).grecaptcha) {
      alert('reCAPTCHA is still loading. Please wait a moment and try again.');
      return;
    }

    const isMobile = window.innerWidth < 1024;
    const widgetId = isMobile ? mobileWidgetId : desktopWidgetId;
    
    let recaptchaResponse = '';
    if (widgetId !== null) {
      recaptchaResponse = (window as any).grecaptcha.getResponse(widgetId);
    }
    
    if (!recaptchaResponse) {
      alert('Please complete the reCAPTCHA verification');
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken: recaptchaResponse
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        });
        if ((window as any).grecaptcha && widgetId !== null) {
          (window as any).grecaptcha.reset(widgetId);
        }
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    (window as any).onRecaptchaLoad = () => {
      setRecaptchaLoaded(true);
      
      if ((window as any).grecaptcha && document.getElementById('recaptcha-container')) {
        try {
          const desktopId = (window as any).grecaptcha.render('recaptcha-container', {
            'sitekey': process.env.NEXT_PUBLIC_RECAPTCHA_V2_SITE_KEY,
            'theme': 'dark',
            'size': 'normal'
          });
          setDesktopWidgetId(desktopId);
        } catch (error) {
          console.error('Error rendering desktop reCAPTCHA:', error);
        }
      }

      if ((window as any).grecaptcha && document.getElementById('recaptcha-container-mobile')) {
        try {
          const mobileId = (window as any).grecaptcha.render('recaptcha-container-mobile', {
            'sitekey': process.env.NEXT_PUBLIC_RECAPTCHA_V2_SITE_KEY,
            'theme': 'dark',
            'size': 'normal'
          });
          setMobileWidgetId(mobileId);
        } catch (error) {
          console.error('Error rendering mobile reCAPTCHA:', error);
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

      <section className="lg:hidden">
        <Navbar onMenuClick={() => setIsMenuOpen(true)} />
        
        <div className="bg-[#2B7856] px-6 pt-24 pb-8">
          <span className="text-white text-sm font-extrabold uppercase tracking-wider">GET IN TOUCH</span>
          
          <h1 className="text-white text-2xl font-extrabold leading-tight mt-4">
            Tell us about your business<br />needs and your goals.
          </h1>
          
          <p className="text-white text-base leading-relaxed mt-4">
            Try the software platform, tools and services we<br />are going to use. Get informed for your online<br />features: expected number of visitors, leads,<br />customers.
          </p>
        </div>

        <div className="bg-[var(--brand-dark)]">
          <div className="px-6 py-6">
            <p className="text-white text-sm leading-relaxed">
              Fill in the contact form<br />
              or call us at +30 2114018227 for information<br />and immediate updates.
            </p>
          </div>

          <div className="flex flex-col">
            <div className="border-t border-gray-400/30 h-14">
              <div className="px-6 h-full">
                <FloatingInput
                  name="fullName"
                  label="Full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  error={errors.fullName}
                />
              </div>
            </div>

            <div className="border-t border-gray-400/30 h-14">
              <div className="px-6 h-full">
                <FloatingInput
                  name="phone"
                  label="Phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  error={errors.phone}
                />
              </div>
            </div>

            <div className="border-t border-gray-400/30 h-14">
              <div className="px-6 h-full">
                <FloatingInput
                  name="email"
                  label="Email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  error={errors.email}
                />
              </div>
            </div>

            <div className="border-t border-gray-400/30 h-14">
              <div className="px-6 h-full">
                <FloatingInput
                  name="company"
                  label="Company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="border-t border-gray-400/30 h-32">
              <div className="px-6 h-full">
                <FloatingTextarea
                  name="message"
                  label="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  error={errors.message}
                />
              </div>
            </div>

            <div className="border-t border-gray-400/30 h-24 flex items-center justify-center overflow-hidden">
              <div 
                id="recaptcha-container-mobile"
                style={{
                  transform: 'scaleX(1) scaleY(1)',
                  transformOrigin: 'center center'
                }}
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`w-full h-24 flex items-center justify-between px-6 text-white text-lg bg-[#2B7856] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'}`}
            >
              <span>{isSubmitting ? 'Sending...' : submitStatus === 'success' ? 'Message Sent!' : submitStatus === 'error' ? 'Try Again' : 'Send message'}</span>
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12h8M12 8l4 4-4 4"/>
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
      </section>

      <div className="hidden lg:block">
        <Navbar onMenuClick={() => setIsMenuOpen(true)} />

        <div className="relative w-full">
          <div className="absolute left-0 top-0 bottom-0 bg-[#2B7856]" style={{ width: '5.56%' }} />
          <div className="absolute right-0 top-0 bottom-0 bg-[var(--brand-dark)]" style={{ width: '5.56%' }} />
          <div className="absolute top-0 bottom-0 w-px bg-gray-400/30 z-20" style={{ left: '5.56%' }} />
          
          <GridSection
            bgColor="bg-transparent"
            showLines={[false, false, true, false, true]}
            minHeight="auto"
          >
            <GridContainer>
              <GridCol 
                span="AB" 
                className="flex items-end pb-4 pl-6"
                style={{ backgroundColor: '#2B7856', height: 'calc(5.56vw + 8rem)', paddingTop: '5.56vw' }}
              >
                <span className="text-white text-base font-extrabold uppercase tracking-wider">GET IN TOUCH</span>
              </GridCol>
              <GridCol 
                span="CD" 
                className="flex items-center pl-6 pr-8"
                style={{ backgroundColor: 'var(--brand-dark)', height: 'calc(5.56vw + 8rem)', paddingTop: '5.56vw' }}
              >
                <p className="text-white text-lg leading-relaxed">
                  Fill in the contact form<br />
                  or call us at +30 2114018227 for information and immediate updates.
                </p>
              </GridCol>
            </GridContainer>
          </GridSection>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 bg-[#2B7856]" style={{ width: '5.56%' }} />
          <div className="absolute right-0 top-0 bottom-0 bg-[var(--brand-dark)]" style={{ width: '5.56%' }} />
          <div className="absolute top-0 bottom-0 w-px bg-gray-400/30 z-20" style={{ left: '5.56%' }} />
          <div className="absolute top-0 left-0 right-0 h-px bg-gray-400/30 z-20" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-400/30 z-20" />
          
          <GridSection
            bgColor="bg-transparent"
            showLines={[false, false, true, true, true]}
            minHeight="auto"
          >
            <GridContainer className="h-40">
              <GridCol 
                span="AB" 
                className="flex items-start pt-8 pl-6 pr-6 h-40"
                style={{ backgroundColor: '#2B7856' }}
              >
                <h1 className="text-white text-5xl font-extrabold leading-tight">
                  Tell us about your business<br />needs and your goals.
                </h1>
              </GridCol>
              
              <GridCol 
                span="C" 
                className="flex flex-col h-40"
                style={{ backgroundColor: 'var(--brand-dark)' }}
              >
                <div className="h-20 border-b border-gray-400/30 border-r border-r-gray-400/30">
                  <FloatingInput
                    name="fullName"
                    label="Full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    error={errors.fullName}
                  />
                </div>
                <div className="h-20 border-r border-r-gray-400/30">
                  <FloatingInput
                    name="email"
                    label="Email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    error={errors.email}
                  />
                </div>
              </GridCol>

              <GridCol 
                span="D" 
                className="flex flex-col h-40"
                style={{ backgroundColor: 'var(--brand-dark)' }}
              >
                <div className="h-20 border-b border-gray-400/30">
                  <FloatingInput
                    name="phone"
                    label="Phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    error={errors.phone}
                  />
                </div>
                <div className="h-20">
                  <FloatingInput
                    name="company"
                    label="Company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
              </GridCol>
            </GridContainer>
          </GridSection>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 bg-[#2B7856]" style={{ width: '5.56%' }} />
          <div className="absolute right-0 top-0 bottom-0 bg-[var(--brand-dark)]" style={{ width: '5.56%' }} />
          <div className="absolute top-0 bottom-0 w-px bg-gray-400/30 z-20" style={{ left: '5.56%' }} />
          
          <GridSection
            bgColor="bg-transparent"
            showLines={[false, false, true, false, true]}
            minHeight="auto"
          >
            <GridContainer className="h-64">
              <GridCol 
                span="AB" 
                className="flex items-start pt-8 pl-6 pr-6 h-64"
                style={{ backgroundColor: '#2B7856' }}
              >
                <p className="text-white text-lg leading-relaxed">
                  Try the software platform, tools and services we are going to<br />use. Get informed for your online features: expected number<br />of visitors, leads, customers.
                </p>
              </GridCol>
              
              <GridCol 
                span="CD" 
                className="flex flex-col h-64"
                style={{ backgroundColor: 'var(--brand-dark)' }}
              >
                <div className="h-40 border-r border-r-gray-400/30">
                  <FloatingTextarea
                    name="message"
                    label="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    error={errors.message}
                  />
                </div>

                <div className="w-full h-px bg-gray-400/30" />

                <div className="flex h-24">
                  <div className="w-1/2 h-24 flex items-center justify-center border-r border-gray-400/30">
                    <div 
                      id="recaptcha-container"
                      style={{
                        transform: 'scaleX(1.123) scaleY(0.98)',
                        transformOrigin: 'center center',
                        left: '0'
                      }}
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className={`w-1/2 h-24 flex items-center justify-between px-6 text-white text-lg transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'}`}
                    style={{ backgroundColor: '#2B7856' }}
                  >
                    <span>{isSubmitting ? 'Sending...' : submitStatus === 'success' ? 'Message Sent!' : submitStatus === 'error' ? 'Try Again' : 'Send message'}</span>
                    <svg 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="1.5"
                      className="flex-shrink-0"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 12h8M12 8l4 4-4 4"/>
                    </svg>
                  </button>
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