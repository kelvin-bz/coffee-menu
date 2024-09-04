import React from 'react';
import { drinkNames, menuItems } from './drinkNames';
import logo from './mn_logo.png';  // Import the logo

const getTranslatedName = (name) => {
  return drinkNames[name] || name;
};

const MenuSection = ({ title, items, isInline = false }) => (
  <div className="mb-6 border border-[rgb(203,180,57)] p-4 relative">
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[rgb(55,64,55)] px-4">
      <h2 className="text-xl font-bold text-[rgb(203,180,57)] whitespace-nowrap">{title}</h2>
    </div>
    {isInline ? (
      <div className="flex flex-wrap gap-2 mt-4">
        {items.map((item, index) => (
          <div key={index} className="mb-2">
            <span className="text-white">{item}</span>
            <span className="text-sm text-gray-300 ml-1">({getTranslatedName(item)})</span>
          </div>
        ))}
      </div>
    ) : (
      <ul className="mt-4">
        {items.map((item, index) => (
          <li key={index} className="mb-2">
            <span className="text-white">{item}</span>
            <span className="text-sm text-gray-300 ml-1">({getTranslatedName(item)})</span>
          </li>
        ))}
      </ul>
    )}
  </div>
);

const CoffeeMenu = () => {
  return (
    <div className="bg-[rgb(55,64,55)] text-white p-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-center mb-8">
        <img src={logo} alt="Mộc Nhiên Coffee Logo" className="w-24 h-auto mr-4" />
        <h1 className="text-3xl font-bold text-[rgb(210,164,16)]">Mộc Nhiên COFFEE</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <MenuSection title="CAFÉ & CACAO" items={menuItems.cafeAndCacao} />
          <MenuSection title="SMOOTHIES" items={menuItems.smoothies} />
          <MenuSection title="SINH TỐ - ĐÁ XAY" items={menuItems.sinhToDaXay} />
         
        </div>
        <div>
          <MenuSection title="HIBICUS - TRÀ TRÁI CÂY" items={menuItems.hibicusTraTraiCay} />
          <MenuSection title="TRÀ SỮA (FULL TOPPING)" items={menuItems.traSua} />
          <MenuSection title="THỨC UỐNG NÓNG" items={menuItems.thucUongNong} />
         
        </div>
        <div>
        <MenuSection title="YOGURT - NƯỚC ÉP" items={menuItems.yogurtNuocEp} />
        <MenuSection title="TRÀ MACHIATO" items={menuItems.traMatchiato} />
          <MenuSection title="BÁNH NGỌT" items={menuItems.banhNgot} />
          <MenuSection title="MÓN THÊM" items={menuItems.monThem} isInline={true} />
        </div>
      </div>
    </div>
  );
};

export default CoffeeMenu;