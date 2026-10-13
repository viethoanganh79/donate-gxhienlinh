import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PriestLetter } from './components/PriestLetter';
import { FundraisingProgress } from './components/FundraisingProgress';
import { WhyWeNeedHelp } from './components/WhyWeNeedHelp';
import { BentoMinistries } from './components/BentoMinistries';
import { HowToDonate } from './components/HowToDonate';
import { ParishFaq } from './components/ParishFaq';
import { Footer } from './components/Footer';
import { DonationModal } from './components/DonationModal';

export default function App() {
  const [donateModalOpen, setDonateModalOpen] = useState(false);
  const [selectedMinistryForModal, setSelectedMinistryForModal] = useState<string>('church_building');

  const handleOpenDonate = (ministryId: string = 'church_building') => {
    setSelectedMinistryForModal(ministryId);
    setDonateModalOpen(true);
  };

  const handleSelectMinistryFromBento = (ministryId: string) => {
    setSelectedMinistryForModal(ministryId);
    setDonateModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-stone-800 flex flex-col font-sans selection:bg-blue-200 selection:text-blue-950 overflow-x-hidden max-w-full">
      {/* 1. Header Navigation */}
      <Header onOpenDonate={handleOpenDonate} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onOpenDonate={() => handleOpenDonate('church_building')} />

        {/* 3. Lời ngỏ từ Cha Xứ */}
        <PriestLetter />

        {/* 4. Tiến độ quyên góp */}
        <FundraisingProgress onOpenDonate={() => handleOpenDonate('church_building')} />

        {/* 5. Tại sao cần xây mới? */}
        <WhyWeNeedHelp />

        {/* 6. Các mục vụ khác (Bento Grid Layout) */}
        <BentoMinistries onSelectMinistry={handleSelectMinistryFromBento} />

        {/* 7. Cách thức đóng góp (Bank Transfer, VietQR, Direct Office) */}
        <HowToDonate initialMinistryId={selectedMinistryForModal} />

        {/* Transparency FAQ */}
        <ParishFaq />
      </main>

      {/* 8. Chân trang Footer */}
      <Footer />

      {/* Interactive Donation Quick Modal */}
      <DonationModal
        isOpen={donateModalOpen}
        onClose={() => setDonateModalOpen(false)}
        selectedMinistryId={selectedMinistryForModal}
      />
    </div>
  );
}
