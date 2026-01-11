function Footer({ children }) {
  return (
    <footer className="flex justify-center items-center">
      <div className="w-80 flex flex-row justify-between items-center">
        {children}
      </div>
    </footer>
  );    
}

export default Footer;