export default function Footer() {
  return (
    <footer className="bg-[#05080F] text-[#e6e6e6b7]  py-8 border-t border-gray-700">
      
      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 mt-6">
        © {new Date().getFullYear()} Rui Gomes. All rights reserved.
      </div>
    </footer>
  );
}
