import { GridSection, GridContainer, GridCol } from "../../components/grid";
import Image from "next/image";

const MapSection = () => {
  return (
    <>
      {/* Desktop Layout */}
      <GridSection desktopOnly={true} showLines={[false, false, false, false, true]}>
        <GridContainer className="h-[350px]">
          {/* Left side: Map covering AB + small left column */}
          <GridCol span="AB" className="h-[350px] relative">
            <div className="absolute inset-0 -left-[calc(5.56%/0.4444)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.5!2d23.7287!3d37.9987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd3f4a9b0001%3A0x0!2sEvalkidou%205%20%26%20Liosion%2C%20Athens%2010445!5e0!3m2!1sen!2sgr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Synergic Location"
              />
            </div>
          </GridCol>

          {/* Right side: Brand dark background covering CD + small right column */}
          <GridCol span="CD" className="h-[350px] relative">
            {/* Brand dark background extending to right edge */}
            <div className="absolute inset-0 -right-[calc(5.56%/0.4444)] bg-[var(--brand-dark)]" />
            
            {/* Manual gridline 5 on top */}
            <div className="absolute top-0 bottom-0 right-0 w-px bg-gray-400/30 z-20" />
            
            {/* Cards container */}
            <div className="relative z-10 h-full flex flex-col justify-start">
              {/* Address Card */}
              <div className="h-[130px] flex items-center gap-6 px-8 bg-[#3c4651] border border-white/20">
                <Image
                  src="/icons/map-pinpoint.svg"
                  alt="Location"
                  width={28}
                  height={28}
                />
                <p className="text-white text-lg">
                  Evalkidou 5 & Liosion<br />
                  Athens 10445
                </p>
              </div>

              {/* Contact Card */}
              <div className="h-[130px] flex items-center gap-6 px-8 bg-[#3c4651] border border-white/20">
                <Image
                  src="/icons/contact-us.svg"
                  alt="Contact"
                  width={28}
                  height={28}
                />
                <p className="text-white text-lg">
                  +30 211 444 2500<br />
                  info@synergic.gr
                </p>
              </div>
            </div>
          </GridCol>
        </GridContainer>
      </GridSection>

      {/* Mobile Layout */}
      <section className="lg:hidden">
        {/* Address Card */}
        <div className="flex items-center gap-6 px-4 py-6 bg-[#3c4651] border border-white/20">
          <Image
            src="/icons/map-pinpoint.svg"
            alt="Location"
            width={28}
            height={28}
          />
          <p className="text-white text-lg">
            Evalkidou 5 & Liosion Athens 10445
          </p>
        </div>

        {/* Contact Card */}
        <div className="flex items-center gap-6 px-4 py-6 bg-[#3c4651] border border-white/20">
          <Image
            src="/icons/contact-us.svg"
            alt="Contact"
            width={28}
            height={28}
          />
          <p className="text-white text-lg">
            +30 211 444 2500<br />
            info@synergic.gr
          </p>
        </div>

        {/* Map */}
        <div className="h-[300px] w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.5!2d23.7287!3d37.9987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd3f4a9b0001%3A0x0!2sEvalkidou%205%20%26%20Liosion%2C%20Athens%2010445!5e0!3m2!1sen!2sgr!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Synergic Location"
          />
        </div>
      </section>
    </>
  );
};

export default MapSection;