import OptimizedImg from "./OptimizedImg";
import AnimatedSection from "./AnimatedSection";

export default function FeaturedCollections() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto bg-white">
        <AnimatedSection animation="fadeIn" delay={0.2}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 tracking-wide text-gray-900" style={{fontFamily: 'Oswald, Bebas Neue, Montserrat, Arial, sans-serif'}}>
            Curated Collections
          </h2>
        </AnimatedSection>

        <AnimatedSection animation="slideRight" delay={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            <AnimatedSection animation="slideUp" delay={0.4} className="flex flex-col items-center">
              <OptimizedImg src="/images/WhiteOud.jpg" alt="Velour Essence Eau De Parfum" width={400} height={320} className="w-full h-80 object-contain bg-white rounded-xl mb-4" />
              <div className="text-lg md:text-xl font-bold text-gray-800 text-center uppercase tracking-[0.18em]" style={{fontFamily: 'Oswald, Bebas Neue, Montserrat, Arial, sans-serif'}}>White Oud</div>
            </AnimatedSection>
            
            <AnimatedSection animation="slideUp" delay={0.5} className="flex flex-col items-center">
              <OptimizedImg src="/images/Tobacco .jpg" alt="Elegant Perfume" width={400} height={320} className="w-full h-80 object-contain bg-white rounded-xl mb-4" />
              <div className="text-lg md:text-xl font-bold text-gray-800 text-center uppercase tracking-[0.18em]" style={{fontFamily: 'Oswald, Bebas Neue, Montserrat, Arial, sans-serif'}}>Tobacco Oud</div>
            </AnimatedSection>
            
            <AnimatedSection animation="slideUp" delay={0.6} className="flex flex-col items-center">
              <OptimizedImg src="/images/blackOud.jpg" alt="Silken Essence Eau De Parfum" width={400} height={320} className="w-full h-80 object-contain bg-white rounded-xl mb-4" />
              <div className="text-lg md:text-xl font-bold text-gray-800 text-center uppercase tracking-[0.18em]" style={{fontFamily: 'Oswald, Bebas Neue, Montserrat, Arial, sans-serif'}}>Black Oud </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slideUp" delay={0.7} className="flex flex-col items-center">
              <OptimizedImg src="/images/Kaishiri.jpg" alt="Velvet Aura Eau De Parfum" width={400} height={320} className="w-full h-80 object-contain bg-white rounded-xl mb-4" />
              <div className="text-lg md:text-xl font-bold text-gray-800 text-center uppercase tracking-[0.18em]" style={{fontFamily: 'Oswald, Bebas Neue, Montserrat, Arial, sans-serif'}}>Kashmiri</div>
            </AnimatedSection>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fadeIn" delay={0.8}>
          <div className="flex justify-center">
            <a href="/collections" className="inline-flex items-center gap-3 px-8 py-3 bg-[#f4f3f2] text-black text-lg font-semibold rounded transition hover:bg-[#fcfcfc] shadow-md">
              <span>&rarr;</span> VIEW FULL COLLECTION
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}