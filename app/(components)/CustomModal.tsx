"use client";

const CustomModal = ({
  icon,
  children,
  toggleMenu,
  isOpen,
}: {
  icon?: React.ReactNode;
  children: React.ReactNode;
  toggleMenu: (value: boolean) => void;
  isOpen: boolean;
}) => {
  return (
    <div>
      {icon && <button onClick={() => toggleMenu(!isOpen)}>{icon}</button>}
      {isOpen && (
        <>
          <div
            className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${
              isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={() => toggleMenu(false)}
          />
          <div
            className={`fixed left-0 top-0 h-full bg-white w-64 transform transition-all duration-500 ease-in-out z-50 ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            {children}
          </div>
        </>
      )}
    </div>
  );
};

export default CustomModal;
