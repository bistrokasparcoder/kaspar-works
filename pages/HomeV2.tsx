import React from 'react';
import HeroManifest from '../components/Sections/HeroManifest';
import TrustStrip from '../components/Sections/TrustStrip';
import ManifestoPin from '../components/Sections/ManifestoPin';
import StudioLedger from '../components/Sections/StudioLedger';
import ProductScrub from '../components/Sections/ProductScrub';
import CapabilitiesBento from '../components/Sections/CapabilitiesBento';
import ProcessRail from '../components/Sections/ProcessRail';
import WhyChooseUs from '../components/Sections/WhyChooseUs';
import ClosingRitual from '../components/Sections/ClosingRitual';

interface HomeV2Props {
  onOpenContact: () => void;
}

/**
 * Home — Kaspar Works professional composition.
 *
 * Flow:
 *   1. HeroManifest       — headline, subheadline, dual CTA
 *   2. TrustStrip         — service chips (trusted for…)
 *   3. ManifestoPin       — 3-beat philosophy pin-scroll
 *   4. StudioLedger       — credibility figures
 *   5. ProductScrub       — featured projects (horizontal pin)
 *   6. CapabilitiesBento  — services grid
 *   7. ProcessRail        — Discover / Define / Build / Launch / Support
 *   8. WhyChooseUs        — confidence block
 *   9. ClosingRitual      — final CTA
 */
const HomeV2: React.FC<HomeV2Props> = ({ onOpenContact }) => {
  return (
    <>
      <HeroManifest onOpenContact={onOpenContact} />
      <TrustStrip />
      <ManifestoPin />
      <StudioLedger />
      <ProductScrub />
      <CapabilitiesBento />
      <ProcessRail />
      <WhyChooseUs />
      <ClosingRitual onOpenContact={onOpenContact} />
    </>
  );
};

export default HomeV2;
